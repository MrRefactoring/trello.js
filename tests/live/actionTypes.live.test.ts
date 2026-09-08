import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { z } from 'zod';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient, getRawLiveClient, getMember2Id } from './setup/client';
import { ResourceTracker } from './setup/resources';
import { testName } from './helpers/naming';
import { ActionAddAttachmentToCardSchema } from '../../src/models/actionAddAttachmentToCard';
import { ActionAddChecklistToCardSchema } from '../../src/models/actionAddChecklistToCard';
import { ActionAddMemberToBoardSchema } from '../../src/models/actionAddMemberToBoard';
import { ActionAddMemberToCardSchema } from '../../src/models/actionAddMemberToCard';
import { ActionAddToOrganizationBoardSchema } from '../../src/models/actionAddToOrganizationBoard';
import { ActionCommentCardSchema } from '../../src/models/actionCommentCard';
import { ActionConvertToCardFromCheckItemSchema } from '../../src/models/actionConvertToCardFromCheckItem';
import { ActionCopyCardSchema } from '../../src/models/actionCopyCard';
import { ActionCopyCommentCardSchema } from '../../src/models/actionCopyCommentCard';
import { ActionCreateBoardSchema } from '../../src/models/actionCreateBoard';
import { ActionCreateCardSchema } from '../../src/models/actionCreateCard';
import { ActionCreateCustomFieldSchema } from '../../src/models/actionCreateCustomField';
import { ActionCreateListSchema } from '../../src/models/actionCreateList';
import { ActionCreateOrganizationSchema } from '../../src/models/actionCreateOrganization';
import { ActionDeleteAttachmentFromCardSchema } from '../../src/models/actionDeleteAttachmentFromCard';
import { ActionDeleteCardSchema } from '../../src/models/actionDeleteCard';
import { ActionMakeAdminOfBoardSchema } from '../../src/models/actionMakeAdminOfBoard';
import { ActionMakeNormalMemberOfBoardSchema } from '../../src/models/actionMakeNormalMemberOfBoard';
import { ActionMoveCardFromBoardSchema } from '../../src/models/actionMoveCardFromBoard';
import { ActionMoveCardToBoardSchema } from '../../src/models/actionMoveCardToBoard';
import { ActionMoveListFromBoardSchema } from '../../src/models/actionMoveListFromBoard';
import { ActionMoveListToBoardSchema } from '../../src/models/actionMoveListToBoard';
import { ActionRemoveChecklistFromCardSchema } from '../../src/models/actionRemoveChecklistFromCard';
import { ActionRemoveMemberFromCardSchema } from '../../src/models/actionRemoveMemberFromCard';
import { ActionUpdateBoardSchema } from '../../src/models/actionUpdateBoard';
import { ActionUpdateCardSchema } from '../../src/models/actionUpdateCard';
import { ActionUpdateCheckItemStateOnCardSchema } from '../../src/models/actionUpdateCheckItemStateOnCard';
import { ActionUpdateListSchema } from '../../src/models/actionUpdateList';
import { ActionUpdateOrganizationSchema } from '../../src/models/actionUpdateOrganization';

const BRANCHES: Record<string, z.ZodType> = {
  addAttachmentToCard: ActionAddAttachmentToCardSchema,
  addChecklistToCard: ActionAddChecklistToCardSchema,
  addMemberToBoard: ActionAddMemberToBoardSchema,
  addMemberToCard: ActionAddMemberToCardSchema,
  addToOrganizationBoard: ActionAddToOrganizationBoardSchema,
  commentCard: ActionCommentCardSchema,
  convertToCardFromCheckItem: ActionConvertToCardFromCheckItemSchema,
  copyCard: ActionCopyCardSchema,
  copyCommentCard: ActionCopyCommentCardSchema,
  createBoard: ActionCreateBoardSchema,
  createCard: ActionCreateCardSchema,
  createCustomField: ActionCreateCustomFieldSchema,
  createList: ActionCreateListSchema,
  createOrganization: ActionCreateOrganizationSchema,
  deleteAttachmentFromCard: ActionDeleteAttachmentFromCardSchema,
  deleteCard: ActionDeleteCardSchema,
  makeAdminOfBoard: ActionMakeAdminOfBoardSchema,
  makeNormalMemberOfBoard: ActionMakeNormalMemberOfBoardSchema,
  moveCardFromBoard: ActionMoveCardFromBoardSchema,
  moveCardToBoard: ActionMoveCardToBoardSchema,
  moveListFromBoard: ActionMoveListFromBoardSchema,
  moveListToBoard: ActionMoveListToBoardSchema,
  removeChecklistFromCard: ActionRemoveChecklistFromCardSchema,
  removeMemberFromCard: ActionRemoveMemberFromCardSchema,
  updateBoard: ActionUpdateBoardSchema,
  updateCard: ActionUpdateCardSchema,
  updateCheckItemStateOnCard: ActionUpdateCheckItemStateOnCardSchema,
  updateList: ActionUpdateListSchema,
  updateOrganization: ActionUpdateOrganizationSchema,
};

interface RawAction {
  id: string;
  type: string;
  data?: Record<string, unknown>;
}

const FIXTURE_TIMEOUT = 240_000;

describe('Action types', () => {
  let trello!: TrelloClient;
  const tracker = new ResourceTracker();
  const observed: RawAction[] = [];
  const skipped: string[] = [];

  async function step<T>(label: string, fn: () => Promise<T>): Promise<T | null> {
    try {
      return await fn();
    } catch (error) {
      skipped.push(`${label}: ${(error as Error).message.slice(0, 160)}`);

      return null;
    }
  }

  beforeAll(async () => {
    trello = getLiveClient();

    const organization = await trello.organizations.createOrganization({
      displayName: testName('action-types-workspace'),
    });

    tracker.defer(async () => {
      await trello.organizations.deleteOrganization({ id: organization.id });
    });

    await step('updateOrganization', () =>
      trello.organizations.updateOrganization({ id: organization.id, desc: 'action census workspace' }));

    const board = await trello.boards.createBoard({
      name: testName('action-types-board'),
      defaultLists: false,
      prefsPermissionLevel: 'private',
    });

    tracker.defer(async () => {
      await trello.boards.deleteBoard({ id: board.id });
    });

    const board2 = await trello.boards.createBoard({
      name: testName('action-types-board-2'),
      defaultLists: false,
      prefsPermissionLevel: 'private',
    });

    tracker.defer(async () => {
      await trello.boards.deleteBoard({ id: board2.id });
    });

    await step('addToOrganizationBoard', () =>
      trello.boards.updateBoard({ id: board.id, idOrganization: organization.id }));
    await step('updateBoard', () =>
      trello.boards.updateBoard({ id: board.id, name: testName('action-types-board-renamed') }));

    const member2 = getMember2Id();

    await step('addMemberToBoard', () =>
      trello.boards.updateBoardMember({ id: board.id, idMember: member2, type: 'normal' }));
    await step('makeAdminOfBoard', () =>
      trello.boards.updateBoardMember({ id: board.id, idMember: member2, type: 'admin' }));
    await step('makeNormalMemberOfBoard', () =>
      trello.boards.updateBoardMember({ id: board.id, idMember: member2, type: 'normal' }));
    await step('removeBoardMember', () =>
      trello.boards.removeBoardMember({ id: board.id, idMember: member2 }));

    const listA = await trello.lists.createList({ name: testName('list-a'), idBoard: board.id });
    const listB = await trello.lists.createList({ name: testName('list-b'), idBoard: board.id });

    await step('updateList name', () =>
      trello.lists.updateList({ id: listA.id, name: testName('list-a-renamed') }));
    await step('updateList pos', () => trello.lists.updateList({ id: listA.id, pos: 'bottom' }));

    const card = await trello.cards.createCard({ name: testName('card'), idList: listA.id });
    const me = await trello.members.getMember({ id: 'me' });

    await step('updateCard name', () =>
      trello.cards.updateCard({ id: card.id, name: testName('card-renamed') }));
    await step('updateCard desc', () => trello.cards.updateCard({ id: card.id, desc: 'census card' }));
    await step('updateCard list', () => trello.cards.updateCard({ id: card.id, idList: listB.id }));

    await step('addMemberToCard', () => trello.cards.addCardMember({ id: card.id, value: me.id }));
    await step('removeMemberFromCard', () =>
      trello.cards.removeCardMember({ id: card.id, idMember: me.id }));

    const checklist = await step('addChecklistToCard', () =>
      trello.cards.createCardChecklist({ id: card.id, name: testName('checklist') }));

    if (checklist) {
      const item = await step('createChecklistItem', () =>
        trello.checklists.createChecklistItem({ id: checklist.id, name: testName('item') }));

      if (item?.id) {
        await step('updateCheckItemStateOnCard', () =>
          trello.cards.updateCardCheckItem({ id: card.id, idCheckItem: item.id!, state: 'complete' }));
      }

      await step('removeChecklistFromCard', () =>
        trello.cards.removeCardChecklist({ id: card.id, idChecklist: checklist.id }));
    }

    const attachment = await step('addAttachmentToCard', () =>
      trello.cards.createCardAttachment({ id: card.id, url: 'https://trello.com', name: testName('attachment') }));

    if (attachment?.id) {
      await step('deleteAttachmentFromCard', () =>
        trello.cards.deleteCardAttachment({ id: card.id, idAttachment: attachment.id! }));
    }

    await step('commentCard', () =>
      trello.cards.createCardComment({ id: card.id, text: testName('comment') }));

    await step('createCustomField', () =>
      trello.customFields.createCustomField({
        idModel: board.id,
        modelType: 'board',
        name: testName('field'),
        type: 'text',
        pos: 'bottom',
      }));

    const copy = await step('copyCard', () =>
      trello.cards.createCard({ idList: listB.id, idCardSource: card.id, name: testName('card-copy') }));

    const listC = await step('createList on the second board', () =>
      trello.lists.createList({ name: testName('list-c'), idBoard: board2.id }));

    if (copy && listC) {
      await step('moveCardToBoard', () =>
        trello.cards.updateCard({ id: copy.id, idBoard: board2.id, idList: listC.id }));
    }

    await step('moveListToBoard', () =>
      trello.lists.moveListToBoard({ id: listA.id, value: board2.id }));

    const doomed = await step('createCard to delete', () =>
      trello.cards.createCard({ name: testName('card-doomed'), idList: listB.id }));

    if (doomed) await step('deleteCard', () => trello.cards.deleteCard({ id: doomed.id }));

    const rawClient = getRawLiveClient();
    const sources: Array<[string, () => Promise<unknown>]> = [
      ['card', () => rawClient.cards.getCardActions({ id: card.id, filter: 'all', limit: 1000 })],
      ['board', () => rawClient.boards.getBoardActions({ boardId: board.id, filter: 'all', limit: 1000 })],
      ['board2', () => rawClient.boards.getBoardActions({ boardId: board2.id, filter: 'all', limit: 1000 })],
      ['organization', () =>
        rawClient.organizations.getOrganizationActions({ id: organization.id, filter: 'all', limit: 1000 })],
      ['member', () => rawClient.members.getMemberActions({ id: 'me', filter: 'all', limit: 1000 })],
    ];

    if (copy) {
      sources.unshift(['cardCopy', () => rawClient.cards.getCardActions({ id: copy.id, filter: 'all', limit: 1000 })]);
    }

    for (const [label, fetchActions] of sources) {
      const fetched = await step(`fetch ${label} actions`, fetchActions) as RawAction[] | null;

      if (!fetched) continue;

      for (const action of fetched) {
        if (!observed.some(seen => seen.id === action.id)) observed.push(action);
      }
    }
  }, FIXTURE_TIMEOUT);

  afterAll(() => tracker.cleanup());

  it('collects actions from the fixture and from the account history', () => {
    expect(observed.length).toBeGreaterThan(0);
  });

  it('parses every action of a branched type against that branch', () => {
    const failures = new Map<string, string>();

    for (const action of observed) {
      const branch = BRANCHES[action.type];

      if (!branch) continue;

      const result = branch.safeParse(action);

      if (!result.success && !failures.has(action.type)) {
        failures.set(action.type, JSON.stringify(result.error.issues.slice(0, 4)));
      }
    }

    expect([...failures].map(([type, issues]) => `${type}: ${issues}`)).toEqual([]);
  });

  it('reports the action types the union does not branch on', () => {
    const counts = new Map<string, number>();

    for (const action of observed) {
      if (BRANCHES[action.type]) continue;

      counts.set(action.type, (counts.get(action.type) ?? 0) + 1);
    }

    const missing = Object.keys(BRANCHES).filter(type => !observed.some(action => action.type === type));

    console.log(
      [
        `actions observed: ${observed.length}`,
        `types without a branch: ${counts.size ? [...counts].map(([type, count]) => `${type} (${count})`).join(', ') : 'none'}`,
        `branches this run did not observe: ${missing.length ? missing.join(', ') : 'none'}`,
        `steps skipped: ${skipped.length ? skipped.join(' | ') : 'none'}`,
      ].join('\n'),
    );

    expect(observed.every(action => typeof action.type === 'string')).toBe(true);
  });
});
