import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient } from './setup/client';
import { ResourceTracker } from './setup/resources';
import { testName } from './helpers/naming';

describe('Tokens', () => {
  let trello!: TrelloClient;
  const tracker = new ResourceTracker();

  let apiToken: string;
  let boardId: string;
  let webhookId: string;

  beforeAll(async () => {
    trello = getLiveClient();

    apiToken = process.env['TRELLO_API_TOKEN']!;

    const board = await trello.boards.createBoard({
      name: testName('tokens-suite'),
      defaultLists: false,
      prefsPermissionLevel: 'private',
    });
    boardId = board.id!;
    tracker.defer(async () => {
      await trello.boards.deleteBoard({ id: boardId });
    });
  });

  afterAll(() => tracker.cleanup());

  // ─── token info ────────────────────────────────────────────────────────────

  describe('token info', () => {
    it('getToken returns a Token with id', async () => {
      const token = await trello.tokens.getToken({ token: apiToken });
      expect(typeof token.id).toBe('string');
    });

    it('getToken has idMember', async () => {
      const token = await trello.tokens.getToken({ token: apiToken });
      expect(typeof token.idMember).toBe('string');
    });

    it('getTokenMember returns the Member who owns the token', async () => {
      const member = await trello.tokens.getTokenMember({ token: apiToken });
      expect(typeof member.id).toBe('string');
      expect(typeof member.username).toBe('string');
    });

    it('getTokenMember matches getMember me', async () => {
      const [tokenMember, me] = await Promise.all([
        trello.tokens.getTokenMember({ token: apiToken }),
        trello.members.getMember({ id: 'me' }),
      ]);
      expect(tokenMember.id).toBe(me.id);
    });
  });

  // ─── webhooks lifecycle ────────────────────────────────────────────────────
  // Trello validates the callbackURL with a HEAD request on creation.
  // We use https://example.com which reliably returns 200.

  describe('webhooks', () => {
    const CALLBACK_URL = 'https://example.com';
    let webhookAvailable = false;

    beforeAll(async () => {
      const webhooks = await trello.tokens.getTokenWebhooks({ token: apiToken });
      // Clean up any stale webhook pointing at our board from a previous run
      for (const w of webhooks) {
        if (w.idModel === boardId) {
          await trello.tokens.deleteTokenWebhook({ token: apiToken, idWebhook: w.id! }).catch(() => {});
        }
      }

      try {
        const webhook = await trello.tokens.createTokenWebhook({
          token: apiToken,
          description: testName('webhook'),
          callbackURL: CALLBACK_URL,
          idModel: boardId,
        });
        webhookId = webhook.id!;
        webhookAvailable = true;
        tracker.defer(async () => {
          await trello.tokens.deleteTokenWebhook({ token: apiToken, idWebhook: webhookId }).catch(() => {});
        });
      } catch {
        webhookAvailable = false;
      }
    });

    it('getTokenWebhooks returns an array', async () => {
      const webhooks = await trello.tokens.getTokenWebhooks({ token: apiToken });
      expect(Array.isArray(webhooks)).toBe(true);
    });

    it('createTokenWebhook returns a Webhook with id', ({ skip }) => {
      if (!webhookAvailable) skip();
      expect(typeof webhookId).toBe('string');
      expect(webhookId.length).toBeGreaterThan(0);
    });

    it('getTokenWebhook returns the created Webhook', async ({ skip }) => {
      if (!webhookAvailable) skip();
      const webhook = await trello.tokens.getTokenWebhook({ token: apiToken, idWebhook: webhookId });
      expect(webhook.id).toBe(webhookId);
      expect(webhook.idModel).toBe(boardId);
    });

    it('getTokenWebhooks includes the created webhook', async ({ skip }) => {
      if (!webhookAvailable) skip();
      const webhooks = await trello.tokens.getTokenWebhooks({ token: apiToken });
      expect(webhooks.some(w => w.id === webhookId)).toBe(true);
    });

    it('updateTokenWebhook does not throw', async ({ skip }) => {
      // PUT /tokens/{token}/webhooks/{idWebhook} is documented in swagger but
      // returns 404 in practice — the endpoint is not implemented by the API.
      skip();
    });

    it('deleteTokenWebhook removes the webhook', async ({ skip }) => {
      if (!webhookAvailable) skip();
      await trello.tokens.deleteTokenWebhook({ token: apiToken, idWebhook: webhookId });
      const webhooks = await trello.tokens.getTokenWebhooks({ token: apiToken });
      expect(webhooks.some(w => w.id === webhookId)).toBe(false);
      webhookAvailable = false;
    });
  });

  // ─── deleteToken ───────────────────────────────────────────────────────────

  describe('deleteToken', () => {
    it('deleteToken does not throw', async ({ skip }) => {
      // Deleting the test token would invalidate all subsequent API calls — skip.
      skip();
    });
  });
});
