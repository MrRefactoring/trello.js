import { describe, it, expect, beforeAll } from 'vitest';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient } from './setup/client';

describe('Authentication', () => {
  let trello!: TrelloClient;

  beforeAll(() => {
    trello = getLiveClient();
  });

  it('returns the authenticated member for id "me"', async () => {
    const member = await trello.members.getMember({ id: 'me' });

    expect(typeof member.id).toBe('string');
    expect(member.id.length).toBeGreaterThan(0);
    expect(typeof member.username).toBe('string');
  });

  it('responds with a non-empty fullName', async () => {
    const member = await trello.members.getMember({ id: 'me' });

    expect(typeof member.fullName).toBe('string');
    expect(member.fullName.length).toBeGreaterThan(0);
  });

  it('rejects invalid credentials', async () => {
    const { createTrelloClient } = await import('../../src/createTrelloClient');
    const bad = createTrelloClient({ apiKey: 'bad-key', apiToken: 'bad-token' });

    await expect(bad.members.getMember({ id: 'me' })).rejects.toThrow();
  });
});
