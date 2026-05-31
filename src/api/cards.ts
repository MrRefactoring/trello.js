import { CardSchema, type Card } from '#/models/card';
import { FieldValueSchema, type FieldValue } from '#/models/fieldValue';
import { ActionSchema, type Action } from '#/models/action';
import { AttachmentSchema, type Attachment } from '#/models/attachment';
import { BoardSchema, type Board } from '#/models/board';
import { CheckItemStateSchema, type CheckItemState } from '#/models/checkItemState';
import { ChecklistSchema, type Checklist } from '#/models/checklist';
import { CheckItemSchema, type CheckItem } from '#/models/checkItem';
import { TrelloListSchema, type TrelloList } from '#/models/trelloList';
import { MemberSchema, type Member } from '#/models/member';
import { PluginDataSchema, type PluginData } from '#/models/pluginData';
import { CardStickerSchema, type CardSticker } from '#/models/cardSticker';
import { CustomFieldItemsSchema, type CustomFieldItems } from '#/models/customFieldItems';
import { LabelSchema, type Label } from '#/models/label';
import type { CreateCard } from '#/parameters/createCard';
import type { GetCard } from '#/parameters/getCard';
import type { UpdateCard } from '#/parameters/updateCard';
import type { DeleteCard } from '#/parameters/deleteCard';
import type { GetCardField } from '#/parameters/getCardField';
import type { GetCardActions } from '#/parameters/getCardActions';
import type { GetCardAttachments } from '#/parameters/getCardAttachments';
import type { CreateCardAttachment } from '#/parameters/createCardAttachment';
import type { GetCardAttachment } from '#/parameters/getCardAttachment';
import type { DeleteCardAttachment } from '#/parameters/deleteCardAttachment';
import type { GetCardBoard } from '#/parameters/getCardBoard';
import type { GetCardCheckItemStates } from '#/parameters/getCardCheckItemStates';
import type { GetCardChecklists } from '#/parameters/getCardChecklists';
import type { CreateCardChecklist } from '#/parameters/createCardChecklist';
import type { GetCardCheckItem } from '#/parameters/getCardCheckItem';
import type { UpdateCardCheckItem } from '#/parameters/updateCardCheckItem';
import type { DeleteCardCheckItem } from '#/parameters/deleteCardCheckItem';
import type { GetCardList } from '#/parameters/getCardList';
import type { GetCardMembers } from '#/parameters/getCardMembers';
import type { GetCardMembersVoted } from '#/parameters/getCardMembersVoted';
import type { VoteOnCard } from '#/parameters/voteOnCard';
import type { GetCardPluginData } from '#/parameters/getCardPluginData';
import type { GetCardStickers } from '#/parameters/getCardStickers';
import type { CreateCardSticker } from '#/parameters/createCardSticker';
import type { GetCardSticker } from '#/parameters/getCardSticker';
import type { UpdateCardSticker } from '#/parameters/updateCardSticker';
import type { DeleteCardSticker } from '#/parameters/deleteCardSticker';
import type { UpdateCardComment } from '#/parameters/updateCardComment';
import type { DeleteCardComment } from '#/parameters/deleteCardComment';
import type { UpdateCardCustomFieldItem } from '#/parameters/updateCardCustomFieldItem';
import type { UpdateCardCustomFields } from '#/parameters/updateCardCustomFields';
import type { GetCardCustomFieldItems } from '#/parameters/getCardCustomFieldItems';
import type { CreateCardComment } from '#/parameters/createCardComment';
import type { AddCardLabel } from '#/parameters/addCardLabel';
import type { AddCardMember } from '#/parameters/addCardMember';
import type { CreateCardLabel } from '#/parameters/createCardLabel';
import type { MarkCardNotificationsRead } from '#/parameters/markCardNotificationsRead';
import type { RemoveCardLabel } from '#/parameters/removeCardLabel';
import type { RemoveCardMember } from '#/parameters/removeCardMember';
import type { RemoveCardMemberVote } from '#/parameters/removeCardMemberVote';
import type { UpdateCardChecklistItem } from '#/parameters/updateCardChecklistItem';
import type { RemoveCardChecklist } from '#/parameters/removeCardChecklist';
import type { Client, SendRequestOptions } from '#/core';
import { z } from 'zod';

/** Create a new card. Query parameters may also be replaced with a JSON request body instead. */
export async function createCard(client: Client, parameters: CreateCard): Promise<Card> {
  const config: SendRequestOptions<Card> = {
    url: '/cards',
    method: 'POST',
    searchParams: {
      name: parameters.name,
      desc: parameters.desc,
      pos: parameters.pos,
      due: parameters.due,
      start: parameters.start,
      dueComplete: parameters.dueComplete,
      idList: parameters.idList,
      idMembers: parameters.idMembers,
      idLabels: parameters.idLabels,
      urlSource: parameters.urlSource,
      fileSource: parameters.fileSource,
      mimeType: parameters.mimeType,
      idCardSource: parameters.idCardSource,
      keepFromSource: parameters.keepFromSource,
      address: parameters.address,
      locationName: parameters.locationName,
      coordinates: parameters.coordinates,
      cardRole: parameters.cardRole,
    },
    schema: CardSchema,
  };

  return await client.sendRequest(config);
}

/** Get a card by its ID */
export async function getCard(client: Client, parameters: GetCard): Promise<Card> {
  const config: SendRequestOptions<Card> = {
    url: `/cards/${parameters.id}`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
      actions: parameters.actions,
      attachments: parameters.attachments,
      attachment_fields: parameters.attachmentFields,
      members: parameters.members,
      member_fields: parameters.memberFields,
      membersVoted: parameters.membersVoted,
      memberVoted_fields: parameters.memberVotedFields,
      checkItemStates: parameters.checkItemStates,
      checklists: parameters.checklists,
      checklist_fields: parameters.checklistFields,
      board: parameters.board,
      board_fields: parameters.boardFields,
      list: parameters.list,
      pluginData: parameters.pluginData,
      stickers: parameters.stickers,
      sticker_fields: parameters.stickerFields,
      customFieldItems: parameters.customFieldItems,
    },
    schema: CardSchema,
  };

  return await client.sendRequest(config);
}

/** Update a card. Query parameters may also be replaced with a JSON request body instead. */
export async function updateCard(client: Client, parameters: UpdateCard): Promise<Card> {
  const config: SendRequestOptions<Card> = {
    url: `/cards/${parameters.id}`,
    method: 'PUT',
    searchParams: {
      name: parameters.name,
      desc: parameters.desc,
      closed: parameters.closed,
      idMembers: parameters.idMembers,
      idAttachmentCover: parameters.idAttachmentCover,
      idList: parameters.idList,
      idLabels: parameters.idLabels,
      idBoard: parameters.idBoard,
      pos: parameters.pos,
      due: parameters.due,
      start: parameters.start,
      dueComplete: parameters.dueComplete,
      subscribed: parameters.subscribed,
      address: parameters.address,
      locationName: parameters.locationName,
      coordinates: parameters.coordinates,
      cover: parameters.cover,
    },
    schema: CardSchema,
  };

  return await client.sendRequest(config);
}

/** Delete a Card */
export async function deleteCard(client: Client, parameters: DeleteCard): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/cards/${parameters.id}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** Get a specific property of a card */
export async function getCardField<T = unknown>(client: Client, parameters: GetCardField): Promise<FieldValue<T>> {
  const config: SendRequestOptions<FieldValue<T>> = {
    url: `/cards/${parameters.id}/${parameters.field}`,
    method: 'GET',
    schema: FieldValueSchema as z.ZodType<FieldValue<T>>,
  };

  return await client.sendRequest(config);
}

/**
 * List the Actions on a Card. See [Nested
 * Resources](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) for more information.
 */
export async function getCardActions(client: Client, parameters: GetCardActions): Promise<Action[]> {
  const config: SendRequestOptions<Action[]> = {
    url: `/cards/${parameters.id}/actions`,
    method: 'GET',
    searchParams: {
      filter: parameters.filter,
      page: parameters.page,
      fields: parameters.fields,
      format: parameters.format,
      idModels: parameters.idModels,
      limit: parameters.limit,
      member: parameters.member,
      member_fields: parameters.memberFields,
      memberCreator: parameters.memberCreator,
      memberCreator_fields: parameters.memberCreatorFields,
      reactions: parameters.reactions,
      before: parameters.before,
      since: parameters.since,
    },
    schema: z.array(ActionSchema),
  };

  return await client.sendRequest(config);
}

/** List the attachments on a card */
export async function getCardAttachments(client: Client, parameters: GetCardAttachments): Promise<Attachment[]> {
  const config: SendRequestOptions<Attachment[]> = {
    url: `/cards/${parameters.id}/attachments`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
      filter: parameters.filter,
    },
    schema: z.array(AttachmentSchema),
  };

  return await client.sendRequest(config);
}

/**
 * Create an Attachment to a Card. See https://glitch.com/~trello-attachments-api for code examples. You may need to
 * remix the project in order to view it.
 */
export async function createCardAttachment(client: Client, parameters: CreateCardAttachment): Promise<Attachment> {
  const config: SendRequestOptions<Attachment> = {
    url: `/cards/${parameters.id}/attachments`,
    method: 'POST',
    searchParams: {
      name: parameters.name,
      file: parameters.file,
      mimeType: parameters.mimeType,
      url: parameters.url,
      setCover: parameters.setCover,
    },
    schema: AttachmentSchema,
  };

  return await client.sendRequest(config);
}

/** Get a specific Attachment on a Card. */
export async function getCardAttachment(client: Client, parameters: GetCardAttachment): Promise<Attachment> {
  const config: SendRequestOptions<Attachment> = {
    url: `/cards/${parameters.id}/attachments/${parameters.idAttachment}`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: AttachmentSchema,
  };

  return await client.sendRequest(config);
}

/** Delete an Attachment */
export async function deleteCardAttachment(client: Client, parameters: DeleteCardAttachment): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/cards/${parameters.id}/attachments/${parameters.idAttachment}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** Get the board a card is on */
export async function getCardBoard(client: Client, parameters: GetCardBoard): Promise<Board> {
  const config: SendRequestOptions<Board> = {
    url: `/cards/${parameters.id}/board`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: BoardSchema,
  };

  return await client.sendRequest(config);
}

/** Get the completed checklist items on a card */
export async function getCardCheckItemStates(
  client: Client,
  parameters: GetCardCheckItemStates,
): Promise<CheckItemState[]> {
  const config: SendRequestOptions<CheckItemState[]> = {
    url: `/cards/${parameters.id}/checkItemStates`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: z.array(CheckItemStateSchema),
  };

  return await client.sendRequest(config);
}

/** Get the checklists on a card */
export async function getCardChecklists(client: Client, parameters: GetCardChecklists): Promise<Checklist[]> {
  const config: SendRequestOptions<Checklist[]> = {
    url: `/cards/${parameters.id}/checklists`,
    method: 'GET',
    searchParams: {
      checkItems: parameters.checkItems,
      checkItem_fields: parameters.checkItemFields,
      filter: parameters.filter,
      fields: parameters.fields,
    },
    schema: z.array(ChecklistSchema),
  };

  return await client.sendRequest(config);
}

/** Create a new checklist on a card */
export async function createCardChecklist(client: Client, parameters: CreateCardChecklist): Promise<Checklist> {
  const config: SendRequestOptions<Checklist> = {
    url: `/cards/${parameters.id}/checklists`,
    method: 'POST',
    searchParams: {
      name: parameters.name,
      idChecklistSource: parameters.idChecklistSource,
      pos: parameters.pos,
    },
    schema: ChecklistSchema,
  };

  return await client.sendRequest(config);
}

/** Get a specific checkItem on a card */
export async function getCardCheckItem(client: Client, parameters: GetCardCheckItem): Promise<CheckItem> {
  const config: SendRequestOptions<CheckItem> = {
    url: `/cards/${parameters.id}/checkItem/${parameters.idCheckItem}`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: CheckItemSchema,
  };

  return await client.sendRequest(config);
}

/** Update an item in a checklist on a card. */
export async function updateCardCheckItem(client: Client, parameters: UpdateCardCheckItem): Promise<CheckItem> {
  const config: SendRequestOptions<CheckItem> = {
    url: `/cards/${parameters.id}/checkItem/${parameters.idCheckItem}`,
    method: 'PUT',
    searchParams: {
      name: parameters.name,
      state: parameters.state,
      idChecklist: parameters.idChecklist,
      pos: parameters.pos,
      due: parameters.due,
      dueReminder: parameters.dueReminder,
      idMember: parameters.idMember,
    },
    schema: CheckItemSchema,
  };

  return await client.sendRequest(config);
}

/** Delete a checklist item */
export async function deleteCardCheckItem(client: Client, parameters: DeleteCardCheckItem): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/cards/${parameters.id}/checkItem/${parameters.idCheckItem}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** Get the list a card is in */
export async function getCardList(client: Client, parameters: GetCardList): Promise<TrelloList> {
  const config: SendRequestOptions<TrelloList> = {
    url: `/cards/${parameters.id}/list`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: TrelloListSchema,
  };

  return await client.sendRequest(config);
}

/** Get the members on a card */
export async function getCardMembers(client: Client, parameters: GetCardMembers): Promise<Member[]> {
  const config: SendRequestOptions<Member[]> = {
    url: `/cards/${parameters.id}/members`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: z.array(MemberSchema),
  };

  return await client.sendRequest(config);
}

/** Get the members who have voted on a card */
export async function getCardMembersVoted(client: Client, parameters: GetCardMembersVoted): Promise<Member[]> {
  const config: SendRequestOptions<Member[]> = {
    url: `/cards/${parameters.id}/membersVoted`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: z.array(MemberSchema),
  };

  return await client.sendRequest(config);
}

/** Vote on the card for a given member. */
export async function voteOnCard(client: Client, parameters: VoteOnCard): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/cards/${parameters.id}/membersVoted`,
    method: 'POST',
    searchParams: {
      value: parameters.value,
    },
  };

  return await client.sendRequest(config);
}

/** Get any shared pluginData on a card. */
export async function getCardPluginData(client: Client, parameters: GetCardPluginData): Promise<PluginData[]> {
  const config: SendRequestOptions<PluginData[]> = {
    url: `/cards/${parameters.id}/pluginData`,
    method: 'GET',
    schema: z.array(PluginDataSchema),
  };

  return await client.sendRequest(config);
}

/** Get the stickers on a card */
export async function getCardStickers(client: Client, parameters: GetCardStickers): Promise<CardSticker[]> {
  const config: SendRequestOptions<CardSticker[]> = {
    url: `/cards/${parameters.id}/stickers`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: z.array(CardStickerSchema),
  };

  return await client.sendRequest(config);
}

/** Add a sticker to a card */
export async function createCardSticker(client: Client, parameters: CreateCardSticker): Promise<CardSticker> {
  const config: SendRequestOptions<CardSticker> = {
    url: `/cards/${parameters.id}/stickers`,
    method: 'POST',
    searchParams: {
      image: parameters.image,
      top: parameters.top,
      left: parameters.left,
      zIndex: parameters.zIndex,
      rotate: parameters.rotate,
    },
    schema: CardStickerSchema,
  };

  return await client.sendRequest(config);
}

/** Get a specific sticker on a card */
export async function getCardSticker(client: Client, parameters: GetCardSticker): Promise<CardSticker> {
  const config: SendRequestOptions<CardSticker> = {
    url: `/cards/${parameters.id}/stickers/${parameters.idSticker}`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: CardStickerSchema,
  };

  return await client.sendRequest(config);
}

/** Update a sticker on a card */
export async function updateCardSticker(client: Client, parameters: UpdateCardSticker): Promise<CardSticker> {
  const config: SendRequestOptions<CardSticker> = {
    url: `/cards/${parameters.id}/stickers/${parameters.idSticker}`,
    method: 'PUT',
    searchParams: {
      top: parameters.top,
      left: parameters.left,
      zIndex: parameters.zIndex,
      rotate: parameters.rotate,
    },
    schema: CardStickerSchema,
  };

  return await client.sendRequest(config);
}

/** Remove a sticker from the card */
export async function deleteCardSticker(client: Client, parameters: DeleteCardSticker): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/cards/${parameters.id}/stickers/${parameters.idSticker}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** Update an existing comment */
export async function updateCardComment(client: Client, parameters: UpdateCardComment): Promise<Action> {
  const config: SendRequestOptions<Action> = {
    url: `/cards/${parameters.id}/actions/${parameters.idAction}/comments`,
    method: 'PUT',
    searchParams: {
      text: parameters.text,
    },
    schema: ActionSchema,
  };

  return await client.sendRequest(config);
}

/** Delete a comment */
export async function deleteCardComment(client: Client, parameters: DeleteCardComment): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/cards/${parameters.id}/actions/${parameters.idAction}/comments`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/**
 * Setting, updating, and removing the value for a Custom Field on a card. For more details on updating custom fields
 * check out the [Getting Started With Custom
 * Fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)
 */
export async function updateCardCustomFieldItem(client: Client, parameters: UpdateCardCustomFieldItem): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/cards/${parameters.idCard}/customField/${parameters.idCustomField}/item`,
    method: 'PUT',
    body: parameters.body,
  };

  return await client.sendRequest(config);
}

/**
 * Setting, updating, and removing the values for multiple Custom Fields on a card. For more details on updating custom
 * fields check out the [Getting Started With Custom
 * Fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)
 */
export async function updateCardCustomFields(client: Client, parameters: UpdateCardCustomFields): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/cards/${parameters.idCard}/customFields`,
    method: 'PUT',
    body: {
      customFieldItems: parameters.customFieldItems,
    },
  };

  return await client.sendRequest(config);
}

/** Get the custom field items for a card. */
export async function getCardCustomFieldItems(
  client: Client,
  parameters: GetCardCustomFieldItems,
): Promise<CustomFieldItems[]> {
  const config: SendRequestOptions<CustomFieldItems[]> = {
    url: `/cards/${parameters.id}/customFieldItems`,
    method: 'GET',
    schema: z.array(CustomFieldItemsSchema),
  };

  return await client.sendRequest(config);
}

/** Add a new comment to a card */
export async function createCardComment(client: Client, parameters: CreateCardComment): Promise<Action> {
  const config: SendRequestOptions<Action> = {
    url: `/cards/${parameters.id}/actions/comments`,
    method: 'POST',
    searchParams: {
      text: parameters.text,
    },
    schema: ActionSchema,
  };

  return await client.sendRequest(config);
}

/** Add a label to a card */
export async function addCardLabel(client: Client, parameters: AddCardLabel): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/cards/${parameters.id}/idLabels`,
    method: 'POST',
    searchParams: {
      value: parameters.value,
    },
  };

  return await client.sendRequest(config);
}

/** Add a member to a card */
export async function addCardMember(client: Client, parameters: AddCardMember): Promise<Member[]> {
  const config: SendRequestOptions<Member[]> = {
    url: `/cards/${parameters.id}/idMembers`,
    method: 'POST',
    searchParams: {
      value: parameters.value,
    },
    schema: z.array(MemberSchema),
  };

  return await client.sendRequest(config);
}

/** Create a new label for the board and add it to the given card. */
export async function createCardLabel(client: Client, parameters: CreateCardLabel): Promise<Label> {
  const config: SendRequestOptions<Label> = {
    url: `/cards/${parameters.id}/labels`,
    method: 'POST',
    searchParams: {
      color: parameters.color,
      name: parameters.name,
    },
    schema: LabelSchema,
  };

  return await client.sendRequest(config);
}

/** Mark notifications about this card as read */
export async function markCardNotificationsRead(client: Client, parameters: MarkCardNotificationsRead): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/cards/${parameters.id}/markAssociatedNotificationsRead`,
    method: 'POST',
  };

  return await client.sendRequest(config);
}

/** Remove a label from a card */
export async function removeCardLabel(client: Client, parameters: RemoveCardLabel): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/cards/${parameters.id}/idLabels/${parameters.idLabel}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** Remove a member from a card */
export async function removeCardMember(client: Client, parameters: RemoveCardMember): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/cards/${parameters.id}/idMembers/${parameters.idMember}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** Remove a member's vote from a card */
export async function removeCardMemberVote(client: Client, parameters: RemoveCardMemberVote): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/cards/${parameters.id}/membersVoted/${parameters.idMember}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** Update an item in a checklist on a card. */
export async function updateCardChecklistItem(client: Client, parameters: UpdateCardChecklistItem): Promise<CheckItem> {
  const config: SendRequestOptions<CheckItem> = {
    url: `/cards/${parameters.idCard}/checklist/${parameters.idChecklist}/checkItem/${parameters.idCheckItem}`,
    method: 'PUT',
    searchParams: {
      pos: parameters.pos,
    },
    schema: CheckItemSchema,
  };

  return await client.sendRequest(config);
}

/** Delete a checklist from a card */
export async function removeCardChecklist(client: Client, parameters: RemoveCardChecklist): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/cards/${parameters.id}/checklists/${parameters.idChecklist}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}
