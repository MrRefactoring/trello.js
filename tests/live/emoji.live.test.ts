import { describe, it, expect, beforeAll } from 'vitest';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient } from './setup/client';

describe('Emoji', () => {
  let trello!: TrelloClient;

  beforeAll(() => {
    trello = getLiveClient();
  });

  it('getEmoji returns an object with a trello array', async () => {
    const emoji = await trello.emoji.getEmoji();

    expect(typeof emoji).toBe('object');
    expect(emoji).not.toBeNull();
    expect(Array.isArray(emoji.trello)).toBe(true);
  });

  it('emoji entries have name and native fields', async () => {
    const emoji = await trello.emoji.getEmoji();

    expect(emoji.trello.length).toBeGreaterThan(0);

    const first = emoji.trello[0];

    expect(typeof first?.name).toBe('string');
  });
});
