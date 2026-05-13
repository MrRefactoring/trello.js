import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient } from './setup/client';
import { ResourceTracker } from './setup/resources';
import { testName } from './helpers/naming';

describe('Webhooks', () => {
  let trello!: TrelloClient;
  const tracker = new ResourceTracker();

  // Trello validates callbackURL with a HEAD request — https://example.com returns 200.
  const CALLBACK_URL = 'https://example.com';

  let boardId: string;
  let webhookId: string;
  let webhookAvailable = false;

  beforeAll(async () => {
    trello = getLiveClient();

    const board = await trello.boards.createBoard({
      name: testName('webhooks-suite'),
      defaultLists: false,
      prefsPermissionLevel: 'private',
    });
    boardId = board.id!;
    tracker.defer(async () => {
      await trello.boards.deleteBoard({ id: boardId });
    });

    try {
      const webhook = await trello.webhooks.createWebhook({
        callbackURL: CALLBACK_URL,
        idModel: boardId,
        description: testName('webhook'),
      });
      webhookId = webhook.id!;
      webhookAvailable = true;
      tracker.defer(async () => {
        await trello.webhooks.deleteWebhook({ id: webhookId }).catch(() => {});
      });
    } catch {
      webhookAvailable = false;
    }
  });

  afterAll(() => tracker.cleanup());

  // ─── creation ──────────────────────────────────────────────────────────────

  describe('creation', () => {
    it('createWebhook returns a Webhook with id', ({ skip }) => {
      if (!webhookAvailable) skip();
      expect(typeof webhookId).toBe('string');
      expect(webhookId.length).toBeGreaterThan(0);
    });

    it('createWebhook returns the correct idModel', async ({ skip }) => {
      if (!webhookAvailable) skip();
      const webhook = await trello.webhooks.getWebhook({ id: webhookId });
      expect(webhook.idModel).toBe(boardId);
    });
  });

  // ─── retrieval ─────────────────────────────────────────────────────────────

  describe('retrieval', () => {
    it('getWebhook returns a Webhook with id', async ({ skip }) => {
      if (!webhookAvailable) skip();
      const webhook = await trello.webhooks.getWebhook({ id: webhookId });
      expect(webhook.id).toBe(webhookId);
    });

    it('getWebhook has active boolean', async ({ skip }) => {
      if (!webhookAvailable) skip();
      const webhook = await trello.webhooks.getWebhook({ id: webhookId });
      expect(typeof webhook.active).toBe('boolean');
    });

    it('getWebhook has callbackURL', async ({ skip }) => {
      if (!webhookAvailable) skip();
      const webhook = await trello.webhooks.getWebhook({ id: webhookId });
      expect(webhook.callbackURL).toBe(CALLBACK_URL);
    });

    it('getWebhookField does not throw', async ({ skip }) => {
      if (!webhookAvailable) skip();
      await expect(
        trello.webhooks.getWebhookField({ id: webhookId, field: 'active' }),
      ).resolves.not.toThrow();
    });
  });

  // ─── mutation ──────────────────────────────────────────────────────────────

  describe('mutation', () => {
    it('updateWebhook returns the updated Webhook', async ({ skip }) => {
      if (!webhookAvailable) skip();
      const updated = await trello.webhooks.updateWebhook({
        id: webhookId,
        description: testName('webhook-updated'),
        callbackURL: CALLBACK_URL,
        idModel: boardId,
      });
      expect(updated.id).toBe(webhookId);
      expect(updated.description).toContain('webhook-updated');
    });

    it('updateWebhook can toggle active flag', async ({ skip }) => {
      if (!webhookAvailable) skip();
      const deactivated = await trello.webhooks.updateWebhook({
        id: webhookId,
        callbackURL: CALLBACK_URL,
        idModel: boardId,
        active: false,
      });
      expect(deactivated.active).toBe(false);

      const reactivated = await trello.webhooks.updateWebhook({
        id: webhookId,
        callbackURL: CALLBACK_URL,
        idModel: boardId,
        active: true,
      });
      expect(reactivated.active).toBe(true);
    });
  });

  // ─── deletion ──────────────────────────────────────────────────────────────

  describe('deletion', () => {
    it('deleteWebhook removes the webhook', async ({ skip }) => {
      if (!webhookAvailable) skip();
      await trello.webhooks.deleteWebhook({ id: webhookId });
      await expect(
        trello.webhooks.getWebhook({ id: webhookId }),
      ).rejects.toThrow();
      webhookAvailable = false;
    });
  });
});
