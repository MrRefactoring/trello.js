import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { z } from 'zod';
import {
  describeIssues,
  reportSchemaMismatch,
  resetSchemaMismatchReporting,
  warnOnce,
} from '../../../src/core/schemaMismatch';

/** Runs a schema against a body and returns the issues the way the transport would. */
function issuesFor(schema: z.ZodType, body: unknown) {
  const parsed = schema.safeParse(body);

  if (parsed.success) throw new Error('expected the schema to reject this body');

  return describeIssues(parsed.error.issues, body);
}

describe('describeIssues', () => {
  it('names the path, what was expected and the type that arrived', () => {
    const schema = z.object({ id: z.string() });
    expect(issuesFor(schema, { id: 42 })).toEqual([{ path: 'id', expected: 'string', received: 'number' }]);
  });

  it('reports a missing field as absent rather than as undefined', () => {
    const schema = z.object({ id: z.string() });
    expect(issuesFor(schema, {})).toEqual([{ path: 'id', expected: 'string', received: 'nothing' }]);
  });

  it('distinguishes null from a missing field', () => {
    const schema = z.object({ agent: z.object({ id: z.string() }) });
    expect(issuesFor(schema, { agent: null })).toEqual([{ path: 'agent', expected: 'object', received: 'null' }]);
  });

  it('joins array indices into the path', () => {
    const schema = z.array(z.object({ dueReminder: z.string() }));
    expect(issuesFor(schema, [{ dueReminder: 1 }, { dueReminder: 2 }])).toEqual([
      { path: '0.dueReminder', expected: 'string', received: 'number' },
      { path: '1.dueReminder', expected: 'string', received: 'number' },
    ]);
  });

  it('uses an empty path for the response root', () => {
    const schema = z.array(z.string());
    expect(issuesFor(schema, { notAnArray: true })).toEqual([{ path: '', expected: 'array', received: 'object' }]);
  });

  it('flattens union branches instead of nesting them', () => {
    const schema = z.object({ pos: z.union([z.string(), z.number()]) });
    const issues = issuesFor(schema, { pos: true });

    expect(issues.length).toBeGreaterThan(0);
    expect(issues.every(issue => issue.path === 'pos')).toBe(true);
    expect(issues.every(issue => issue.received === 'boolean')).toBe(true);
  });

  it('names undocumented keys, which describe the schema rather than the data', () => {
    const schema = z.strictObject({ id: z.string() });
    expect(issuesFor(schema, { id: 'a', aiMetadata: { model: 'x' } })).toEqual([
      { path: '', expected: 'no undocumented keys', received: 'undocumented: aiMetadata' },
    ]);
  });

  it('keeps no values from the body', () => {
    const schema = z.object({ name: z.number(), labels: z.array(z.number()) });
    const body = { name: 'Q3 roadmap — internal', labels: ['confidential'] };

    expect(JSON.stringify(issuesFor(schema, body))).not.toContain('Q3 roadmap');
    expect(JSON.stringify(issuesFor(schema, body))).not.toContain('confidential');
  });
});

describe('warnOnce', () => {
  beforeEach(() => {
    resetSchemaMismatchReporting();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('prints one line per issue, on stderr', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    warnOnce({
      endpoint: 'GET /boards/{id}/cards',
      issues: [
        { path: '0.dueReminder', expected: 'string', received: 'number' },
        { path: '0.labels.0.color', expected: 'enum value', received: 'string' },
      ],
    });

    expect(warn).toHaveBeenCalledTimes(2);
    expect(warn.mock.calls[0][0]).toContain('[trello.js]');
    expect(warn.mock.calls[0][0]).toContain('GET /boards/{id}/cards');
    expect(warn.mock.calls[0][0]).toContain('`0.dueReminder`');
  });

  it('says "the response root" rather than an empty path', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    warnOnce({ endpoint: 'GET /boards', issues: [{ path: '', expected: 'array', received: 'object' }] });
    expect(warn.mock.calls[0][0]).toContain('the response root');
  });

  it('repeats neither the same issue nor the same field across many pages', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const report = {
      endpoint: 'GET /boards/{id}/cards',
      issues: [{ path: '0.dueReminder', expected: 'string', received: 'number' }],
    };

    for (let i = 0; i < 500; i++) warnOnce(report);

    expect(warn).toHaveBeenCalledTimes(1);
  });

  it('treats the same field on a different endpoint as a separate problem', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const issues = [{ path: 'dueReminder', expected: 'string', received: 'number' }];

    warnOnce({ endpoint: 'GET /cards/{id}', issues });
    warnOnce({ endpoint: 'GET /lists/{id}/cards', issues });

    expect(warn).toHaveBeenCalledTimes(2);
  });
});

describe('reportSchemaMismatch', () => {
  const report = { endpoint: 'GET /boards/{id}', issues: [{ path: 'id', expected: 'string', received: 'number' }] };

  beforeEach(() => {
    resetSchemaMismatchReporting();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('asks the caller to throw only for throw', () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});

    expect(reportSchemaMismatch('throw', report)).toBe(true);
    expect(reportSchemaMismatch('warn', report)).toBe(false);
    expect(reportSchemaMismatch('silent', report)).toBe(false);
    expect(reportSchemaMismatch(() => {}, report)).toBe(false);
  });

  it('prints for warn and stays quiet for silent', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    reportSchemaMismatch('silent', report);
    expect(warn).not.toHaveBeenCalled();

    reportSchemaMismatch('warn', report);
    expect(warn).toHaveBeenCalledTimes(1);
  });

  it('replaces the printing entirely with a custom function', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const handler = vi.fn();

    reportSchemaMismatch(handler, report);

    expect(handler).toHaveBeenCalledWith(report);
    expect(warn).not.toHaveBeenCalled();
  });
});
