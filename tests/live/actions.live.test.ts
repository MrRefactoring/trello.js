import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient } from './setup/client';
import { ResourceTracker } from './setup/resources';
import { testName } from './helpers/naming';

describe('Actions', () => {
  let trello!: TrelloClient;
  const tracker = new ResourceTracker();

  let boardId: string;
  let listId: string;
  let cardId: string;
  let commentActionId: string;
  let createCardActionId: string;
  let addMemberActionId: string;

  beforeAll(async () => {
    trello = getLiveClient();

    const board = await trello.boards.createBoard({
      name: testName('actions-suite'),
      defaultLists: false,
      prefsPermissionLevel: 'private',
    });

    boardId = board.id;
    tracker.defer(async () => {
      await trello.boards.deleteBoard({ id: boardId });
    });

    const list = await trello.lists.createList({
      name: testName('actions-list'),
      idBoard: boardId,
    });

    listId = list.id;

    const card = await trello.cards.createCard({
      name: testName('actions-card'),
      idList: listId,
    });

    cardId = card.id;

    // createCard action — needed for getActionList
    const cardActions = await trello.cards.getCardActions({ id: cardId, filter: 'createCard' });
    createCardActionId = cardActions[0].id;

    // addMemberToCard action — needed for getActionMember
    const me = await trello.members.getMember({ id: 'me' });
    await trello.cards.addCardMember({ id: cardId, value: me.id });
    const memberActions = await trello.cards.getCardActions({ id: cardId, filter: 'addMemberToCard' });
    addMemberActionId = memberActions[0].id;

    // Create a comment — generates a commentCard action
    const action = await trello.cards.createCardComment({
      id: cardId,
      text: testName('initial-comment'),
    });

    commentActionId = action.id;
  });

  afterAll(() => tracker.cleanup());

  describe('getActionField', () => {
    it('returns _value for type field', async () => {
      const result = await trello.actions.getActionField({ id: commentActionId, field: 'type' });
      expect(result._value).toBe('commentCard');
    });

    it('returns _value for date field as a parseable date string', async () => {
      const result = await trello.actions.getActionField<string>({ id: commentActionId, field: 'date' });
      expect(new Date(result._value).getTime()).not.toBeNaN();
    });

    it('_value for idMemberCreator is a string', async () => {
      const result = await trello.actions.getActionField<string>({ id: commentActionId, field: 'idMemberCreator' });
      expect(typeof result._value).toBe('string');
    });
  });

  describe('retrieval', () => {
    it('getAction returns the action with correct id and type', async () => {
      const action = await trello.actions.getAction({ id: commentActionId });
      expect(action.id).toBe(commentActionId);
      expect(action.type).toBe('commentCard');
    });

    it('getActionBoard returns the board the action belongs to', async () => {
      const board = await trello.actions.getActionBoard({ id: commentActionId });
      expect(board.id).toBe(boardId);
    });

    it('getActionCard returns the card the action belongs to', async () => {
      const card = await trello.actions.getActionCard({ id: commentActionId });
      expect(card.id).toBe(cardId);
    });

    it('getActionCreator returns the member who created the action', async () => {
      const member = await trello.actions.getActionCreator({ id: commentActionId });
      expect(typeof member.id).toBe('string');
      expect(typeof member.username).toBe('string');
      expect(typeof member.fullName).toBe('string');
    });
  });

  describe('mutation', () => {
    it('updateAction returns the updated Action', async () => {
      const newText = testName('updated-comment');
      const updated = await trello.actions.updateAction({ id: commentActionId, text: newText });
      expect(updated.id).toBe(commentActionId);
      expect(updated.type).toBe('commentCard');
      expect(updated.data.text).toBe(newText);
    });

    it('updateActionText also updates the comment text', async () => {
      const newText = testName('text-updated-comment');
      const updated = await trello.actions.updateActionText({ id: commentActionId, value: newText });
      expect(updated.data.text).toBe(newText);
    });
  });

  describe('reactions', () => {
    let reactionId: string;

    it('createActionReaction adds a reaction', async () => {
      const reaction = await trello.actions.createActionReaction({
        idAction: commentActionId,
        unified: '1F44D',
      });
      expect(typeof reaction.id).toBe('string');
      reactionId = reaction.id;
    });

    it('getActionReactions returns array containing the created reaction', async () => {
      const reactions = await trello.actions.getActionReactions({ idAction: commentActionId });
      expect(Array.isArray(reactions)).toBe(true);
      expect(reactions.some(r => r.id === reactionId)).toBe(true);
    });

    it('getActionReaction returns the specific reaction', async () => {
      const reaction = await trello.actions.getActionReaction({
        idAction: commentActionId,
        id: reactionId,
      });
      expect(reaction.id).toBe(reactionId);
    });

    it('getActionReactionSummary returns summary with a positive count', async () => {
      const summary = await trello.actions.getActionReactionSummary({ idAction: commentActionId });
      expect(Array.isArray(summary)).toBe(true);
      expect(summary.some(s => s.count > 0)).toBe(true);
    });

    it('deleteActionReaction removes the reaction', async () => {
      await trello.actions.deleteActionReaction({ idAction: commentActionId, id: reactionId });
      const reactions = await trello.actions.getActionReactions({ idAction: commentActionId });
      const found = reactions.find(r => r.id === reactionId);
      expect(found).toBeUndefined();
    });
  });

  describe('list and member', () => {
    it('getActionList returns the list the action belongs to', async () => {
      const result = await trello.actions.getActionList({ id: createCardActionId });
      expect(result.id).toBe(listId);
    });

    it('getActionMember returns the member referenced in the action', async () => {
      const member = await trello.actions.getActionMember({ id: addMemberActionId });
      expect(typeof member.id).toBe('string');
      expect(typeof member.username).toBe('string');
    });

    // getActionOrganization is not tested: it requires an action on a board that belongs
    // to an organization (workspace). Personal-board actions return 404 for this endpoint.
  });

  describe('deletion', () => {
    it('deleteAction removes the comment action', async () => {
      const action = await trello.cards.createCardComment({
        id: cardId,
        text: testName('to-delete-comment'),
      });

      await trello.actions.deleteAction({ id: action.id });

      await expect(
        trello.actions.getAction({ id: action.id }),
      ).rejects.toThrow();
    });
  });
});
