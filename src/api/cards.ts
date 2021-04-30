import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Cards {
  constructor(private client: Client) {
  }

  /**
   * Create a new card */
  async createCard<T = unknown>(parameters: Parameters.CreateCard, callback: Callback<T>): Promise<void>;
  /**
   * Create a new card */
  async createCard<T = unknown>(parameters: Parameters.CreateCard, callback?: never): Promise<T>;
  async createCard<T = unknown>(parameters: Parameters.CreateCard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: '/cards',
      method: 'POST',
      params: {
        name: parameters.name,
        desc: parameters.desc,
        pos: parameters.pos,
        due: parameters.due,
        dueComplete: parameters.dueComplete,
        idList: parameters.idList,
        idMembers: parameters.idMembers,
        idLabels: parameters.idLabels,
        urlSource: parameters.urlSource,
        fileSource: parameters.fileSource,
        idCardSource: parameters.idCardSource,
        keepFromSource: parameters.keepFromSource,
        address: parameters.address,
        locationName: parameters.locationName,
        coordinates: parameters.coordinates,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'createCard' });
  }

  /**
   * Get a card by its ID */
  async getCard<T = Models.Card>(parameters: Parameters.GetCard, callback: Callback<T>): Promise<void>;
  /**
   * Get a card by its ID */
  async getCard<T = Models.Card>(parameters: Parameters.GetCard, callback?: never): Promise<T>;
  async getCard<T = Models.Card>(parameters: Parameters.GetCard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}`,
      method: 'GET',
      params: {
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
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCard' });
  }

  /**
   * Update a card */
  async updateCard<T = Models.Card>(parameters: Parameters.UpdateCard, callback: Callback<T>): Promise<void>;
  /**
   * Update a card */
  async updateCard<T = Models.Card>(parameters: Parameters.UpdateCard, callback?: never): Promise<T>;
  async updateCard<T = Models.Card>(parameters: Parameters.UpdateCard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}`,
      method: 'PUT',
      params: {
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
        dueComplete: parameters.dueComplete,
        subscribed: parameters.subscribed,
        address: parameters.address,
        locationName: parameters.locationName,
        coordinates: parameters.coordinates,
        cover: parameters.cover,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateCard' });
  }

  /**
   * Delete a Card */
  async deleteCard<T = unknown>(parameters: Parameters.DeleteCard, callback: Callback<T>): Promise<void>;
  /**
   * Delete a Card */
  async deleteCard<T = unknown>(parameters: Parameters.DeleteCard, callback?: never): Promise<T>;
  async deleteCard<T = unknown>(parameters: Parameters.DeleteCard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCard' });
  }

  /**
   * Get a specific property of a card */
  async getCardField<T = Models.Card>(parameters: Parameters.GetCardField, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific property of a card */
  async getCardField<T = Models.Card>(parameters: Parameters.GetCardField, callback?: never): Promise<T>;
  async getCardField<T = Models.Card>(parameters: Parameters.GetCardField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/${parameters.field}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardField' });
  }

  /**
   * List the Actions on a Card */
  async getCardActions<T = Array<Models.Action>>(parameters: Parameters.GetCardActions, callback: Callback<T>): Promise<void>;
  /**
   * List the Actions on a Card */
  async getCardActions<T = Array<Models.Action>>(parameters: Parameters.GetCardActions, callback?: never): Promise<T>;
  async getCardActions<T = Array<Models.Action>>(parameters: Parameters.GetCardActions, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/actions`,
      method: 'GET',
      params: {
        filter: parameters.filter,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardActions' });
  }

  /**
   * List the attachments on a card */
  async getCardAttachments<T = Array<Models.Attachment>>(parameters: Parameters.GetCardAttachments, callback: Callback<T>): Promise<void>;
  /**
   * List the attachments on a card */
  async getCardAttachments<T = Array<Models.Attachment>>(parameters: Parameters.GetCardAttachments, callback?: never): Promise<T>;
  async getCardAttachments<T = Array<Models.Attachment>>(parameters: Parameters.GetCardAttachments, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/attachments`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardAttachments' });
  }

  /**
   * Create an Attachment to a Card */
  async createCardAttachment<T = Array<Models.Attachment>>(parameters: Parameters.CreateCardAttachment, callback: Callback<T>): Promise<void>;
  /**
   * Create an Attachment to a Card */
  async createCardAttachment<T = Array<Models.Attachment>>(parameters: Parameters.CreateCardAttachment, callback?: never): Promise<T>;
  async createCardAttachment<T = Array<Models.Attachment>>(parameters: Parameters.CreateCardAttachment, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/attachments`,
      method: 'POST',
      params: {
        name: parameters.name,
        file: parameters.file,
        mimeType: parameters.mimeType,
        url: parameters.url,
        setCover: parameters.setCover,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'createCardAttachment' });
  }

  /**
   * Get a specific Attachment on a Card. */
  async getCardAttachment<T = Array<Models.Attachment>>(parameters: Parameters.GetCardAttachment, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific Attachment on a Card. */
  async getCardAttachment<T = Array<Models.Attachment>>(parameters: Parameters.GetCardAttachment, callback?: never): Promise<T>;
  async getCardAttachment<T = Array<Models.Attachment>>(parameters: Parameters.GetCardAttachment, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/attachments/${parameters.idAttachment}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardAttachment' });
  }

  /**
   * Delete an Attachment */
  async deleteCardAttachment<T = unknown>(parameters: Parameters.DeleteCardAttachment, callback: Callback<T>): Promise<void>;
  /**
   * Delete an Attachment */
  async deleteCardAttachment<T = unknown>(parameters: Parameters.DeleteCardAttachment, callback?: never): Promise<T>;
  async deleteCardAttachment<T = unknown>(parameters: Parameters.DeleteCardAttachment, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/attachments/${parameters.idAttachment}`,
      method: 'DELETE',
      data: parameters.body,
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCardAttachment' });
  }

  /**
   * Get the board a card is on */
  async getCardBoard<T = unknown>(parameters: Parameters.GetCardBoard, callback: Callback<T>): Promise<void>;
  /**
   * Get the board a card is on */
  async getCardBoard<T = unknown>(parameters: Parameters.GetCardBoard, callback?: never): Promise<T>;
  async getCardBoard<T = unknown>(parameters: Parameters.GetCardBoard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/board`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardBoard' });
  }

  /**
   * Get the completed checklist items on a card */
  async getCardCompletedChecklists<T = unknown>(parameters: Parameters.GetCardCompletedChecklists, callback: Callback<T>): Promise<void>;
  /**
   * Get the completed checklist items on a card */
  async getCardCompletedChecklists<T = unknown>(parameters: Parameters.GetCardCompletedChecklists, callback?: never): Promise<T>;
  async getCardCompletedChecklists<T = unknown>(parameters: Parameters.GetCardCompletedChecklists, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/checkItemStates`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardCompletedChecklists' });
  }

  /**
   * Get the checklists on a card */
  async getCardChecklists<T = unknown>(parameters: Parameters.GetCardChecklists, callback: Callback<T>): Promise<void>;
  /**
   * Get the checklists on a card */
  async getCardChecklists<T = unknown>(parameters: Parameters.GetCardChecklists, callback?: never): Promise<T>;
  async getCardChecklists<T = unknown>(parameters: Parameters.GetCardChecklists, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/checklists`,
      method: 'GET',
      params: {
        checkItems: parameters.checkItems,
        checkItem_fields: parameters.checkItemFields,
        filter: parameters.filter,
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardChecklists' });
  }

  /**
   * Create a new checklist on a card */
  async createCardChecklist<T = unknown>(parameters: Parameters.CreateCardChecklist, callback: Callback<T>): Promise<void>;
  /**
   * Create a new checklist on a card */
  async createCardChecklist<T = unknown>(parameters: Parameters.CreateCardChecklist, callback?: never): Promise<T>;
  async createCardChecklist<T = unknown>(parameters: Parameters.CreateCardChecklist, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/checklists`,
      method: 'POST',
      params: {
        name: parameters.name,
        idChecklistSource: parameters.idChecklistSource,
        pos: parameters.pos,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'createCardChecklist' });
  }

  /**
   * Get a specific checkItem on a card */
  async getCardChecklistItem<T = unknown>(parameters: Parameters.GetCardChecklistItem, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific checkItem on a card */
  async getCardChecklistItem<T = unknown>(parameters: Parameters.GetCardChecklistItem, callback?: never): Promise<T>;
  async getCardChecklistItem<T = unknown>(parameters: Parameters.GetCardChecklistItem, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/checkItem/${parameters.idCheckItem}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardChecklistItem' });
  }

  /**
   * Update an item in a checklist on a card. */
  async updateCardCheckItem<T = unknown>(parameters: Parameters.UpdateCardCheckItem, callback: Callback<T>): Promise<void>;
  /**
   * Update an item in a checklist on a card. */
  async updateCardCheckItem<T = unknown>(parameters: Parameters.UpdateCardCheckItem, callback?: never): Promise<T>;
  async updateCardCheckItem<T = unknown>(parameters: Parameters.UpdateCardCheckItem, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/checkItem/${parameters.idCheckItem}`,
      method: 'PUT',
      params: {
        name: parameters.name,
        state: parameters.state,
        idChecklist: parameters.idChecklist,
        pos: parameters.pos,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateCardCheckItem' });
  }

  /**
   * Delete a checklist item */
  async deleteCardChecklistItem<T = unknown>(parameters: Parameters.DeleteCardChecklistItem, callback: Callback<T>): Promise<void>;
  /**
   * Delete a checklist item */
  async deleteCardChecklistItem<T = unknown>(parameters: Parameters.DeleteCardChecklistItem, callback?: never): Promise<T>;
  async deleteCardChecklistItem<T = unknown>(parameters: Parameters.DeleteCardChecklistItem, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/checkItem/${parameters.idCheckItem}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCardChecklistItem' });
  }

  /**
   * Get the list a card is in */
  async getCardList<T = unknown>(parameters: Parameters.GetCardList, callback: Callback<T>): Promise<void>;
  /**
   * Get the list a card is in */
  async getCardList<T = unknown>(parameters: Parameters.GetCardList, callback?: never): Promise<T>;
  async getCardList<T = unknown>(parameters: Parameters.GetCardList, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/list`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardList' });
  }

  /**
   * Get the members on a card */
  async getCardMembers<T = unknown>(parameters: Parameters.GetCardMembers, callback: Callback<T>): Promise<void>;
  /**
   * Get the members on a card */
  async getCardMembers<T = unknown>(parameters: Parameters.GetCardMembers, callback?: never): Promise<T>;
  async getCardMembers<T = unknown>(parameters: Parameters.GetCardMembers, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/members`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardMembers' });
  }

  /**
   * Get the members who have voted on a card */
  async getCardMembersVoted<T = unknown>(parameters: Parameters.GetCardMembersVoted, callback: Callback<T>): Promise<void>;
  /**
   * Get the members who have voted on a card */
  async getCardMembersVoted<T = unknown>(parameters: Parameters.GetCardMembersVoted, callback?: never): Promise<T>;
  async getCardMembersVoted<T = unknown>(parameters: Parameters.GetCardMembersVoted, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/membersVoted`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardMembersVoted' });
  }

  /**
   * Vote on the card for a given member. */
  async voteOnCardForGivenMember<T = unknown>(parameters: Parameters.VoteOnCardForGivenMember, callback: Callback<T>): Promise<void>;
  /**
   * Vote on the card for a given member. */
  async voteOnCardForGivenMember<T = unknown>(parameters: Parameters.VoteOnCardForGivenMember, callback?: never): Promise<T>;
  async voteOnCardForGivenMember<T = unknown>(parameters: Parameters.VoteOnCardForGivenMember, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/membersVoted`,
      method: 'POST',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'voteOnCardForGivenMember' });
  }

  /**
   * Get any shared pluginData on a card. */
  async getCardPluginData<T = unknown>(parameters: Parameters.GetCardPluginData, callback: Callback<T>): Promise<void>;
  /**
   * Get any shared pluginData on a card. */
  async getCardPluginData<T = unknown>(parameters: Parameters.GetCardPluginData, callback?: never): Promise<T>;
  async getCardPluginData<T = unknown>(parameters: Parameters.GetCardPluginData, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/pluginData`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardPluginData' });
  }

  /**
   * Get the stickers on a card */
  async getCardStickers<T = unknown>(parameters: Parameters.GetCardStickers, callback: Callback<T>): Promise<void>;
  /**
   * Get the stickers on a card */
  async getCardStickers<T = unknown>(parameters: Parameters.GetCardStickers, callback?: never): Promise<T>;
  async getCardStickers<T = unknown>(parameters: Parameters.GetCardStickers, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/stickers`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
      data: parameters.body,
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardStickers' });
  }

  /**
   * Add a sticker to a card */
  async addStickerToCard<T = unknown>(parameters: Parameters.AddStickerToCard, callback: Callback<T>): Promise<void>;
  /**
   * Add a sticker to a card */
  async addStickerToCard<T = unknown>(parameters: Parameters.AddStickerToCard, callback?: never): Promise<T>;
  async addStickerToCard<T = unknown>(parameters: Parameters.AddStickerToCard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/stickers`,
      method: 'POST',
      params: {
        image: parameters.image,
        top: parameters.top,
        left: parameters.left,
        zIndex: parameters.zIndex,
        rotate: parameters.rotate,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'addStickerToCard' });
  }

  /**
   * Get a specific sticker on a card */
  async getCardSticker<T = unknown>(parameters: Parameters.GetCardSticker, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific sticker on a card */
  async getCardSticker<T = unknown>(parameters: Parameters.GetCardSticker, callback?: never): Promise<T>;
  async getCardSticker<T = unknown>(parameters: Parameters.GetCardSticker, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/stickers/${parameters.idSticker}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardSticker' });
  }

  /**
   * Update a sticker on a card */
  async updateCardSticker<T = unknown>(parameters: Parameters.UpdateCardSticker, callback: Callback<T>): Promise<void>;
  /**
   * Update a sticker on a card */
  async updateCardSticker<T = unknown>(parameters: Parameters.UpdateCardSticker, callback?: never): Promise<T>;
  async updateCardSticker<T = unknown>(parameters: Parameters.UpdateCardSticker, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/stickers/${parameters.idSticker}`,
      method: 'PUT',
      params: {
        top: parameters.top,
        left: parameters.left,
        zIndex: parameters.zIndex,
        rotate: parameters.rotate,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateCardSticker' });
  }

  /**
   * Remove a sticker from the card */
  async deleteCardSticker<T = unknown>(parameters: Parameters.DeleteCardSticker, callback: Callback<T>): Promise<void>;
  /**
   * Remove a sticker from the card */
  async deleteCardSticker<T = unknown>(parameters: Parameters.DeleteCardSticker, callback?: never): Promise<T>;
  async deleteCardSticker<T = unknown>(parameters: Parameters.DeleteCardSticker, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/stickers/${parameters.idSticker}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCardSticker' });
  }

  /**
   * Update an existing comment */
  async updateCardComment<T = unknown>(parameters: Parameters.UpdateCardComment, callback: Callback<T>): Promise<void>;
  /**
   * Update an existing comment */
  async updateCardComment<T = unknown>(parameters: Parameters.UpdateCardComment, callback?: never): Promise<T>;
  async updateCardComment<T = unknown>(parameters: Parameters.UpdateCardComment, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/actions/${parameters.idAction}/comments`,
      method: 'PUT',
      params: {
        text: parameters.text,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateCardComment' });
  }

  /**
   * Delete a comment */
  async deleteCardComment<T = unknown>(parameters: Parameters.DeleteCardComment, callback: Callback<T>): Promise<void>;
  /**
   * Delete a comment */
  async deleteCardComment<T = unknown>(parameters: Parameters.DeleteCardComment, callback?: never): Promise<T>;
  async deleteCardComment<T = unknown>(parameters: Parameters.DeleteCardComment, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/actions/${parameters.idAction}/comments`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCardComment' });
  }

  /**
   * Setting, updating, and removing the value for a Custom Field on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/getting-started-with-custom-fields/) */
  async updateCardCustomField<T = unknown>(parameters: Parameters.UpdateCardCustomField, callback: Callback<T>): Promise<void>;
  /**
   * Setting, updating, and removing the value for a Custom Field on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/getting-started-with-custom-fields/) */
  async updateCardCustomField<T = unknown>(parameters: Parameters.UpdateCardCustomField, callback?: never): Promise<T>;
  async updateCardCustomField<T = unknown>(parameters: Parameters.UpdateCardCustomField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.idCard}/customField/${parameters.idCustomField}/item`,
      method: 'PUT',
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateCardCustomField' });
  }

  /**
   * Get the custom field items for a card. */
  async getCardCustomFields<T = Array<Models.CustomFieldItems>>(parameters: Parameters.GetCardCustomFields, callback: Callback<T>): Promise<void>;
  /**
   * Get the custom field items for a card. */
  async getCardCustomFields<T = Array<Models.CustomFieldItems>>(parameters: Parameters.GetCardCustomFields, callback?: never): Promise<T>;
  async getCardCustomFields<T = Array<Models.CustomFieldItems>>(parameters: Parameters.GetCardCustomFields, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/customFieldItems`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardCustomFields' });
  }

  /**
   * Add a new comment to a card */
  async addCardComment<T = unknown>(parameters: Parameters.AddCardComment, callback: Callback<T>): Promise<void>;
  /**
   * Add a new comment to a card */
  async addCardComment<T = unknown>(parameters: Parameters.AddCardComment, callback?: never): Promise<T>;
  async addCardComment<T = unknown>(parameters: Parameters.AddCardComment, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/actions/comments`,
      method: 'POST',
      params: {
        text: parameters.text,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'addCardComment' });
  }

  /**
   * Add a label to a card */
  async addCardLabel<T = unknown>(parameters: Parameters.AddCardLabel, callback: Callback<T>): Promise<void>;
  /**
   * Add a label to a card */
  async addCardLabel<T = unknown>(parameters: Parameters.AddCardLabel, callback?: never): Promise<T>;
  async addCardLabel<T = unknown>(parameters: Parameters.AddCardLabel, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/idLabels`,
      method: 'POST',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'addCardLabel' });
  }

  /**
   * Add a member to a card */
  async addCardMember<T = unknown>(parameters: Parameters.AddCardMember, callback: Callback<T>): Promise<void>;
  /**
   * Add a member to a card */
  async addCardMember<T = unknown>(parameters: Parameters.AddCardMember, callback?: never): Promise<T>;
  async addCardMember<T = unknown>(parameters: Parameters.AddCardMember, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/idMembers`,
      method: 'POST',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'addCardMember' });
  }

  /**
   * Create a new label for the board and add it to the given card. */
  async createCardLabel<T = unknown>(parameters: Parameters.CreateCardLabel, callback: Callback<T>): Promise<void>;
  /**
   * Create a new label for the board and add it to the given card. */
  async createCardLabel<T = unknown>(parameters: Parameters.CreateCardLabel, callback?: never): Promise<T>;
  async createCardLabel<T = unknown>(parameters: Parameters.CreateCardLabel, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/labels`,
      method: 'POST',
      params: {
        color: parameters.color,
        name: parameters.name,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'createCardLabel' });
  }

  /**
   * Mark notifications about this card as read */
  async markCardNotificationAsRead<T = unknown>(parameters: Parameters.MarkCardNotificationAsRead, callback: Callback<T>): Promise<void>;
  /**
   * Mark notifications about this card as read */
  async markCardNotificationAsRead<T = unknown>(parameters: Parameters.MarkCardNotificationAsRead, callback?: never): Promise<T>;
  async markCardNotificationAsRead<T = unknown>(parameters: Parameters.MarkCardNotificationAsRead, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/markAssociatedNotificationsRead`,
      method: 'POST',
    };

    return this.client.sendRequest(config, callback, { methodName: 'markCardNotificationAsRead' });
  }

  /**
   * Remove a label from a card */
  async deleteCardLabel<T = unknown>(parameters: Parameters.DeleteCardLabel, callback: Callback<T>): Promise<void>;
  /**
   * Remove a label from a card */
  async deleteCardLabel<T = unknown>(parameters: Parameters.DeleteCardLabel, callback?: never): Promise<T>;
  async deleteCardLabel<T = unknown>(parameters: Parameters.DeleteCardLabel, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/idLabels/${parameters.idLabel}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCardLabel' });
  }

  /**
   * Remove a member from a card */
  async deleteCardMember<T = unknown>(parameters: Parameters.DeleteCardMember, callback: Callback<T>): Promise<void>;
  /**
   * Remove a member from a card */
  async deleteCardMember<T = unknown>(parameters: Parameters.DeleteCardMember, callback?: never): Promise<T>;
  async deleteCardMember<T = unknown>(parameters: Parameters.DeleteCardMember, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/idMembers/${parameters.idMember}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCardMember' });
  }

  /**
   * Remove a member's vote from a card */
  async deleteCardMemberVote<T = unknown>(parameters: Parameters.DeleteCardMemberVote, callback: Callback<T>): Promise<void>;
  /**
   * Remove a member's vote from a card */
  async deleteCardMemberVote<T = unknown>(parameters: Parameters.DeleteCardMemberVote, callback?: never): Promise<T>;
  async deleteCardMemberVote<T = unknown>(parameters: Parameters.DeleteCardMemberVote, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/membersVoted/${parameters.idMember}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCardMemberVote' });
  }

  /**
   * Update an item in a checklist on a card. */
  async updateCardChecklistItem<T = Models.CheckItem>(parameters: Parameters.UpdateCardChecklistItem, callback: Callback<T>): Promise<void>;
  /**
   * Update an item in a checklist on a card. */
  async updateCardChecklistItem<T = Models.CheckItem>(parameters: Parameters.UpdateCardChecklistItem, callback?: never): Promise<T>;
  async updateCardChecklistItem<T = Models.CheckItem>(parameters: Parameters.UpdateCardChecklistItem, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.idCard}/checklist/${parameters.idChecklist}/checkItem/${parameters.idCheckItem}`,
      method: 'PUT',
      params: {
        pos: parameters.pos,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateCardChecklistItem' });
  }

  /**
   * Delete a checklist from a card */
  async deleteCardChecklist<T = unknown>(parameters: Parameters.DeleteCardChecklist, callback: Callback<T>): Promise<void>;
  /**
   * Delete a checklist from a card */
  async deleteCardChecklist<T = unknown>(parameters: Parameters.DeleteCardChecklist, callback?: never): Promise<T>;
  async deleteCardChecklist<T = unknown>(parameters: Parameters.DeleteCardChecklist, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/checklists/${parameters.idChecklist}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCardChecklist' });
  }
}
