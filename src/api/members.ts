import { MemberSchema, type Member } from '#/models/member';
import { FieldValueSchema, type FieldValue } from '#/models/fieldValue';
import { ActionSchema, type Action } from '#/models/action';
import { BoardBackgroundSchema, type BoardBackground } from '#/models/boardBackground';
import { BoardStarsSchema, type BoardStars } from '#/models/boardStars';
import { BoardSchema, type Board } from '#/models/board';
import { CardSchema, type Card } from '#/models/card';
import { CustomEmojiSchema, type CustomEmoji } from '#/models/customEmoji';
import { CustomStickerSchema, type CustomSticker } from '#/models/customSticker';
import { NotificationSchema, type Notification } from '#/models/notification';
import { OrganizationSchema, type Organization } from '#/models/organization';
import { SavedSearchSchema, type SavedSearch } from '#/models/savedSearch';
import { TokenSchema, type Token } from '#/models/token';
import {
  NotificationChannelSettingsSchema,
  type NotificationChannelSettings,
} from '#/models/notificationChannelSettings';
import type { GetMember } from '#/parameters/getMember';
import type { UpdateMember } from '#/parameters/updateMember';
import type { GetMemberField } from '#/parameters/getMemberField';
import type { GetMemberActions } from '#/parameters/getMemberActions';
import type { GetMemberBoardBackgrounds } from '#/parameters/getMemberBoardBackgrounds';
import type { CreateMemberBoardBackground } from '#/parameters/createMemberBoardBackground';
import type { GetMemberBoardBackground } from '#/parameters/getMemberBoardBackground';
import type { UpdateMemberBoardBackground } from '#/parameters/updateMemberBoardBackground';
import type { DeleteMemberBoardBackground } from '#/parameters/deleteMemberBoardBackground';
import type { GetMemberBoardStars } from '#/parameters/getMemberBoardStars';
import type { StarBoard } from '#/parameters/starBoard';
import type { GetMemberBoardStar } from '#/parameters/getMemberBoardStar';
import type { UpdateMemberBoardStar } from '#/parameters/updateMemberBoardStar';
import type { UnstarBoard } from '#/parameters/unstarBoard';
import type { GetMemberBoards } from '#/parameters/getMemberBoards';
import type { GetMemberInvitedBoards } from '#/parameters/getMemberInvitedBoards';
import type { GetMemberCards } from '#/parameters/getMemberCards';
import type { GetMemberCustomBoardBackgrounds } from '#/parameters/getMemberCustomBoardBackgrounds';
import type { CreateMemberCustomBoardBackground } from '#/parameters/createMemberCustomBoardBackground';
import type { GetMemberCustomBoardBackground } from '#/parameters/getMemberCustomBoardBackground';
import type { UpdateMemberCustomBoardBackground } from '#/parameters/updateMemberCustomBoardBackground';
import type { DeleteMemberCustomBoardBackground } from '#/parameters/deleteMemberCustomBoardBackground';
import type { GetMemberCustomEmojis } from '#/parameters/getMemberCustomEmojis';
import type { UploadMemberCustomEmoji } from '#/parameters/uploadMemberCustomEmoji';
import type { GetMemberCustomEmoji } from '#/parameters/getMemberCustomEmoji';
import type { GetMemberCustomStickers } from '#/parameters/getMemberCustomStickers';
import type { UploadMemberCustomSticker } from '#/parameters/uploadMemberCustomSticker';
import type { GetMemberCustomSticker } from '#/parameters/getMemberCustomSticker';
import type { DeleteMemberCustomSticker } from '#/parameters/deleteMemberCustomSticker';
import type { GetMemberNotifications } from '#/parameters/getMemberNotifications';
import type { GetMemberOrganizations } from '#/parameters/getMemberOrganizations';
import type { GetMemberInvitedOrganizations } from '#/parameters/getMemberInvitedOrganizations';
import type { GetMemberSavedSearches } from '#/parameters/getMemberSavedSearches';
import type { CreateMemberSavedSearch } from '#/parameters/createMemberSavedSearch';
import type { GetMemberSavedSearch } from '#/parameters/getMemberSavedSearch';
import type { UpdateMemberSavedSearch } from '#/parameters/updateMemberSavedSearch';
import type { DeleteMemberSavedSearch } from '#/parameters/deleteMemberSavedSearch';
import type { GetMemberTokens } from '#/parameters/getMemberTokens';
import type { UploadMemberAvatar } from '#/parameters/uploadMemberAvatar';
import type { DismissMemberOneTimeMessage } from '#/parameters/dismissMemberOneTimeMessage';
import type { GetMemberNotificationChannelSettings } from '#/parameters/getMemberNotificationChannelSettings';
import type { UpdateMemberNotificationChannelSettings } from '#/parameters/updateMemberNotificationChannelSettings';
import type { GetMemberNotificationChannelSetting } from '#/parameters/getMemberNotificationChannelSetting';
import type { UpdateMemberNotificationChannelSetting } from '#/parameters/updateMemberNotificationChannelSetting';
import type { UpdateMemberNotificationChannelBlockedKey } from '#/parameters/updateMemberNotificationChannelBlockedKey';
import type { Client, SendRequestOptions } from '#/core';
import { z } from 'zod';

/** Get a member */
export async function getMember(client: Client, parameters: GetMember): Promise<Member> {
  const config: SendRequestOptions<Member> = {
    url: `/members/${parameters.id}`,
    method: 'GET',
    searchParams: {
      actions: parameters.actions,
      boards: parameters.boards,
      boardBackgrounds: parameters.boardBackgrounds,
      boardsInvited: parameters.boardsInvited,
      boardsInvited_fields: parameters.boardsInvitedFields,
      boardStars: parameters.boardStars,
      cards: parameters.cards,
      customBoardBackgrounds: parameters.customBoardBackgrounds,
      customEmoji: parameters.customEmoji,
      customStickers: parameters.customStickers,
      fields: parameters.fields,
      notifications: parameters.notifications,
      organizations: parameters.organizations,
      organization_fields: parameters.organizationFields,
      organization_paid_account: parameters.organizationPaidAccount,
      organizationsInvited: parameters.organizationsInvited,
      organizationsInvited_fields: parameters.organizationsInvitedFields,
      paid_account: parameters.paidAccount,
      savedSearches: parameters.savedSearches,
      tokens: parameters.tokens,
    },
    schema: MemberSchema,
  };

  return await client.sendRequest(config);
}

/** Update a Member */
export async function updateMember(client: Client, parameters: UpdateMember): Promise<Member> {
  const config: SendRequestOptions<Member> = {
    url: `/members/${parameters.id}`,
    method: 'PUT',
    searchParams: {
      fullName: parameters.fullName,
      initials: parameters.initials,
      username: parameters.username,
      bio: parameters.bio,
      avatarSource: parameters.avatarSource,
      'prefs/colorBlind': parameters['prefs/colorBlind'],
      'prefs/locale': parameters['prefs/locale'],
      'prefs/minutesBetweenSummaries': parameters['prefs/minutesBetweenSummaries'],
    },
    schema: MemberSchema,
  };

  return await client.sendRequest(config);
}

/** Get a particular property of a member */
export async function getMemberField<T = unknown>(client: Client, parameters: GetMemberField): Promise<FieldValue<T>> {
  const config: SendRequestOptions<FieldValue<T>> = {
    url: `/members/${parameters.id}/${parameters.field}`,
    method: 'GET',
    schema: FieldValueSchema as z.ZodType<FieldValue<T>>,
  };

  return await client.sendRequest(config);
}

/** List the actions for a member */
export async function getMemberActions(client: Client, parameters: GetMemberActions): Promise<Action[]> {
  const config: SendRequestOptions<Action[]> = {
    url: `/members/${parameters.id}/actions`,
    method: 'GET',
    searchParams: {
      filter: parameters.filter,
      fields: parameters.fields,
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

/** Get a member's custom board backgrounds */
export async function getMemberBoardBackgrounds(
  client: Client,
  parameters: GetMemberBoardBackgrounds,
): Promise<BoardBackground[]> {
  const config: SendRequestOptions<BoardBackground[]> = {
    url: `/members/${parameters.id}/boardBackgrounds`,
    method: 'GET',
    searchParams: {
      filter: parameters.filter,
    },
    schema: z.array(BoardBackgroundSchema),
  };

  return await client.sendRequest(config);
}

/** Upload a new boardBackground */
export async function createMemberBoardBackground(
  client: Client,
  parameters: CreateMemberBoardBackground,
): Promise<BoardBackground[]> {
  const config: SendRequestOptions<BoardBackground[]> = {
    url: `/members/${parameters.id}/boardBackgrounds`,
    method: 'POST',
    searchParams: {
      file: parameters.file,
    },
    schema: z.array(BoardBackgroundSchema),
  };

  return await client.sendRequest(config);
}

/** Get a member's board background */
export async function getMemberBoardBackground(
  client: Client,
  parameters: GetMemberBoardBackground,
): Promise<BoardBackground> {
  const config: SendRequestOptions<BoardBackground> = {
    url: `/members/${parameters.id}/boardBackgrounds/${parameters.idBackground}`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: BoardBackgroundSchema,
  };

  return await client.sendRequest(config);
}

/** Update a board background */
export async function updateMemberBoardBackground(
  client: Client,
  parameters: UpdateMemberBoardBackground,
): Promise<BoardBackground> {
  const config: SendRequestOptions<BoardBackground> = {
    url: `/members/${parameters.id}/boardBackgrounds/${parameters.idBackground}`,
    method: 'PUT',
    searchParams: {
      brightness: parameters.brightness,
      tile: parameters.tile,
    },
    schema: BoardBackgroundSchema,
  };

  return await client.sendRequest(config);
}

/** Delete a board background */
export async function deleteMemberBoardBackground(
  client: Client,
  parameters: DeleteMemberBoardBackground,
): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/members/${parameters.id}/boardBackgrounds/${parameters.idBackground}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** List a member's board stars */
export async function getMemberBoardStars(client: Client, parameters: GetMemberBoardStars): Promise<BoardStars[]> {
  const config: SendRequestOptions<BoardStars[]> = {
    url: `/members/${parameters.id}/boardStars`,
    method: 'GET',
    schema: z.array(BoardStarsSchema),
  };

  return await client.sendRequest(config);
}

/** Star a new board on behalf of a Member */
export async function starBoard(client: Client, parameters: StarBoard): Promise<BoardStars> {
  const config: SendRequestOptions<BoardStars> = {
    url: `/members/${parameters.id}/boardStars`,
    method: 'POST',
    searchParams: {
      idBoard: parameters.idBoard,
      pos: parameters.pos,
    },
    schema: BoardStarsSchema,
  };

  return await client.sendRequest(config);
}

/** Get a specific boardStar */
export async function getMemberBoardStar(client: Client, parameters: GetMemberBoardStar): Promise<BoardStars> {
  const config: SendRequestOptions<BoardStars> = {
    url: `/members/${parameters.id}/boardStars/${parameters.idStar}`,
    method: 'GET',
    schema: BoardStarsSchema,
  };

  return await client.sendRequest(config);
}

/** Update the position of a starred board */
export async function updateMemberBoardStar(client: Client, parameters: UpdateMemberBoardStar): Promise<BoardStars> {
  const config: SendRequestOptions<BoardStars> = {
    url: `/members/${parameters.id}/boardStars/${parameters.idStar}`,
    method: 'PUT',
    searchParams: {
      pos: parameters.pos,
    },
    schema: BoardStarsSchema,
  };

  return await client.sendRequest(config);
}

/** Unstar a board */
export async function unstarBoard(client: Client, parameters: UnstarBoard): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/members/${parameters.id}/boardStars/${parameters.idStar}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** Lists the boards that the user is a member of. */
export async function getMemberBoards(client: Client, parameters: GetMemberBoards): Promise<Board[]> {
  const config: SendRequestOptions<Board[]> = {
    url: `/members/${parameters.id}/boards`,
    method: 'GET',
    searchParams: {
      filter: parameters.filter,
      fields: parameters.fields,
      lists: parameters.lists,
      organization: parameters.organization,
      organization_fields: parameters.organizationFields,
    },
    schema: z.array(BoardSchema),
  };

  return await client.sendRequest(config);
}

/** Get the boards the member has been invited to */
export async function getMemberInvitedBoards(client: Client, parameters: GetMemberInvitedBoards): Promise<Board[]> {
  const config: SendRequestOptions<Board[]> = {
    url: `/members/${parameters.id}/boardsInvited`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: z.array(BoardSchema),
  };

  return await client.sendRequest(config);
}

/** Gets the cards a member is on */
export async function getMemberCards(client: Client, parameters: GetMemberCards): Promise<Card[]> {
  const config: SendRequestOptions<Card[]> = {
    url: `/members/${parameters.id}/cards`,
    method: 'GET',
    searchParams: {
      filter: parameters.filter,
    },
    schema: z.array(CardSchema),
  };

  return await client.sendRequest(config);
}

/** Get a member's custom board backgrounds */
export async function getMemberCustomBoardBackgrounds(
  client: Client,
  parameters: GetMemberCustomBoardBackgrounds,
): Promise<BoardBackground[]> {
  const config: SendRequestOptions<BoardBackground[]> = {
    url: `/members/${parameters.id}/customBoardBackgrounds`,
    method: 'GET',
    schema: z.array(BoardBackgroundSchema),
  };

  return await client.sendRequest(config);
}

/** Upload a new custom board background */
export async function createMemberCustomBoardBackground(
  client: Client,
  parameters: CreateMemberCustomBoardBackground,
): Promise<BoardBackground> {
  const config: SendRequestOptions<BoardBackground> = {
    url: `/members/${parameters.id}/customBoardBackgrounds`,
    method: 'POST',
    searchParams: {
      file: parameters.file,
    },
    schema: BoardBackgroundSchema,
  };

  return await client.sendRequest(config);
}

/** Get a specific custom board background */
export async function getMemberCustomBoardBackground(
  client: Client,
  parameters: GetMemberCustomBoardBackground,
): Promise<BoardBackground> {
  const config: SendRequestOptions<BoardBackground> = {
    url: `/members/${parameters.id}/customBoardBackgrounds/${parameters.idBackground}`,
    method: 'GET',
    schema: BoardBackgroundSchema,
  };

  return await client.sendRequest(config);
}

/** Update a specific custom board background */
export async function updateMemberCustomBoardBackground(
  client: Client,
  parameters: UpdateMemberCustomBoardBackground,
): Promise<BoardBackground> {
  const config: SendRequestOptions<BoardBackground> = {
    url: `/members/${parameters.id}/customBoardBackgrounds/${parameters.idBackground}`,
    method: 'PUT',
    searchParams: {
      brightness: parameters.brightness,
      tile: parameters.tile,
    },
    schema: BoardBackgroundSchema,
  };

  return await client.sendRequest(config);
}

/** Delete a specific custom board background */
export async function deleteMemberCustomBoardBackground(
  client: Client,
  parameters: DeleteMemberCustomBoardBackground,
): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/members/${parameters.id}/customBoardBackgrounds/${parameters.idBackground}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** Get a Member's uploaded custom Emojis */
export async function getMemberCustomEmojis(client: Client, parameters: GetMemberCustomEmojis): Promise<CustomEmoji[]> {
  const config: SendRequestOptions<CustomEmoji[]> = {
    url: `/members/${parameters.id}/customEmoji`,
    method: 'GET',
    schema: z.array(CustomEmojiSchema),
  };

  return await client.sendRequest(config);
}

/** Create a new custom Emoji */
export async function uploadMemberCustomEmoji(
  client: Client,
  parameters: UploadMemberCustomEmoji,
): Promise<CustomEmoji> {
  const config: SendRequestOptions<CustomEmoji> = {
    url: `/members/${parameters.id}/customEmoji`,
    method: 'POST',
    searchParams: {
      file: parameters.file,
      name: parameters.name,
    },
    schema: CustomEmojiSchema,
  };

  return await client.sendRequest(config);
}

/** Get a Member's custom Emoji */
export async function getMemberCustomEmoji(client: Client, parameters: GetMemberCustomEmoji): Promise<CustomEmoji> {
  const config: SendRequestOptions<CustomEmoji> = {
    url: `/members/${parameters.id}/customEmoji/${parameters.idEmoji}`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: CustomEmojiSchema,
  };

  return await client.sendRequest(config);
}

/** Get a Member's uploaded stickers */
export async function getMemberCustomStickers(
  client: Client,
  parameters: GetMemberCustomStickers,
): Promise<CustomSticker[]> {
  const config: SendRequestOptions<CustomSticker[]> = {
    url: `/members/${parameters.id}/customStickers`,
    method: 'GET',
    schema: z.array(CustomStickerSchema),
  };

  return await client.sendRequest(config);
}

/** Upload a new custom sticker */
export async function uploadMemberCustomSticker(
  client: Client,
  parameters: UploadMemberCustomSticker,
): Promise<CustomSticker> {
  const config: SendRequestOptions<CustomSticker> = {
    url: `/members/${parameters.id}/customStickers`,
    method: 'POST',
    searchParams: {
      file: parameters.file,
    },
    schema: CustomStickerSchema,
  };

  return await client.sendRequest(config);
}

/** Get a Member's custom Sticker */
export async function getMemberCustomSticker(
  client: Client,
  parameters: GetMemberCustomSticker,
): Promise<CustomSticker> {
  const config: SendRequestOptions<CustomSticker> = {
    url: `/members/${parameters.id}/customStickers/${parameters.idSticker}`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: CustomStickerSchema,
  };

  return await client.sendRequest(config);
}

/** Delete a Member's custom Sticker */
export async function deleteMemberCustomSticker(client: Client, parameters: DeleteMemberCustomSticker): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/members/${parameters.id}/customStickers/${parameters.idSticker}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** Get a member's notifications */
export async function getMemberNotifications(
  client: Client,
  parameters: GetMemberNotifications,
): Promise<Notification[]> {
  const config: SendRequestOptions<Notification[]> = {
    url: `/members/${parameters.id}/notifications`,
    method: 'GET',
    searchParams: {
      entities: parameters.entities,
      display: parameters.display,
      filter: parameters.filter,
      read_filter: parameters.readFilter,
      fields: parameters.fields,
      limit: parameters.limit,
      page: parameters.page,
      before: parameters.before,
      since: parameters.since,
      memberCreator: parameters.memberCreator,
      memberCreator_fields: parameters.memberCreatorFields,
    },
    schema: z.array(NotificationSchema),
  };

  return await client.sendRequest(config);
}

/** Get a member's Workspaces */
export async function getMemberOrganizations(
  client: Client,
  parameters: GetMemberOrganizations,
): Promise<Organization[]> {
  const config: SendRequestOptions<Organization[]> = {
    url: `/members/${parameters.id}/organizations`,
    method: 'GET',
    searchParams: {
      filter: parameters.filter,
      fields: parameters.fields,
      paid_account: parameters.paidAccount,
    },
    schema: z.array(OrganizationSchema),
  };

  return await client.sendRequest(config);
}

/** Get a member's Workspaces they have been invited to */
export async function getMemberInvitedOrganizations(
  client: Client,
  parameters: GetMemberInvitedOrganizations,
): Promise<Organization[]> {
  const config: SendRequestOptions<Organization[]> = {
    url: `/members/${parameters.id}/organizationsInvited`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: z.array(OrganizationSchema),
  };

  return await client.sendRequest(config);
}

/** List the saved searches of a Member */
export async function getMemberSavedSearches(
  client: Client,
  parameters: GetMemberSavedSearches,
): Promise<SavedSearch[]> {
  const config: SendRequestOptions<SavedSearch[]> = {
    url: `/members/${parameters.id}/savedSearches`,
    method: 'GET',
    schema: z.array(SavedSearchSchema),
  };

  return await client.sendRequest(config);
}

/** Create a saved search */
export async function createMemberSavedSearch(
  client: Client,
  parameters: CreateMemberSavedSearch,
): Promise<SavedSearch> {
  const config: SendRequestOptions<SavedSearch> = {
    url: `/members/${parameters.id}/savedSearches`,
    method: 'POST',
    searchParams: {
      name: parameters.name,
      query: parameters.query,
      pos: parameters.pos,
    },
    schema: SavedSearchSchema,
  };

  return await client.sendRequest(config);
}

/** Get a saved search */
export async function getMemberSavedSearch(client: Client, parameters: GetMemberSavedSearch): Promise<SavedSearch> {
  const config: SendRequestOptions<SavedSearch> = {
    url: `/members/${parameters.id}/savedSearches/${parameters.idSearch}`,
    method: 'GET',
    schema: SavedSearchSchema,
  };

  return await client.sendRequest(config);
}

/** Update a saved search */
export async function updateMemberSavedSearch(
  client: Client,
  parameters: UpdateMemberSavedSearch,
): Promise<SavedSearch> {
  const config: SendRequestOptions<SavedSearch> = {
    url: `/members/${parameters.id}/savedSearches/${parameters.idSearch}`,
    method: 'PUT',
    searchParams: {
      name: parameters.name,
      query: parameters.query,
      pos: parameters.pos,
    },
    schema: SavedSearchSchema,
  };

  return await client.sendRequest(config);
}

/** Delete a saved search */
export async function deleteMemberSavedSearch(client: Client, parameters: DeleteMemberSavedSearch): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/members/${parameters.id}/savedSearches/${parameters.idSearch}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** List a members app tokens */
export async function getMemberTokens(client: Client, parameters: GetMemberTokens): Promise<Token[]> {
  const config: SendRequestOptions<Token[]> = {
    url: `/members/${parameters.id}/tokens`,
    method: 'GET',
    searchParams: {
      webhooks: parameters.webhooks,
    },
    schema: z.array(TokenSchema),
  };

  return await client.sendRequest(config);
}

/** Create a new avatar for a member */
export async function uploadMemberAvatar(client: Client, parameters: UploadMemberAvatar): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/members/${parameters.id}/avatar`,
    method: 'POST',
    searchParams: {
      file: parameters.file,
    },
  };

  return await client.sendRequest(config);
}

/** Dismiss a message */
export async function dismissMemberOneTimeMessage(
  client: Client,
  parameters: DismissMemberOneTimeMessage,
): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/members/${parameters.id}/oneTimeMessagesDismissed`,
    method: 'POST',
    searchParams: {
      value: parameters.value,
    },
  };

  return await client.sendRequest(config);
}

/** Get a member's notification channel settings */
export async function getMemberNotificationChannelSettings(
  client: Client,
  parameters: GetMemberNotificationChannelSettings,
): Promise<NotificationChannelSettings[]> {
  const config: SendRequestOptions<NotificationChannelSettings[]> = {
    url: `/members/${parameters.id}/notificationsChannelSettings`,
    method: 'GET',
    schema: z.array(NotificationChannelSettingsSchema),
  };

  return await client.sendRequest(config);
}

/** Update blocked notification keys of Member on a specific channel */
export async function updateMemberNotificationChannelSettings(
  client: Client,
  parameters: UpdateMemberNotificationChannelSettings,
): Promise<NotificationChannelSettings> {
  const config: SendRequestOptions<NotificationChannelSettings> = {
    url: `/members/${parameters.id}/notificationsChannelSettings`,
    method: 'PUT',
    body: {
      channel: parameters.channel,
      blockedKeys: parameters.blockedKeys,
    },
    schema: NotificationChannelSettingsSchema,
  };

  return await client.sendRequest(config);
}

/** Get blocked notification keys of Member on a specific channel */
export async function getMemberNotificationChannelSetting(
  client: Client,
  parameters: GetMemberNotificationChannelSetting,
): Promise<NotificationChannelSettings> {
  const config: SendRequestOptions<NotificationChannelSettings> = {
    url: `/members/${parameters.id}/notificationsChannelSettings/${parameters.channel}`,
    method: 'GET',
    schema: NotificationChannelSettingsSchema,
  };

  return await client.sendRequest(config);
}

/** Update blocked notification keys of Member on a specific channel */
export async function updateMemberNotificationChannelSetting(
  client: Client,
  parameters: UpdateMemberNotificationChannelSetting,
): Promise<NotificationChannelSettings> {
  const config: SendRequestOptions<NotificationChannelSettings> = {
    url: `/members/${parameters.id}/notificationsChannelSettings/${parameters.channel}`,
    method: 'PUT',
    body: {
      blockedKeys: parameters.blockedKeys,
    },
    schema: NotificationChannelSettingsSchema,
  };

  return await client.sendRequest(config);
}

/** Update blocked notification keys of Member on a specific channel */
export async function updateMemberNotificationChannelBlockedKey(
  client: Client,
  parameters: UpdateMemberNotificationChannelBlockedKey,
): Promise<NotificationChannelSettings> {
  const config: SendRequestOptions<NotificationChannelSettings> = {
    url: `/members/${parameters.id}/notificationsChannelSettings/${parameters.channel}/${parameters.blockedKeys}`,
    method: 'PUT',
    schema: NotificationChannelSettingsSchema,
  };

  return await client.sendRequest(config);
}
