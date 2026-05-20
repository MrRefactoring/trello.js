import { MembershipsSchema, type Memberships } from '#/models/memberships';
import { BoardSchema, type Board } from '#/models/board';
import { FieldValueSchema, type FieldValue } from '#/models/fieldValue';
import { ActionSchema, type Action } from '#/models/action';
import { BoardStarsSchema, type BoardStars } from '#/models/boardStars';
import { ChecklistSchema, type Checklist } from '#/models/checklist';
import { CardSchema, type Card } from '#/models/card';
import { CustomFieldSchema, type CustomField } from '#/models/customField';
import { LabelSchema, type Label } from '#/models/label';
import { TrelloListSchema, type TrelloList } from '#/models/trelloList';
import { MemberSchema, type Member } from '#/models/member';
import { BoardMembersResultSchema, type BoardMembersResult } from '#/models/boardMembersResult';
import { BoardMyPrefsSchema, type BoardMyPrefs } from '#/models/boardMyPrefs';
import { TagSchema, type Tag } from '#/models/tag';
import { PluginSchema, type Plugin } from '#/models/plugin';
import { type GetBoardMemberships } from '#/parameters/getBoardMemberships';
import { type GetBoard } from '#/parameters/getBoard';
import { type UpdateBoard } from '#/parameters/updateBoard';
import { type DeleteBoard } from '#/parameters/deleteBoard';
import { type GetBoardField } from '#/parameters/getBoardField';
import { type GetBoardActions } from '#/parameters/getBoardActions';
import { type GetBoardStars } from '#/parameters/getBoardStars';
import { type GetBoardChecklists } from '#/parameters/getBoardChecklists';
import { type GetBoardCards } from '#/parameters/getBoardCards';
import { type GetBoardCardsByFilter } from '#/parameters/getBoardCardsByFilter';
import { type GetBoardCustomFields } from '#/parameters/getBoardCustomFields';
import { type GetBoardLabels } from '#/parameters/getBoardLabels';
import { type CreateBoardLabel } from '#/parameters/createBoardLabel';
import { type GetBoardLists } from '#/parameters/getBoardLists';
import { type CreateBoardList } from '#/parameters/createBoardList';
import { type GetBoardListsByFilter } from '#/parameters/getBoardListsByFilter';
import { type GetBoardMembers } from '#/parameters/getBoardMembers';
import { type InviteBoardMember } from '#/parameters/inviteBoardMember';
import { type UpdateBoardMember } from '#/parameters/updateBoardMember';
import { type RemoveBoardMember } from '#/parameters/removeBoardMember';
import { type UpdateBoardMembership } from '#/parameters/updateBoardMembership';
import { type UpdateBoardEmailPosition } from '#/parameters/updateBoardEmailPosition';
import { type UpdateBoardEmailList } from '#/parameters/updateBoardEmailList';
import { type UpdateBoardShowSidebar } from '#/parameters/updateBoardShowSidebar';
import { type UpdateBoardShowSidebarActivity } from '#/parameters/updateBoardShowSidebarActivity';
import { type UpdateBoardShowSidebarBoardActions } from '#/parameters/updateBoardShowSidebarBoardActions';
import { type UpdateBoardShowSidebarMembers } from '#/parameters/updateBoardShowSidebarMembers';
import { type CreateBoard } from '#/parameters/createBoard';
import { type GenerateBoardCalendarKey } from '#/parameters/generateBoardCalendarKey';
import { type GenerateBoardEmailKey } from '#/parameters/generateBoardEmailKey';
import { type AddBoardTag } from '#/parameters/addBoardTag';
import { type MarkBoardAsViewed } from '#/parameters/markBoardAsViewed';
import { type GetBoardPlugins } from '#/parameters/getBoardPlugins';
import { type EnableBoardPlugin } from '#/parameters/enableBoardPlugin';
import { type DisableBoardPlugin } from '#/parameters/disableBoardPlugin';
import { type GetBoardPowerUps } from '#/parameters/getBoardPowerUps';
import { type Client, type SendRequestOptions } from '#/core';
import { z } from 'zod';

/** Get information about the memberships users have to the board. */
export async function getBoardMemberships(client: Client, parameters: GetBoardMemberships): Promise<Memberships[]> {
  const config: SendRequestOptions<Memberships[]> = {
    url: `/boards/${parameters.id}/memberships`,
    method: 'GET',
    searchParams: {
      filter: parameters.filter,
      activity: parameters.activity,
      orgMemberType: parameters.orgMemberType,
      member: parameters.member,
      member_fields: parameters.memberFields,
    },
    schema: z.array(MembershipsSchema),
  };

  return await client.sendRequest(config);
}

/** Request a single board. */
export async function getBoard(client: Client, parameters: GetBoard): Promise<Board> {
  const config: SendRequestOptions<Board> = {
    url: `/boards/${parameters.id}`,
    method: 'GET',
    searchParams: {
      actions: parameters.actions,
      boardStars: parameters.boardStars,
      cards: parameters.cards,
      card_pluginData: parameters.cardPluginData,
      checklists: parameters.checklists,
      customFields: parameters.customFields,
      fields: parameters.fields,
      labels: parameters.labels,
      lists: parameters.lists,
      members: parameters.members,
      memberships: parameters.memberships,
      pluginData: parameters.pluginData,
      organization: parameters.organization,
      organization_pluginData: parameters.organizationPluginData,
      myPrefs: parameters.myPrefs,
      tags: parameters.tags,
    },
    schema: BoardSchema,
  };

  return await client.sendRequest(config);
}

/** Update an existing board by id */
export async function updateBoard(client: Client, parameters: UpdateBoard): Promise<Board> {
  const config: SendRequestOptions<Board> = {
    url: `/boards/${parameters.id}`,
    method: 'PUT',
    searchParams: {
      name: parameters.name,
      desc: parameters.desc,
      closed: parameters.closed,
      subscribed: parameters.subscribed,
      idOrganization: parameters.idOrganization,
      'prefs/permissionLevel': parameters['prefs/permissionLevel'],
      'prefs/selfJoin': parameters['prefs/selfJoin'],
      'prefs/cardCovers': parameters['prefs/cardCovers'],
      'prefs/hideVotes': parameters['prefs/hideVotes'],
      'prefs/invitations': parameters['prefs/invitations'],
      'prefs/voting': parameters['prefs/voting'],
      'prefs/comments': parameters['prefs/comments'],
      'prefs/background': parameters['prefs/background'],
      'prefs/cardAging': parameters['prefs/cardAging'],
      'prefs/calendarFeedEnabled': parameters['prefs/calendarFeedEnabled'],
    },
    schema: BoardSchema,
  };

  return await client.sendRequest(config);
}

/** Delete a board. */
export async function deleteBoard(client: Client, parameters: DeleteBoard): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/boards/${parameters.id}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** Get a single, specific field on a board */
export async function getBoardField<T = unknown>(client: Client, parameters: GetBoardField): Promise<FieldValue<T>> {
  const config: SendRequestOptions<FieldValue<T>> = {
    url: `/boards/${parameters.id}/${parameters.field}`,
    method: 'GET',
    schema: FieldValueSchema as z.ZodType<FieldValue<T>>,
  };

  return await client.sendRequest(config);
}

/**
 * Get all of the actions of a Board. See [Nested
 * Resources](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) for more information.
 */
export async function getBoardActions(client: Client, parameters: GetBoardActions): Promise<Action[]> {
  const config: SendRequestOptions<Action[]> = {
    url: `/boards/${parameters.boardId}/actions`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
      filter: parameters.filter,
      format: parameters.format,
      idModels: parameters.idModels,
      limit: parameters.limit,
      member: parameters.member,
      member_fields: parameters.memberFields,
      memberCreator: parameters.memberCreator,
      memberCreator_fields: parameters.memberCreatorFields,
      page: parameters.page,
      reactions: parameters.reactions,
      before: parameters.before,
      since: parameters.since,
    },
    schema: z.array(ActionSchema),
  };

  return await client.sendRequest(config);
}

export async function getBoardStars(client: Client, parameters: GetBoardStars): Promise<BoardStars[]> {
  const config: SendRequestOptions<BoardStars[]> = {
    url: `/boards/${parameters.boardId}/boardStars`,
    method: 'GET',
    searchParams: {
      filter: parameters.filter,
    },
    schema: z.array(BoardStarsSchema),
  };

  return await client.sendRequest(config);
}

/** Get all of the checklists on a Board. */
export async function getBoardChecklists(client: Client, parameters: GetBoardChecklists): Promise<Checklist[]> {
  const config: SendRequestOptions<Checklist[]> = {
    url: `/boards/${parameters.id}/checklists`,
    method: 'GET',
    schema: z.array(ChecklistSchema),
  };

  return await client.sendRequest(config);
}

/**
 * Get all of the open Cards on a Board. See [Nested
 * Resources](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) for more information.
 */
export async function getBoardCards(client: Client, parameters: GetBoardCards): Promise<Card[]> {
  const config: SendRequestOptions<Card[]> = {
    url: `/boards/${parameters.id}/cards`,
    method: 'GET',
    schema: z.array(CardSchema),
  };

  return await client.sendRequest(config);
}

/**
 * Get the Cards on a Board that match a given filter. See [Nested
 * Resources](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) for more information.
 */
export async function getBoardCardsByFilter(client: Client, parameters: GetBoardCardsByFilter): Promise<Card[]> {
  const config: SendRequestOptions<Card[]> = {
    url: `/boards/${parameters.id}/cards/${parameters.filter}`,
    method: 'GET',
    schema: z.array(CardSchema),
  };

  return await client.sendRequest(config);
}

/** Get the Custom Field Definitions that exist on a board. */
export async function getBoardCustomFields(client: Client, parameters: GetBoardCustomFields): Promise<CustomField[]> {
  const config: SendRequestOptions<CustomField[]> = {
    url: `/boards/${parameters.id}/customFields`,
    method: 'GET',
    schema: z.array(CustomFieldSchema),
  };

  return await client.sendRequest(config);
}

/** Get all of the Labels on a Board. */
export async function getBoardLabels(client: Client, parameters: GetBoardLabels): Promise<Label[]> {
  const config: SendRequestOptions<Label[]> = {
    url: `/boards/${parameters.id}/labels`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
      limit: parameters.limit,
    },
    schema: z.array(LabelSchema),
  };

  return await client.sendRequest(config);
}

/** Create a new Label on a Board. */
export async function createBoardLabel(client: Client, parameters: CreateBoardLabel): Promise<Label> {
  const config: SendRequestOptions<Label> = {
    url: `/boards/${parameters.id}/labels`,
    method: 'POST',
    searchParams: {
      name: parameters.name,
      color: parameters.color,
    },
    schema: LabelSchema,
  };

  return await client.sendRequest(config);
}

/** Get the Lists on a Board */
export async function getBoardLists(client: Client, parameters: GetBoardLists): Promise<TrelloList[]> {
  const config: SendRequestOptions<TrelloList[]> = {
    url: `/boards/${parameters.id}/lists`,
    method: 'GET',
    searchParams: {
      cards: parameters.cards,
      card_fields: parameters.cardFields,
      filter: parameters.filter,
      fields: parameters.fields,
    },
    schema: z.array(TrelloListSchema),
  };

  return await client.sendRequest(config);
}

/** Create a new List on a Board. */
export async function createBoardList(client: Client, parameters: CreateBoardList): Promise<TrelloList> {
  const config: SendRequestOptions<TrelloList> = {
    url: `/boards/${parameters.id}/lists`,
    method: 'POST',
    searchParams: {
      name: parameters.name,
      pos: parameters.pos,
    },
    schema: TrelloListSchema,
  };

  return await client.sendRequest(config);
}

export async function getBoardListsByFilter(client: Client, parameters: GetBoardListsByFilter): Promise<TrelloList[]> {
  const config: SendRequestOptions<TrelloList[]> = {
    url: `/boards/${parameters.id}/lists/${parameters.filter}`,
    method: 'GET',
    schema: z.array(TrelloListSchema),
  };

  return await client.sendRequest(config);
}

/** Get the Members for a board */
export async function getBoardMembers(client: Client, parameters: GetBoardMembers): Promise<Member[]> {
  const config: SendRequestOptions<Member[]> = {
    url: `/boards/${parameters.id}/members`,
    method: 'GET',
    schema: z.array(MemberSchema),
  };

  return await client.sendRequest(config);
}

/** Invite a Member to a Board via their email address. */
export async function inviteBoardMember(client: Client, parameters: InviteBoardMember): Promise<BoardMembersResult> {
  const config: SendRequestOptions<BoardMembersResult> = {
    url: `/boards/${parameters.id}/members`,
    method: 'PUT',
    searchParams: {
      email: parameters.email,
      type: parameters.type,
    },
    body: {
      fullName: parameters.fullName,
    },
    schema: BoardMembersResultSchema,
  };

  return await client.sendRequest(config);
}

/** Add a member to the board. */
export async function updateBoardMember(client: Client, parameters: UpdateBoardMember): Promise<BoardMembersResult> {
  const config: SendRequestOptions<BoardMembersResult> = {
    url: `/boards/${parameters.id}/members/${parameters.idMember}`,
    method: 'PUT',
    searchParams: {
      type: parameters.type,
      allowBillableGuest: parameters.allowBillableGuest,
    },
    schema: BoardMembersResultSchema,
  };

  return await client.sendRequest(config);
}

export async function removeBoardMember(client: Client, parameters: RemoveBoardMember): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/boards/${parameters.id}/members/${parameters.idMember}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** Update an existing board by id */
export async function updateBoardMembership(client: Client, parameters: UpdateBoardMembership): Promise<Memberships> {
  const config: SendRequestOptions<Memberships> = {
    url: `/boards/${parameters.id}/memberships/${parameters.idMembership}`,
    method: 'PUT',
    searchParams: {
      type: parameters.type,
      member_fields: parameters.memberFields,
    },
    schema: MembershipsSchema,
  };

  return await client.sendRequest(config);
}

/** Update emailPosition Pref on a Board */
export async function updateBoardEmailPosition(
  client: Client,
  parameters: UpdateBoardEmailPosition,
): Promise<BoardMyPrefs> {
  const config: SendRequestOptions<BoardMyPrefs> = {
    url: `/boards/${parameters.id}/myPrefs/emailPosition`,
    method: 'PUT',
    searchParams: {
      value: parameters.value,
    },
    schema: BoardMyPrefsSchema,
  };

  return await client.sendRequest(config);
}

/** Change the default list that email-to-board cards are created in. */
export async function updateBoardEmailList(client: Client, parameters: UpdateBoardEmailList): Promise<BoardMyPrefs> {
  const config: SendRequestOptions<BoardMyPrefs> = {
    url: `/boards/${parameters.id}/myPrefs/idEmailList`,
    method: 'PUT',
    searchParams: {
      value: parameters.value,
    },
    schema: BoardMyPrefsSchema,
  };

  return await client.sendRequest(config);
}

export async function updateBoardShowSidebar(
  client: Client,
  parameters: UpdateBoardShowSidebar,
): Promise<BoardMyPrefs> {
  const config: SendRequestOptions<BoardMyPrefs> = {
    url: `/boards/${parameters.id}/myPrefs/showSidebar`,
    method: 'PUT',
    searchParams: {
      value: parameters.value,
    },
    schema: BoardMyPrefsSchema,
  };

  return await client.sendRequest(config);
}

export async function updateBoardShowSidebarActivity(
  client: Client,
  parameters: UpdateBoardShowSidebarActivity,
): Promise<BoardMyPrefs> {
  const config: SendRequestOptions<BoardMyPrefs> = {
    url: `/boards/${parameters.id}/myPrefs/showSidebarActivity`,
    method: 'PUT',
    searchParams: {
      value: parameters.value,
    },
    schema: BoardMyPrefsSchema,
  };

  return await client.sendRequest(config);
}

export async function updateBoardShowSidebarBoardActions(
  client: Client,
  parameters: UpdateBoardShowSidebarBoardActions,
): Promise<BoardMyPrefs> {
  const config: SendRequestOptions<BoardMyPrefs> = {
    url: `/boards/${parameters.id}/myPrefs/showSidebarBoardActions`,
    method: 'PUT',
    searchParams: {
      value: parameters.value,
    },
    schema: BoardMyPrefsSchema,
  };

  return await client.sendRequest(config);
}

export async function updateBoardShowSidebarMembers(
  client: Client,
  parameters: UpdateBoardShowSidebarMembers,
): Promise<BoardMyPrefs> {
  const config: SendRequestOptions<BoardMyPrefs> = {
    url: `/boards/${parameters.id}/myPrefs/showSidebarMembers`,
    method: 'PUT',
    searchParams: {
      value: parameters.value,
    },
    schema: BoardMyPrefsSchema,
  };

  return await client.sendRequest(config);
}

/** Create a new board. */
export async function createBoard(client: Client, parameters: CreateBoard): Promise<Board> {
  const config: SendRequestOptions<Board> = {
    url: '/boards/',
    method: 'POST',
    searchParams: {
      name: parameters.name,
      defaultLabels: parameters.defaultLabels,
      defaultLists: parameters.defaultLists,
      desc: parameters.desc,
      idOrganization: parameters.idOrganization,
      idBoardSource: parameters.idBoardSource,
      keepFromSource: parameters.keepFromSource,
      powerUps: parameters.powerUps,
      prefs_permissionLevel: parameters.prefsPermissionLevel,
      prefs_voting: parameters.prefsVoting,
      prefs_comments: parameters.prefsComments,
      prefs_invitations: parameters.prefsInvitations,
      prefs_selfJoin: parameters.prefsSelfJoin,
      prefs_cardCovers: parameters.prefsCardCovers,
      prefs_background: parameters.prefsBackground,
      prefs_cardAging: parameters.prefsCardAging,
    },
    schema: BoardSchema,
  };

  return await client.sendRequest(config);
}

/** Create a new board. */
export async function generateBoardCalendarKey(client: Client, parameters: GenerateBoardCalendarKey): Promise<Board> {
  const config: SendRequestOptions<Board> = {
    url: `/boards/${parameters.id}/calendarKey/generate`,
    method: 'POST',
    schema: BoardSchema,
  };

  return await client.sendRequest(config);
}

export async function generateBoardEmailKey(client: Client, parameters: GenerateBoardEmailKey): Promise<Board> {
  const config: SendRequestOptions<Board> = {
    url: `/boards/${parameters.id}/emailKey/generate`,
    method: 'POST',
    schema: BoardSchema,
  };

  return await client.sendRequest(config);
}

export async function addBoardTag(client: Client, parameters: AddBoardTag): Promise<Tag> {
  const config: SendRequestOptions<Tag> = {
    url: `/boards/${parameters.id}/idTags`,
    method: 'POST',
    searchParams: {
      value: parameters.value,
    },
    schema: TagSchema,
  };

  return await client.sendRequest(config);
}

export async function markBoardAsViewed(client: Client, parameters: MarkBoardAsViewed): Promise<Board> {
  const config: SendRequestOptions<Board> = {
    url: `/boards/${parameters.id}/markedAsViewed`,
    method: 'POST',
    schema: BoardSchema,
  };

  return await client.sendRequest(config);
}

/** Get the enabled Power-Ups on a board */
export async function getBoardPlugins(client: Client, parameters: GetBoardPlugins): Promise<Plugin[]> {
  const config: SendRequestOptions<Plugin[]> = {
    url: `/boards/${parameters.id}/boardPlugins`,
    method: 'GET',
    schema: z.array(PluginSchema),
  };

  return await client.sendRequest(config);
}

/** Enable a Power-Up on a Board */
export async function enableBoardPlugin(client: Client, parameters: EnableBoardPlugin): Promise<Plugin> {
  const config: SendRequestOptions<Plugin> = {
    url: `/boards/${parameters.id}/boardPlugins`,
    method: 'POST',
    searchParams: {
      idPlugin: parameters.idPlugin,
    },
    schema: PluginSchema,
  };

  return await client.sendRequest(config);
}

/** Disable a Power-Up on a board */
export async function disableBoardPlugin(client: Client, parameters: DisableBoardPlugin): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/boards/${parameters.id}/boardPlugins/${parameters.idPlugin}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** List the Power-Ups on a board */
export async function getBoardPowerUps(client: Client, parameters: GetBoardPowerUps): Promise<Plugin[]> {
  const config: SendRequestOptions<Plugin[]> = {
    url: `/boards/${parameters.id}/plugins`,
    method: 'GET',
    searchParams: {
      filter: parameters.filter,
    },
    schema: z.array(PluginSchema),
  };

  return await client.sendRequest(config);
}
