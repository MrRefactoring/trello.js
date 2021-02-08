import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Cards {
  constructor(private client: Client) { }

  /**
   * Create a new card */
  async postCards<T = any>(parameters: Parameters.PostCards, callback: Callback<T>): Promise<void>;
  /**
   * Create a new card */
  async postCards<T = any>(parameters: Parameters.PostCards, callback?: undefined): Promise<T>;
  async postCards<T = any>(parameters: Parameters.PostCards, callback?: Callback<T>): Promise<void | T> {
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

    return this.client.sendRequest(config, callback, { methodName: 'postCards' });
  }

  /**
   * Get a card by its ID */
  async getCardsId<T = Models.Card>(parameters: Parameters.GetCardsId, callback: Callback<T>): Promise<void>;
  /**
   * Get a card by its ID */
  async getCardsId<T = Models.Card>(parameters: Parameters.GetCardsId, callback?: undefined): Promise<T>;
  async getCardsId<T = Models.Card>(parameters: Parameters.GetCardsId, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
        actions: parameters.actions,
        attachments: parameters.attachments,
        attachment_fields: parameters.attachment_fields,
        members: parameters.members,
        member_fields: parameters.member_fields,
        membersVoted: parameters.membersVoted,
        memberVoted_fields: parameters.memberVoted_fields,
        checkItemStates: parameters.checkItemStates,
        checklists: parameters.checklists,
        checklist_fields: parameters.checklist_fields,
        board: parameters.board,
        board_fields: parameters.board_fields,
        list: parameters.list,
        pluginData: parameters.pluginData,
        stickers: parameters.stickers,
        sticker_fields: parameters.sticker_fields,
        customFieldItems: parameters.customFieldItems,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardsId' });
  }

  /**
   * Update a card */
  async putCardsId<T = Models.Card>(parameters: Parameters.PutCardsId, callback: Callback<T>): Promise<void>;
  /**
   * Update a card */
  async putCardsId<T = Models.Card>(parameters: Parameters.PutCardsId, callback?: undefined): Promise<T>;
  async putCardsId<T = Models.Card>(parameters: Parameters.PutCardsId, callback?: Callback<T>): Promise<void | T> {
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

    return this.client.sendRequest(config, callback, { methodName: 'putCardsId' });
  }

  /**
   * Delete a Card */
  async deleteCardsId<T = any>(parameters: Parameters.DeleteCardsId, callback: Callback<T>): Promise<void>;
  /**
   * Delete a Card */
  async deleteCardsId<T = any>(parameters: Parameters.DeleteCardsId, callback?: undefined): Promise<T>;
  async deleteCardsId<T = any>(parameters: Parameters.DeleteCardsId, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCardsId' });
  }

  /**
   * Get a specific property of a card */
  async getCardsIdField<T = Models.Card>(parameters: Parameters.GetCardsIdField, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific property of a card */
  async getCardsIdField<T = Models.Card>(parameters: Parameters.GetCardsIdField, callback?: undefined): Promise<T>;
  async getCardsIdField<T = Models.Card>(parameters: Parameters.GetCardsIdField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/${parameters.field}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardsIdField' });
  }

  /**
   * List the Actions on a Card */
  async getCardsIdActions<T = any>(parameters: Parameters.GetCardsIdActions, callback: Callback<T>): Promise<void>;
  /**
   * List the Actions on a Card */
  async getCardsIdActions<T = any>(parameters: Parameters.GetCardsIdActions, callback?: undefined): Promise<T>;
  async getCardsIdActions<T = any>(parameters: Parameters.GetCardsIdActions, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/actions`,
      method: 'GET',
      params: {
        filter: parameters.filter,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardsIdActions' });
  }

  /**
   * List the attachments on a card */
  async getCardsIdAttachments<T = any>(parameters: Parameters.GetCardsIdAttachments, callback: Callback<T>): Promise<void>;
  /**
   * List the attachments on a card */
  async getCardsIdAttachments<T = any>(parameters: Parameters.GetCardsIdAttachments, callback?: undefined): Promise<T>;
  async getCardsIdAttachments<T = any>(parameters: Parameters.GetCardsIdAttachments, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/attachments`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardsIdAttachments' });
  }

  /**
   * Create an Attachment to a Card */
  async postCardsIdAttachments<T = any>(parameters: Parameters.PostCardsIdAttachments, callback: Callback<T>): Promise<void>;
  /**
   * Create an Attachment to a Card */
  async postCardsIdAttachments<T = any>(parameters: Parameters.PostCardsIdAttachments, callback?: undefined): Promise<T>;
  async postCardsIdAttachments<T = any>(parameters: Parameters.PostCardsIdAttachments, callback?: Callback<T>): Promise<void | T> {
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

    return this.client.sendRequest(config, callback, { methodName: 'postCardsIdAttachments' });
  }

  /**
   * Get a specific Attachment on a Card. */
  async getCardsIdAttachmentsIdattachment<T = any>(parameters: Parameters.GetCardsIdAttachmentsIdattachment, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific Attachment on a Card. */
  async getCardsIdAttachmentsIdattachment<T = any>(parameters: Parameters.GetCardsIdAttachmentsIdattachment, callback?: undefined): Promise<T>;
  async getCardsIdAttachmentsIdattachment<T = any>(parameters: Parameters.GetCardsIdAttachmentsIdattachment, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/attachments/${parameters.idAttachment}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardsIdAttachmentsIdattachment' });
  }

  /**
   * Delete an Attachment */
  async deletedCardsIdAttachmentsIdattachment<T = any>(parameters: Parameters.DeletedCardsIdAttachmentsIdattachment, callback: Callback<T>): Promise<void>;
  /**
   * Delete an Attachment */
  async deletedCardsIdAttachmentsIdattachment<T = any>(parameters: Parameters.DeletedCardsIdAttachmentsIdattachment, callback?: undefined): Promise<T>;
  async deletedCardsIdAttachmentsIdattachment<T = any>(parameters: Parameters.DeletedCardsIdAttachmentsIdattachment, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/attachments/${parameters.idAttachment}`,
      method: 'DELETE',
      data: parameters.body,
    };

    return this.client.sendRequest(config, callback, { methodName: 'deletedCardsIdAttachmentsIdattachment' });
  }

  /**
   * Get the board a card is on */
  async getCardsIdBoard<T = any>(parameters: Parameters.GetCardsIdBoard, callback: Callback<T>): Promise<void>;
  /**
   * Get the board a card is on */
  async getCardsIdBoard<T = any>(parameters: Parameters.GetCardsIdBoard, callback?: undefined): Promise<T>;
  async getCardsIdBoard<T = any>(parameters: Parameters.GetCardsIdBoard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/board`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardsIdBoard' });
  }

  /**
   * Get the completed checklist items on a card */
  async getCardsIdCheckitemstates<T = any>(parameters: Parameters.GetCardsIdCheckitemstates, callback: Callback<T>): Promise<void>;
  /**
   * Get the completed checklist items on a card */
  async getCardsIdCheckitemstates<T = any>(parameters: Parameters.GetCardsIdCheckitemstates, callback?: undefined): Promise<T>;
  async getCardsIdCheckitemstates<T = any>(parameters: Parameters.GetCardsIdCheckitemstates, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/checkItemStates`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardsIdCheckitemstates' });
  }

  /**
   * Get the checklists on a card */
  async getCardsIdChecklists<T = any>(parameters: Parameters.GetCardsIdChecklists, callback: Callback<T>): Promise<void>;
  /**
   * Get the checklists on a card */
  async getCardsIdChecklists<T = any>(parameters: Parameters.GetCardsIdChecklists, callback?: undefined): Promise<T>;
  async getCardsIdChecklists<T = any>(parameters: Parameters.GetCardsIdChecklists, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/checklists`,
      method: 'GET',
      params: {
        checkItems: parameters.checkItems,
        checkItem_fields: parameters.checkItem_fields,
        filter: parameters.filter,
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardsIdChecklists' });
  }

  /**
   * Create a new checklist on a card */
  async postCardsIdChecklists<T = any>(parameters: Parameters.PostCardsIdChecklists, callback: Callback<T>): Promise<void>;
  /**
   * Create a new checklist on a card */
  async postCardsIdChecklists<T = any>(parameters: Parameters.PostCardsIdChecklists, callback?: undefined): Promise<T>;
  async postCardsIdChecklists<T = any>(parameters: Parameters.PostCardsIdChecklists, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/checklists`,
      method: 'POST',
      params: {
        name: parameters.name,
        idChecklistSource: parameters.idChecklistSource,
        pos: parameters.pos,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'postCardsIdChecklists' });
  }

  /**
   * Get a specific checkItem on a card */
  async getCardsIdCheckitemIdcheckitem<T = any>(parameters: Parameters.GetCardsIdCheckitemIdcheckitem, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific checkItem on a card */
  async getCardsIdCheckitemIdcheckitem<T = any>(parameters: Parameters.GetCardsIdCheckitemIdcheckitem, callback?: undefined): Promise<T>;
  async getCardsIdCheckitemIdcheckitem<T = any>(parameters: Parameters.GetCardsIdCheckitemIdcheckitem, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/checkItem/${parameters.idCheckItem}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardsIdCheckitemIdcheckitem' });
  }

  /**
   * Update an item in a checklist on a card. */
  async putCardsIdCheckitemIdcheckitem<T = any>(parameters: Parameters.PutCardsIdCheckitemIdcheckitem, callback: Callback<T>): Promise<void>;
  /**
   * Update an item in a checklist on a card. */
  async putCardsIdCheckitemIdcheckitem<T = any>(parameters: Parameters.PutCardsIdCheckitemIdcheckitem, callback?: undefined): Promise<T>;
  async putCardsIdCheckitemIdcheckitem<T = any>(parameters: Parameters.PutCardsIdCheckitemIdcheckitem, callback?: Callback<T>): Promise<void | T> {
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

    return this.client.sendRequest(config, callback, { methodName: 'putCardsIdCheckitemIdcheckitem' });
  }

  /**
   * Delete a checklist item */
  async deleteCardsIdCheckitemIdcheckitem<T = any>(parameters: Parameters.DeleteCardsIdCheckitemIdcheckitem, callback: Callback<T>): Promise<void>;
  /**
   * Delete a checklist item */
  async deleteCardsIdCheckitemIdcheckitem<T = any>(parameters: Parameters.DeleteCardsIdCheckitemIdcheckitem, callback?: undefined): Promise<T>;
  async deleteCardsIdCheckitemIdcheckitem<T = any>(parameters: Parameters.DeleteCardsIdCheckitemIdcheckitem, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/checkItem/${parameters.idCheckItem}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCardsIdCheckitemIdcheckitem' });
  }

  /**
   * Get the list a card is in */
  async getCardsIdList<T = any>(parameters: Parameters.GetCardsIdList, callback: Callback<T>): Promise<void>;
  /**
   * Get the list a card is in */
  async getCardsIdList<T = any>(parameters: Parameters.GetCardsIdList, callback?: undefined): Promise<T>;
  async getCardsIdList<T = any>(parameters: Parameters.GetCardsIdList, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/list`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardsIdList' });
  }

  /**
   * Get the members on a card */
  async getCardsIdMembers<T = any>(parameters: Parameters.GetCardsIdMembers, callback: Callback<T>): Promise<void>;
  /**
   * Get the members on a card */
  async getCardsIdMembers<T = any>(parameters: Parameters.GetCardsIdMembers, callback?: undefined): Promise<T>;
  async getCardsIdMembers<T = any>(parameters: Parameters.GetCardsIdMembers, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/members`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardsIdMembers' });
  }

  /**
   * Get the members who have voted on a card */
  async getCardsIdMembersvoted<T = any>(parameters: Parameters.GetCardsIdMembersvoted, callback: Callback<T>): Promise<void>;
  /**
   * Get the members who have voted on a card */
  async getCardsIdMembersvoted<T = any>(parameters: Parameters.GetCardsIdMembersvoted, callback?: undefined): Promise<T>;
  async getCardsIdMembersvoted<T = any>(parameters: Parameters.GetCardsIdMembersvoted, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/membersVoted`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardsIdMembersvoted' });
  }

  /**
   * Vote on the card for a given member. */
  async cardsidmembersvoted1<T = any>(parameters: Parameters.Cardsidmembersvoted1, callback: Callback<T>): Promise<void>;
  /**
   * Vote on the card for a given member. */
  async cardsidmembersvoted1<T = any>(parameters: Parameters.Cardsidmembersvoted1, callback?: undefined): Promise<T>;
  async cardsidmembersvoted1<T = any>(parameters: Parameters.Cardsidmembersvoted1, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/membersVoted`,
      method: 'POST',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'cardsidmembersvoted1' });
  }

  /**
   * Get any shared pluginData on a card. */
  async getCardsIdPlugindata<T = any>(parameters: Parameters.GetCardsIdPlugindata, callback: Callback<T>): Promise<void>;
  /**
   * Get any shared pluginData on a card. */
  async getCardsIdPlugindata<T = any>(parameters: Parameters.GetCardsIdPlugindata, callback?: undefined): Promise<T>;
  async getCardsIdPlugindata<T = any>(parameters: Parameters.GetCardsIdPlugindata, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/pluginData`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardsIdPlugindata' });
  }

  /**
   * Get the stickers on a card */
  async getCardsIdStickers<T = any>(parameters: Parameters.GetCardsIdStickers, callback: Callback<T>): Promise<void>;
  /**
   * Get the stickers on a card */
  async getCardsIdStickers<T = any>(parameters: Parameters.GetCardsIdStickers, callback?: undefined): Promise<T>;
  async getCardsIdStickers<T = any>(parameters: Parameters.GetCardsIdStickers, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/stickers`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
      data: parameters.body,
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardsIdStickers' });
  }

  /**
   * Add a sticker to a card */
  async postCardsIdStickers<T = any>(parameters: Parameters.PostCardsIdStickers, callback: Callback<T>): Promise<void>;
  /**
   * Add a sticker to a card */
  async postCardsIdStickers<T = any>(parameters: Parameters.PostCardsIdStickers, callback?: undefined): Promise<T>;
  async postCardsIdStickers<T = any>(parameters: Parameters.PostCardsIdStickers, callback?: Callback<T>): Promise<void | T> {
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

    return this.client.sendRequest(config, callback, { methodName: 'postCardsIdStickers' });
  }

  /**
   * Get a specific sticker on a card */
  async getCardsIdStickersIdsticker<T = any>(parameters: Parameters.GetCardsIdStickersIdsticker, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific sticker on a card */
  async getCardsIdStickersIdsticker<T = any>(parameters: Parameters.GetCardsIdStickersIdsticker, callback?: undefined): Promise<T>;
  async getCardsIdStickersIdsticker<T = any>(parameters: Parameters.GetCardsIdStickersIdsticker, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/stickers/${parameters.idSticker}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardsIdStickersIdsticker' });
  }

  /**
   * Update a sticker on a card */
  async putCardsIdStickersIdsticker<T = any>(parameters: Parameters.PutCardsIdStickersIdsticker, callback: Callback<T>): Promise<void>;
  /**
   * Update a sticker on a card */
  async putCardsIdStickersIdsticker<T = any>(parameters: Parameters.PutCardsIdStickersIdsticker, callback?: undefined): Promise<T>;
  async putCardsIdStickersIdsticker<T = any>(parameters: Parameters.PutCardsIdStickersIdsticker, callback?: Callback<T>): Promise<void | T> {
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

    return this.client.sendRequest(config, callback, { methodName: 'putCardsIdStickersIdsticker' });
  }

  /**
   * Remove a sticker from the card */
  async deleteCardsIdStickersIdsticker<T = any>(parameters: Parameters.DeleteCardsIdStickersIdsticker, callback: Callback<T>): Promise<void>;
  /**
   * Remove a sticker from the card */
  async deleteCardsIdStickersIdsticker<T = any>(parameters: Parameters.DeleteCardsIdStickersIdsticker, callback?: undefined): Promise<T>;
  async deleteCardsIdStickersIdsticker<T = any>(parameters: Parameters.DeleteCardsIdStickersIdsticker, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/stickers/${parameters.idSticker}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCardsIdStickersIdsticker' });
  }

  /**
   * Update an existing comment */
  async putCardsIdActionsIdactionComments<T = any>(parameters: Parameters.PutCardsIdActionsIdactionComments, callback: Callback<T>): Promise<void>;
  /**
   * Update an existing comment */
  async putCardsIdActionsIdactionComments<T = any>(parameters: Parameters.PutCardsIdActionsIdactionComments, callback?: undefined): Promise<T>;
  async putCardsIdActionsIdactionComments<T = any>(parameters: Parameters.PutCardsIdActionsIdactionComments, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/actions/${parameters.idAction}/comments`,
      method: 'PUT',
      params: {
        text: parameters.text,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'putCardsIdActionsIdactionComments' });
  }

  /**
   * Delete a comment */
  async deleteCardsIdActionsIdComments<T = any>(parameters: Parameters.DeleteCardsIdActionsIdComments, callback: Callback<T>): Promise<void>;
  /**
   * Delete a comment */
  async deleteCardsIdActionsIdComments<T = any>(parameters: Parameters.DeleteCardsIdActionsIdComments, callback?: undefined): Promise<T>;
  async deleteCardsIdActionsIdComments<T = any>(parameters: Parameters.DeleteCardsIdActionsIdComments, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/actions/${parameters.idAction}/comments`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCardsIdActionsIdComments' });
  }

  /**
   * Setting, updating, and removing the value for a Custom Field on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](/cloud/trello/guides/rest-api/getting-started-with-custom-fields/) */
  async putCardsIdcardCustomfieldIdcustomfieldItem<T = any>(parameters: Parameters.PutCardsIdcardCustomfieldIdcustomfieldItem, callback: Callback<T>): Promise<void>;
  /**
   * Setting, updating, and removing the value for a Custom Field on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](/cloud/trello/guides/rest-api/getting-started-with-custom-fields/) */
  async putCardsIdcardCustomfieldIdcustomfieldItem<T = any>(parameters: Parameters.PutCardsIdcardCustomfieldIdcustomfieldItem, callback?: undefined): Promise<T>;
  async putCardsIdcardCustomfieldIdcustomfieldItem<T = any>(parameters: Parameters.PutCardsIdcardCustomfieldIdcustomfieldItem, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.idCard}/customField/${parameters.idCustomField}/item`,
      method: 'PUT',
    };

    return this.client.sendRequest(config, callback, { methodName: 'putCardsIdcardCustomfieldIdcustomfieldItem' });
  }

  /**
   * Get the custom field items for a card. */
  async getCardsIdCustomfielditems<T = any>(parameters: Parameters.GetCardsIdCustomfielditems, callback: Callback<T>): Promise<void>;
  /**
   * Get the custom field items for a card. */
  async getCardsIdCustomfielditems<T = any>(parameters: Parameters.GetCardsIdCustomfielditems, callback?: undefined): Promise<T>;
  async getCardsIdCustomfielditems<T = any>(parameters: Parameters.GetCardsIdCustomfielditems, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/customFieldItems`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCardsIdCustomfielditems' });
  }

  /**
   * Add a new comment to a card */
  async postCardsIdActionsComments<T = any>(parameters: Parameters.PostCardsIdActionsComments, callback: Callback<T>): Promise<void>;
  /**
   * Add a new comment to a card */
  async postCardsIdActionsComments<T = any>(parameters: Parameters.PostCardsIdActionsComments, callback?: undefined): Promise<T>;
  async postCardsIdActionsComments<T = any>(parameters: Parameters.PostCardsIdActionsComments, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/actions/comments`,
      method: 'POST',
      params: {
        text: parameters.text,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'postCardsIdActionsComments' });
  }

  /**
   * Add a label to a card */
  async postCardsIdIdlabels<T = any>(parameters: Parameters.PostCardsIdIdlabels, callback: Callback<T>): Promise<void>;
  /**
   * Add a label to a card */
  async postCardsIdIdlabels<T = any>(parameters: Parameters.PostCardsIdIdlabels, callback?: undefined): Promise<T>;
  async postCardsIdIdlabels<T = any>(parameters: Parameters.PostCardsIdIdlabels, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/idLabels`,
      method: 'POST',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'postCardsIdIdlabels' });
  }

  /**
   * Add a member to a card */
  async postCardsIdIdmembers<T = any>(parameters: Parameters.PostCardsIdIdmembers, callback: Callback<T>): Promise<void>;
  /**
   * Add a member to a card */
  async postCardsIdIdmembers<T = any>(parameters: Parameters.PostCardsIdIdmembers, callback?: undefined): Promise<T>;
  async postCardsIdIdmembers<T = any>(parameters: Parameters.PostCardsIdIdmembers, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/idMembers`,
      method: 'POST',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'postCardsIdIdmembers' });
  }

  /**
   * Create a new label for the board and add it to the given card. */
  async postCardsIdLabels<T = any>(parameters: Parameters.PostCardsIdLabels, callback: Callback<T>): Promise<void>;
  /**
   * Create a new label for the board and add it to the given card. */
  async postCardsIdLabels<T = any>(parameters: Parameters.PostCardsIdLabels, callback?: undefined): Promise<T>;
  async postCardsIdLabels<T = any>(parameters: Parameters.PostCardsIdLabels, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/labels`,
      method: 'POST',
      params: {
        color: parameters.color,
        name: parameters.name,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'postCardsIdLabels' });
  }

  /**
   * Mark notifications about this card as read */
  async postCardsIdMarkassociatednotificationsread<T = any>(parameters: Parameters.PostCardsIdMarkassociatednotificationsread, callback: Callback<T>): Promise<void>;
  /**
   * Mark notifications about this card as read */
  async postCardsIdMarkassociatednotificationsread<T = any>(parameters: Parameters.PostCardsIdMarkassociatednotificationsread, callback?: undefined): Promise<T>;
  async postCardsIdMarkassociatednotificationsread<T = any>(parameters: Parameters.PostCardsIdMarkassociatednotificationsread, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/markAssociatedNotificationsRead`,
      method: 'POST',
    };

    return this.client.sendRequest(config, callback, { methodName: 'postCardsIdMarkassociatednotificationsread' });
  }

  /**
   * Remove a label from a card */
  async deleteCardsIdIdlabelsIdlabel<T = any>(parameters: Parameters.DeleteCardsIdIdlabelsIdlabel, callback: Callback<T>): Promise<void>;
  /**
   * Remove a label from a card */
  async deleteCardsIdIdlabelsIdlabel<T = any>(parameters: Parameters.DeleteCardsIdIdlabelsIdlabel, callback?: undefined): Promise<T>;
  async deleteCardsIdIdlabelsIdlabel<T = any>(parameters: Parameters.DeleteCardsIdIdlabelsIdlabel, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/idLabels/${parameters.idLabel}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCardsIdIdlabelsIdlabel' });
  }

  /**
   * Remove a member from a card */
  async deleteIdIdmembersIdmember<T = any>(parameters: Parameters.DeleteIdIdmembersIdmember, callback: Callback<T>): Promise<void>;
  /**
   * Remove a member from a card */
  async deleteIdIdmembersIdmember<T = any>(parameters: Parameters.DeleteIdIdmembersIdmember, callback?: undefined): Promise<T>;
  async deleteIdIdmembersIdmember<T = any>(parameters: Parameters.DeleteIdIdmembersIdmember, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/idMembers/${parameters.idMember}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteIdIdmembersIdmember' });
  }

  /**
   * Remove a member's vote from a card */
  async deleteCardsIdMembersvotedIdmember<T = any>(parameters: Parameters.DeleteCardsIdMembersvotedIdmember, callback: Callback<T>): Promise<void>;
  /**
   * Remove a member's vote from a card */
  async deleteCardsIdMembersvotedIdmember<T = any>(parameters: Parameters.DeleteCardsIdMembersvotedIdmember, callback?: undefined): Promise<T>;
  async deleteCardsIdMembersvotedIdmember<T = any>(parameters: Parameters.DeleteCardsIdMembersvotedIdmember, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/membersVoted/${parameters.idMember}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCardsIdMembersvotedIdmember' });
  }

  /**
   * Update an item in a checklist on a card. */
  async putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem<T = Models.CheckItem>(parameters: Parameters.PutCardsIdcardChecklistIdchecklistCheckitemIdcheckitem, callback: Callback<T>): Promise<void>;
  /**
   * Update an item in a checklist on a card. */
  async putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem<T = Models.CheckItem>(parameters: Parameters.PutCardsIdcardChecklistIdchecklistCheckitemIdcheckitem, callback?: undefined): Promise<T>;
  async putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem<T = Models.CheckItem>(parameters: Parameters.PutCardsIdcardChecklistIdchecklistCheckitemIdcheckitem, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.idCard}/checklist/${parameters.idChecklist}/checkItem/${parameters.idCheckItem}`,
      method: 'PUT',
      params: {
        pos: parameters.pos,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem' });
  }

  /**
   * Delete a checklist from a card */
  async deleteCardsIdChecklistsIdchecklist<T = any>(parameters: Parameters.DeleteCardsIdChecklistsIdchecklist, callback: Callback<T>): Promise<void>;
  /**
   * Delete a checklist from a card */
  async deleteCardsIdChecklistsIdchecklist<T = any>(parameters: Parameters.DeleteCardsIdChecklistsIdchecklist, callback?: undefined): Promise<T>;
  async deleteCardsIdChecklistsIdchecklist<T = any>(parameters: Parameters.DeleteCardsIdChecklistsIdchecklist, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/cards/${parameters.id}/checklists/${parameters.idChecklist}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCardsIdChecklistsIdchecklist' });
  }
}
