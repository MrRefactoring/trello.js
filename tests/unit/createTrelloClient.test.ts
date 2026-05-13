import { describe, it, expect, vi, afterEach } from 'vitest';
import { createTrelloClient } from '../../src/createTrelloClient';

function mockFetch(status: number, body: unknown, contentType = 'application/json') {
  const text = typeof body === 'string' ? body : JSON.stringify(body);
  return vi.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status,
    statusText: String(status),
    headers: { get: (h: string) => (h === 'content-type' ? contentType : null) },
    json: () => Promise.resolve(body),
    text: () => Promise.resolve(text),
  });
}

const BASE_CONFIG = { apiKey: 'test-key', apiToken: 'test-token' };

// ─── createTrelloClient ─────────────────────────────────────────────────────

describe('createTrelloClient', () => {
  it('returns all expected namespaces', () => {
    const client = createTrelloClient(BASE_CONFIG);
    const expectedNamespaces = [
      'actions', 'batch', 'boards', 'cards', 'checklists',
      'customFields', 'emoji', 'enterprises', 'labels', 'lists',
      'members', 'notifications', 'organizations', 'plugins',
      'search', 'tokens', 'webhooks',
    ];
    for (const ns of expectedNamespaces) {
      expect(client).toHaveProperty(ns);
    }
  });

  it('batch namespace has a run method', () => {
    const client = createTrelloClient(BASE_CONFIG);
    expect(typeof client.batch.run).toBe('function');
  });

  it('namespaces expose callable methods', () => {
    const client = createTrelloClient(BASE_CONFIG);
    expect(typeof client.boards.getBoard).toBe('function');
    expect(typeof client.cards.createCard).toBe('function');
    expect(typeof client.members.getMember).toBe('function');
  });
});

// ─── API contract snapshot ──────────────────────────────────────────────────

describe('createTrelloClient — API contract', () => {
  it('exposes stable set of namespaces and methods', () => {
    const client = createTrelloClient(BASE_CONFIG);
    const shape = Object.fromEntries(
      Object.entries(client).map(([ns, methods]) => [ns, Object.keys(methods as object).sort()]),
    );
    expect(shape).toMatchSnapshot();
  });
});

// ─── batch.run ──────────────────────────────────────────────────────────────

// Minimal objects that satisfy required schema fields.
const BOARD_DATA = { id: 'b1', name: 'Board', desc: '', closed: false, url: 'https://t.co/b1', shortUrl: 'https://t.co/b1' };
const BOARD_DATA_2 = { id: 'b2', name: 'Board 2', desc: '', closed: false, url: 'https://t.co/b2', shortUrl: 'https://t.co/b2' };

describe('batch.run', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('sends a single batch request with comma-joined URLs', async () => {
    vi.stubGlobal('fetch', mockFetch(200, [{ '200': BOARD_DATA }, { '200': BOARD_DATA_2 }]));
    const client = createTrelloClient(BASE_CONFIG);
    await client.batch.run(b => [
      b.boards.getBoard({ id: 'b1' }),
      b.boards.getBoard({ id: 'b2' }),
    ] as const);
    const [url] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string];
    expect(url).toContain('/batch');
    expect(url).toContain('urls=');
  });

  it('resolves each promise with its batch result', async () => {
    vi.stubGlobal('fetch', mockFetch(200, [{ '200': BOARD_DATA }, { '200': BOARD_DATA_2 }]));
    const client = createTrelloClient(BASE_CONFIG);
    const [board1, board2] = await client.batch.run(b => [
      b.boards.getBoard({ id: 'b1' }),
      b.boards.getBoard({ id: 'b2' }),
    ] as const);
    expect(board1.id).toBe('b1');
    expect(board2.id).toBe('b2');
  });

  it('rejects individual promise when batch returns non-2xx for that item', async () => {
    vi.stubGlobal('fetch', mockFetch(200, [{ '404': 'not found' }]));
    const client = createTrelloClient(BASE_CONFIG);
    await expect(
      client.batch.run(b => [b.boards.getBoard({ id: 'bad' })] as const),
    ).rejects.toThrow('Batch request failed');
  });
});

// ─── actions list endpoints: before / since query params ────────────────────

// Regression test for https://github.com/MrRefactoring/trello.js/issues/25
// The Trello swagger only documented `before`/`since` (and limit/page/format/…)
// on GET /boards/{boardId}/actions; the member/card/list/organization actions
// endpoints were truncated to just `filter`. The codegen now unifies them, so
// every actions-list method must accept and forward `before`/`since`.
describe('actions list endpoints — before/since (issue #25)', () => {
  afterEach(() => vi.unstubAllGlobals());

  const SINCE = '2024-01-01T00:00:00Z';
  const BEFORE = '2024-12-31T00:00:00Z';

  function lastUrl(): string {
    return ((fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string])[0];
  }

  it('getMemberActions forwards before and since to the URL', async () => {
    vi.stubGlobal('fetch', mockFetch(200, []));
    const client = createTrelloClient(BASE_CONFIG);
    await client.members.getMemberActions({ id: 'me', since: SINCE, before: BEFORE });
    const url = lastUrl();
    expect(url).toContain(`since=${encodeURIComponent(SINCE)}`);
    expect(url).toContain(`before=${encodeURIComponent(BEFORE)}`);
  });

  it('getCardActions forwards before and since to the URL', async () => {
    vi.stubGlobal('fetch', mockFetch(200, []));
    const client = createTrelloClient(BASE_CONFIG);
    await client.cards.getCardActions({ id: 'c1', since: SINCE, before: BEFORE });
    const url = lastUrl();
    expect(url).toContain(`since=${encodeURIComponent(SINCE)}`);
    expect(url).toContain(`before=${encodeURIComponent(BEFORE)}`);
  });

  it('getListActions forwards before and since to the URL', async () => {
    vi.stubGlobal('fetch', mockFetch(200, []));
    const client = createTrelloClient(BASE_CONFIG);
    await client.lists.getListActions({ id: 'l1', since: SINCE, before: BEFORE });
    const url = lastUrl();
    expect(url).toContain(`since=${encodeURIComponent(SINCE)}`);
    expect(url).toContain(`before=${encodeURIComponent(BEFORE)}`);
  });

  it('getOrganizationActions forwards before and since to the URL', async () => {
    vi.stubGlobal('fetch', mockFetch(200, []));
    const client = createTrelloClient(BASE_CONFIG);
    await client.organizations.getOrganizationActions({ id: 'o1', since: SINCE, before: BEFORE });
    const url = lastUrl();
    expect(url).toContain(`since=${encodeURIComponent(SINCE)}`);
    expect(url).toContain(`before=${encodeURIComponent(BEFORE)}`);
  });
});
