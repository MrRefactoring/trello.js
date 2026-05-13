import { describe, it, expect } from 'vitest';
import jscodeshift from 'jscodeshift';
import transform from '../../../tools/codemod/v1-to-v2';

function applyTransform(source: string, path = 'test.ts'): string {
  const j = jscodeshift.withParser('tsx');
  const api = {
    jscodeshift: j,
    j,
    stats: () => {},
    report: () => {},
  };
  // jscodeshift's Transform return type is `string | undefined | null | void`
  const result = transform({ source, path }, api as unknown as Parameters<typeof transform>[1], {});
  return (result as string | null | undefined) ?? source;
}

describe('v1-to-v2 codemod', () => {
  describe('import rename', () => {
    it('renames TrelloClient → createTrelloClient', () => {
      const out = applyTransform(`import { TrelloClient } from 'trello.js';`);
      expect(out).toContain("import { createTrelloClient } from 'trello.js'");
      // No bare `TrelloClient` identifier left
      expect(out).not.toMatch(/\bTrelloClient\b/);
    });

    it('preserves aliased import names', () => {
      const out = applyTransform(`import { TrelloClient as TC } from 'trello.js';\nconst c = new TC({ key: 'k', token: 't' });`);
      expect(out).toContain("import { createTrelloClient as TC } from 'trello.js'");
      expect(out).toContain('TC({');
      expect(out).not.toContain('new TC');
    });

    it('handles other imports alongside', () => {
      const out = applyTransform(`import { TrelloClient, type Board } from 'trello.js';`);
      expect(out).toContain('createTrelloClient');
      expect(out).toContain('type Board');
    });

    it('does not touch imports from other packages', () => {
      const out = applyTransform(`import { TrelloClient } from 'some-other-pkg';`);
      expect(out).toContain("import { TrelloClient } from 'some-other-pkg'");
    });
  });

  describe('constructor → factory call', () => {
    it('converts new TrelloClient({...}) to a call', () => {
      const out = applyTransform(`
        import { TrelloClient } from 'trello.js';
        const c = new TrelloClient({ key: 'k', token: 't' });
      `);
      expect(out).toContain('createTrelloClient({');
      expect(out).not.toMatch(/new\s+TrelloClient/);
      expect(out).not.toMatch(/new\s+createTrelloClient/);
    });

    it('preserves the argument list', () => {
      const out = applyTransform(`
        import { TrelloClient } from 'trello.js';
        const c = new TrelloClient({ key: 'k', token: 't', host: 'https://x.example' });
      `);
      expect(out).toContain('host:');
      expect(out).toContain("'https://x.example'");
    });
  });

  describe('config key rename', () => {
    it('renames key → apiKey and token → apiToken', () => {
      const out = applyTransform(`
        import { TrelloClient } from 'trello.js';
        new TrelloClient({ key: 'k', token: 't' });
      `);
      expect(out).toContain('apiKey:');
      expect(out).toContain('apiToken:');
      expect(out).not.toMatch(/\bkey:\s*'k'/);
      expect(out).not.toMatch(/\btoken:\s*'t'/);
    });

    it('renames inside a shorthand-properties object', () => {
      const out = applyTransform(`
        import { TrelloClient } from 'trello.js';
        const key = 'k', token = 't';
        new TrelloClient({ key, token });
      `);
      // Shorthand expanded to apiKey: key
      expect(out).toContain('apiKey: key');
      expect(out).toContain('apiToken: token');
    });

    it('handles string-literal keys', () => {
      const out = applyTransform(`
        import { TrelloClient } from 'trello.js';
        new TrelloClient({ 'key': 'k', 'token': 't' });
      `);
      expect(out).toContain('apiKey');
      expect(out).toContain('apiToken');
    });

    it('leaves other keys alone', () => {
      const out = applyTransform(`
        import { TrelloClient } from 'trello.js';
        new TrelloClient({ key: 'k', token: 't', host: 'x', headers: { 'X-Foo': '1' } });
      `);
      expect(out).toContain('host:');
      expect(out).toContain('headers:');
      expect(out).toContain("'X-Foo'");
    });

    it('does not rename `key` outside of a TrelloClient call', () => {
      const out = applyTransform(`
        const obj = { key: 'k', token: 't' };
      `);
      expect(out).toContain("key: 'k'");
      expect(out).toContain("token: 't'");
    });
  });

  describe('full migration', () => {
    it('handles the canonical v1 → v2 transition end-to-end', () => {
      const input = `import { TrelloClient } from 'trello.js';

const client = new TrelloClient({
  key: process.env.TRELLO_KEY,
  token: process.env.TRELLO_TOKEN,
});

await client.boards.getBoard({ id: 'abc' });
`;
      const out = applyTransform(input);
      expect(out).toContain("import { createTrelloClient } from 'trello.js'");
      expect(out).toContain('createTrelloClient({');
      expect(out).toContain('apiKey: process.env.TRELLO_KEY');
      expect(out).toContain('apiToken: process.env.TRELLO_TOKEN');
      expect(out).toContain('client.boards.getBoard'); // chain calls untouched
      expect(out).not.toContain('new TrelloClient');
      expect(out).not.toContain("key: process.env");
      expect(out).not.toContain("token: process.env");
    });
  });

  describe('no-op cases', () => {
    it('returns source unchanged when nothing to do', () => {
      const src = `import { something } from 'unrelated';\nconst x = 1;`;
      expect(applyTransform(src)).toBe(src);
    });

    it('leaves v2-style code untouched', () => {
      const src = `import { createTrelloClient } from 'trello.js';\nconst c = createTrelloClient({ apiKey: 'k', apiToken: 't' });`;
      expect(applyTransform(src)).toBe(src);
    });
  });
});
