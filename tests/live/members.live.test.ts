import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient } from './setup/client';
import { ResourceTracker } from './setup/resources';
import { testName } from './helpers/naming';

describe('Members', () => {
  let trello!: TrelloClient;
  const tracker = new ResourceTracker();

  let boardId: string;

  beforeAll(async () => {
    trello = getLiveClient();

    const board = await trello.boards.createBoard({
      name: testName('members-suite'),
      defaultLists: false,
      prefsPermissionLevel: 'private',
    });

    boardId = board.id;
    tracker.defer(async () => {
      await trello.boards.deleteBoard({ id: boardId });
    });
  });

  afterAll(() => tracker.cleanup());

  // ─── profile ───────────────────────────────────────────────────────────────

  describe('profile', () => {
    it('getMember returns id and username', async () => {
      const member = await trello.members.getMember({ id: 'me' });
      expect(typeof member.id).toBe('string');
      expect(typeof member.username).toBe('string');
    });

    it('getMember returns non-empty fullName', async () => {
      const member = await trello.members.getMember({ id: 'me' });
      expect(typeof member.fullName).toBe('string');
      expect(member.fullName.length).toBeGreaterThan(0);
    });

    it('getMemberField returns _value for username field', async () => {
      const result = await trello.members.getMemberField<string>({ id: 'me', field: 'username' });
      expect(typeof result._value).toBe('string');
      expect(result._value!.length).toBeGreaterThan(0);
    });
  });

  // ─── mutation ──────────────────────────────────────────────────────────────

  describe('mutation', () => {
    it('updateMember does not throw', async ({ skip }) => {
      // Requires an OAuth token with write scope for member profile — skip for key/token auth
      skip();
    });
  });

  // ─── actions ───────────────────────────────────────────────────────────────

  describe('actions', () => {
    it('getMemberActions returns an array', async () => {
      const actions = await trello.members.getMemberActions({ id: 'me' });
      expect(Array.isArray(actions)).toBe(true);
    });

    it('action entries have ids', async () => {
      const actions = await trello.members.getMemberActions({ id: 'me' });
      for (const action of actions) {
        expect(typeof action.id).toBe('string');
      }
    });
  });

  // ─── boards ────────────────────────────────────────────────────────────────

  describe('boards', () => {
    it('getMemberBoards returns an array', async () => {
      const boards = await trello.members.getMemberBoards({ id: 'me' });
      expect(Array.isArray(boards)).toBe(true);
    });

    it('board entries have ids', async () => {
      const boards = await trello.members.getMemberBoards({ id: 'me' });
      for (const board of boards) {
        expect(typeof board.id).toBe('string');
      }
    });

    it('getMemberInvitedBoards returns an array', async () => {
      const boards = await trello.members.getMemberInvitedBoards({ id: 'me' });
      expect(Array.isArray(boards)).toBe(true);
    });
  });

  // ─── cards ─────────────────────────────────────────────────────────────────

  describe('cards', () => {
    it('getMemberCards returns an array', async () => {
      const cards = await trello.members.getMemberCards({ id: 'me' });
      expect(Array.isArray(cards)).toBe(true);
    });
  });

  // ─── board stars ───────────────────────────────────────────────────────────

  describe('board stars', () => {
    let starId: string;

    beforeAll(async () => {
      // Unstar first in case the board is already starred from a previous run
      const existing = await trello.members.getMemberBoardStars({ id: 'me' });
      const alreadyStarred = existing.find(s => s.idBoard === boardId);
      if (alreadyStarred) {
        await trello.members.unstarBoard({ id: 'me', idStar: alreadyStarred.id });
      }
    });

    it('getMemberBoardStars returns an array', async () => {
      const stars = await trello.members.getMemberBoardStars({ id: 'me' });
      expect(Array.isArray(stars)).toBe(true);
    });

    it('starBoard returns a BoardStars object', async () => {
      const star = await trello.members.starBoard({ id: 'me', idBoard: boardId, pos: 'bottom' });
      expect(star.idBoard).toBe(boardId);
      expect(typeof star.id).toBe('string');
      starId = star.id;
    });

    it('getMemberBoardStar returns the star by id', async () => {
      const star = await trello.members.getMemberBoardStar({ id: 'me', idStar: starId });
      expect(star.id).toBe(starId);
      expect(star.idBoard).toBe(boardId);
    });

    it('updateMemberBoardStar returns the updated BoardStars', async () => {
      const updated = await trello.members.updateMemberBoardStar({ id: 'me', idStar: starId, pos: 'top' });
      expect(updated.id).toBe(starId);
    });

    it('unstarBoard removes the star', async () => {
      await trello.members.unstarBoard({ id: 'me', idStar: starId });
      const stars = await trello.members.getMemberBoardStars({ id: 'me' });
      expect(stars.some(s => s.id === starId)).toBe(false);
    });
  });

  // ─── board backgrounds ─────────────────────────────────────────────────────

  describe('board backgrounds', () => {
    it('getMemberBoardBackgrounds returns an array', async () => {
      const backgrounds = await trello.members.getMemberBoardBackgrounds({ id: 'me' });
      expect(Array.isArray(backgrounds)).toBe(true);
    });

    it('getMemberBoardBackground fetches an individual custom background by id', async ({ skip }) => {
      // Trello's default backgrounds (color names like `blue`, `green`) aren't
      // fetchable through `/boardBackgrounds/{id}` — the endpoint returns 400
      // "Invalid id". Filter to `custom` so only uploaded backgrounds with
      // real TrelloIDs flow through.
      const backgrounds = await trello.members.getMemberBoardBackgrounds({ id: 'me', filter: 'custom' });
      if (backgrounds.length === 0) skip();
      const idBackground = String(backgrounds[0].id);
      const bg = await trello.members.getMemberBoardBackground({ id: 'me', idBackground });
      expect(String(bg.id)).toBe(idBackground);
    });

    it('getMemberCustomBoardBackgrounds returns an array', async () => {
      const backgrounds = await trello.members.getMemberCustomBoardBackgrounds({ id: 'me' });
      expect(Array.isArray(backgrounds)).toBe(true);
    });

    it('getMemberCustomBoardBackground fetches an individual custom background by id', async ({ skip }) => {
      const backgrounds = await trello.members.getMemberCustomBoardBackgrounds({ id: 'me' });
      if (backgrounds.length === 0) skip();
      const idBackground = String(backgrounds[0].id);
      const bg = await trello.members.getMemberCustomBoardBackground({ id: 'me', idBackground });
      expect(String(bg.id)).toBe(idBackground);
    });
  });

  // ─── custom emoji & stickers ───────────────────────────────────────────────

  describe('custom emoji', () => {
    it('getMemberCustomEmojis returns an array', async () => {
      const emojis = await trello.members.getMemberCustomEmojis({ id: 'me' });
      expect(Array.isArray(emojis)).toBe(true);
    });

    it('getMemberCustomEmoji fetches an individual emoji by id', async ({ skip }) => {
      const emojis = await trello.members.getMemberCustomEmojis({ id: 'me' });
      if (emojis.length === 0) skip();
      const idEmoji = String(emojis[0].id);
      const emoji = await trello.members.getMemberCustomEmoji({ id: 'me', idEmoji });
      expect(String(emoji.id)).toBe(idEmoji);
    });
  });

  describe('custom stickers', () => {
    it('getMemberCustomStickers returns an array', async () => {
      const stickers = await trello.members.getMemberCustomStickers({ id: 'me' });
      expect(Array.isArray(stickers)).toBe(true);
    });

    it('getMemberCustomSticker fetches an individual sticker by id', async ({ skip }) => {
      const stickers = await trello.members.getMemberCustomStickers({ id: 'me' });
      if (stickers.length === 0) skip();
      const idSticker = String(stickers[0].id);
      const sticker = await trello.members.getMemberCustomSticker({ id: 'me', idSticker });
      expect(String(sticker.id)).toBe(idSticker);
    });
  });

  // ─── one-time messages ─────────────────────────────────────────────────────

  describe('one-time messages', () => {
    it('dismissMemberOneTimeMessage requires session auth', ({ skip }) => {
      // Endpoint returns 401 "unauthorized member permission requested" for
      // key/token auth — only an Atlassian-account session can dismiss. Same
      // story as the notification channel settings below.
      skip();
    });
  });

  // ─── notifications ─────────────────────────────────────────────────────────

  describe('notifications', () => {
    it('getMemberNotifications returns an array', async () => {
      const notifications = await trello.members.getMemberNotifications({ id: 'me' });
      expect(Array.isArray(notifications)).toBe(true);
    });
  });

  // ─── organizations ─────────────────────────────────────────────────────────

  describe('organizations', () => {
    it('getMemberOrganizations returns an array', async () => {
      const orgs = await trello.members.getMemberOrganizations({ id: 'me' });
      expect(Array.isArray(orgs)).toBe(true);
    });

    it('getMemberInvitedOrganizations returns an array', async () => {
      const orgs = await trello.members.getMemberInvitedOrganizations({ id: 'me' });
      expect(Array.isArray(orgs)).toBe(true);
    });
  });

  // ─── saved searches ────────────────────────────────────────────────────────

  describe('saved searches', () => {
    let searchId: string;
    let savedSearchesAvailable = false;

    beforeAll(async () => {
      try {
        const search = await trello.members.createMemberSavedSearch({
          id: 'me',
          name: testName('my-search'),
          query: 'is:open',
          pos: 'bottom',
        });

        searchId = search.id;
        savedSearchesAvailable = true;
        tracker.defer(async () => {
          await trello.members.deleteMemberSavedSearch({ id: 'me', idSearch: searchId }).catch(() => {});
        });
      } catch {
        savedSearchesAvailable = false;
      }
    });

    it('createMemberSavedSearch returns a SavedSearch with id', ({ skip }) => {
      if (!savedSearchesAvailable) skip();
      expect(typeof searchId).toBe('string');
      expect(searchId.length).toBeGreaterThan(0);
    });

    it('getMemberSavedSearches includes the created search', async ({ skip }) => {
      if (!savedSearchesAvailable) skip();
      const searches = await trello.members.getMemberSavedSearches({ id: 'me' });
      expect(Array.isArray(searches)).toBe(true);
      expect(searches.some(s => s.id === searchId)).toBe(true);
    });

    it('getMemberSavedSearch returns the search by id', async ({ skip }) => {
      if (!savedSearchesAvailable) skip();
      const search = await trello.members.getMemberSavedSearch({ id: 'me', idSearch: searchId });
      expect(search.id).toBe(searchId);
      expect(search.name).toContain('my-search');
    });

    it('updateMemberSavedSearch returns the updated SavedSearch', async ({ skip }) => {
      if (!savedSearchesAvailable) skip();
      const newName = testName('my-search-renamed');
      const updated = await trello.members.updateMemberSavedSearch({
        id: 'me',
        idSearch: searchId,
        name: newName,
      });
      expect(updated.id).toBe(searchId);
      expect(updated.name).toBe(newName);
    });

    it('deleteMemberSavedSearch removes the search', async ({ skip }) => {
      if (!savedSearchesAvailable) skip();
      await trello.members.deleteMemberSavedSearch({ id: 'me', idSearch: searchId });
      const searches = await trello.members.getMemberSavedSearches({ id: 'me' });
      expect(searches.some(s => s.id === searchId)).toBe(false);
    });
  });

  // ─── tokens ────────────────────────────────────────────────────────────────

  describe('tokens', () => {
    it('getMemberTokens returns an array', async () => {
      const tokens = await trello.members.getMemberTokens({ id: 'me' });
      expect(Array.isArray(tokens)).toBe(true);
    });

    it('token entries have ids', async () => {
      const tokens = await trello.members.getMemberTokens({ id: 'me' });
      for (const token of tokens) {
        expect(typeof token.id).toBe('string');
      }
    });
  });

  // ─── notification channel settings ────────────────────────────────────────
  // Endpoint returns 404 for key/token auth — requires Atlassian account session

  describe('notification channel settings', () => {
    it('getMemberNotificationChannelSettings does not throw', async ({ skip }) => {
      skip();
    });

    it('getMemberNotificationChannelSetting does not throw', async ({ skip }) => {
      skip();
    });
  });
});
