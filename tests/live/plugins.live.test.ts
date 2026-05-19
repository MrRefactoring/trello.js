import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient } from './setup/client';
import { ResourceTracker } from './setup/resources';

describe('Plugins', () => {
  let trello!: TrelloClient;
  const tracker = new ResourceTracker();

  // Plugin operations require owning a registered Power-Up.
  // Set TRELLO_PLUGIN_ID in .env to enable retrieval tests.
  let pluginId: string;
  let pluginAvailable = false;

  beforeAll(async () => {
    trello = getLiveClient();

    pluginId = process.env['TRELLO_PLUGIN_ID'] ?? '';
    if (!pluginId) return;

    try {
      const plugin = await trello.plugins.getPlugin({ id: pluginId });
      pluginAvailable = typeof plugin.id === 'string';
    } catch {
      pluginAvailable = false;
    }
  });

  afterAll(() => tracker.cleanup());

  // ─── retrieval ─────────────────────────────────────────────────────────────

  describe('retrieval', () => {
    it('getPlugin returns a Plugin with id', async ({ skip }) => {
      if (!pluginAvailable) skip();
      const plugin = await trello.plugins.getPlugin({ id: pluginId });
      expect(plugin.id).toBe(pluginId);
    });

    it('getPluginMemberPrivacyCompliance does not throw', async ({ skip }) => {
      if (!pluginAvailable) skip();
      await expect(
        trello.plugins.getPluginMemberPrivacyCompliance({ id: pluginId }),
      ).resolves.not.toThrow();
    });
  });

  // ─── mutation ──────────────────────────────────────────────────────────────
  // All mutation endpoints require being the owner of the Power-Up.

  describe('mutation', () => {
    it('updatePlugin does not throw', async ({ skip }) => {
      skip();
    });
  });

  // ─── listings ──────────────────────────────────────────────────────────────

  describe('listings', () => {
    it('createPluginListing does not throw', async ({ skip }) => {
      skip();
    });

    it('updatePluginListing does not throw', async ({ skip }) => {
      skip();
    });
  });
});
