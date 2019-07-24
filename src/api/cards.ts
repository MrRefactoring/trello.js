import { AxiosRequestConfig } from 'axios';
import { TrelloClient } from '..';
import { joinUrl } from '../helpers';

export class Cards {
  private readonly prefix = 'cards';

  constructor(private readonly client: TrelloClient) { }

  public async getCard(
    options: {
      id: string;
      fields?: string[];
      actions?: string;
      attachments?: string;
      attachmentFields?: string[];
      members?: boolean;
      memberFields?: string[];
      membersVoted?: boolean;
      memberVotedFields?: string[];
      checkItemStates?: boolean;
      checklists?: string;
      checklistFields?: string[];
      board?: boolean;
      boardFields?: string[];
      list?: boolean;
      pluginData?: boolean;
      stickers?: boolean;
      stickerFields?: string[];
      customFieldItems?: boolean;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(','),
        actions: options.actions,
        attachments: options.attachments,
        attachment_fields: options.attachmentFields && options.attachmentFields.join(','),
        members: options.members,
        member_fields: options.memberFields && options.memberFields.join(','),
        membersVoted: options.membersVoted,
        memberVoted_fields: options.memberVotedFields && options.memberVotedFields.join(','),
        checkItemStates: options.checkItemStates,
        checklists: options.checklists,
        checklist_fields: options.checklistFields && options.checklistFields.join(','),
        board: options.board,
        board_fields: options.boardFields && options.boardFields.join(','),
        list: options.list,
        pluginData: options.pluginData,
        stickers: options.stickers,
        sticker_fields: options.stickerFields && options.stickerFields.join(','),
        customFieldItems: options.customFieldItems
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCardField(
    options: {
      id: string;
      field: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, options.field),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getActions(
    options: {
      id: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'actions'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getAttachments(
    options: {
      id: string;
      fields: string[];
      filter: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'attachments'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getAttachment(
    options: {
      id: string;
      idAttachment: string;
      fields?: string[];
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'attachments', options.idAttachment),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getBoard(
    options: {
      id: string;
      fields?: string[];
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'board'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async checkItemState(
    options: {
      id: string;
      fields?: string[];
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'checkItemStates'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getChecklists(
    options: {
      id: string;
      fields?: string[];
      checkItems?: string;
      checkItemFields?: string[];
      filter?: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'checklists'),
      method: 'GET',
      params: {
        checkItems: options.checkItems,
        checkItem_fields: options.checkItemFields && options.checkItemFields.join(','),
        filter: options.filter,
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCheckItem(
    options: {
      id: string;
      fields?: string[];
      idCheckItem: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'checkItem', options.idCheckItem),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCustomFieldItems(
    options: {
      id: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'customFieldItems'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getList(
    options: {
      id: string;
      fields?: string[];
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'list'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getMembers(
    options: {
      id: string;
      fields?: string[];
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'members'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getMembersVotes(
    options: {
      id: string;
      fields?: string[];
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'membersVoted'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getPluginData(
    options: {
      id: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'pluginData'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getStickers(
    options: {
      id: string;
      fields?: string[];
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'stickers'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getSticker(
    options: {
      id: string;
      idSticker: string;
      fields?: string[];
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'stickers', options.idSticker),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateCard(
    options: {
      id: string;
      name?: string;
      desc?: string;
      closed?: boolean;
      idMembers?: string;
      idAttachmentCover?: string;
      idList?: string;
      idLabels?: string;
      idBoard?: string;
      pos?: 'top' | 'bottom' | string | number;
      due?: string | null;
      dueComplete?: boolean;
      subscribed?: boolean;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'PUT',
      params: {
        name: options.name,
        desc: options.desc,
        closed: options.closed,
        idMembers: options.idMembers,
        idAttachmentCover: options.idAttachmentCover,
        idList: options.idList,
        idLabels: options.idLabels,
        idBoard: options.idBoard,
        pos: options.pos,
        due: options.due,
        dueComplete: options.dueComplete,
        subscribed: options.subscribed
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateComment(
    options: {
      id: string;
      idAction: string;
      text: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'actions', options.idAction, 'comments'),
      method: 'PUT',
      params: {
        text: options.text
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateCheckItem(
    options: {
      id: string;
      idCheckItem: string;
      name?: string;
      state?: string;
      idChecklist?: string;
      pos?: 'top' | 'bottom' | string | number;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'checkItem', options.idCheckItem),
      method: 'PUT',
      params: {
        name: options.name,
        state: options.state,
        idChecklist: options.idChecklist,
        pos: options.pos
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateCheckItemInCheckList(
    options: {
      idCard: string;
      idCheckItem: string;
      idChecklist: string;
      pos?: 'top' | 'bottom' | string | number;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.idCard, 'checklist', options.idChecklist, 'checkItem', options.idCheckItem),
      method: 'PUT',
      params: {
        pos: options.pos
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateSticker(
    options: {
      id: string;
      idSticker: string;
      top?: number;
      left?: number;
      zIndex?: number;
      rotate?: number;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'stickers', options.idSticker),
      method: 'PUT',
      params: {
        top: options.top,
        left: options.left,
        zIndex: options.zIndex,
        rotate: options.rotate
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addCard(
    options: {
      name?: string;
      desc?: string;
      pos?: string;
      due?: string;
      dueComplete?: string;
      idList: string;
      idMembers?: string;
      idLabels?: string;
      urlSource?: string;
      fileSource?: any; // TODO it's file
      idCardSource?: string;
      keepFromSource?: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix),
      method: 'POST',
      params: {
        name: options.name,
        desc: options.desc,
        pos: options.pos,
        due: options.due,
        dueComplete: options.dueComplete,
        idList: options.idList,
        idMembers: options.idMembers,
        idLabels: options.idLabels,
        urlSource: options.urlSource,
        fileSource: options.fileSource,
        idCardSource: options.idCardSource,
        keepFromSource: options.keepFromSource
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addComment(
    options: {
      id: string;
      text: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'actions', 'comments'),
      method: 'POST',
      params: {
        text: options.text
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addAttachment(
    options: {
      id: string;
      name?: string;
      file?: any; // TODO it's file
      mimeType?: string;
      url?: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'attachments'),
      method: 'POST',
      params: {
        name: options.name,
        file: options.file,
        mimeType: options.mimeType,
        url: options.url
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addCheckList(
    options: {
      id: string;
      name?: string;
      idChecklistSource?: string;
      pos?: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'checklists'),
      method: 'POST',
      params: {
        name: options.name,
        idChecklistSource: options.idChecklistSource,
        pos: options.pos
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addIdLabel(
    options: {
      id: string;
      value?: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'idLabels'),
      method: 'POST',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addIdMember(
    options: {
      id: string;
      value?: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'idMembers'),
      method: 'POST',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addLabel(
    options: {
      id: string;
      color: string;
      name?: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'labels'),
      method: 'POST',
      params: {
        color: options.color,
        name: options.name
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async markAssociatedNotificationsRead(
    options: {
      id: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'markAssociatedNotificationsRead'),
      method: 'POST'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addMembersVoted(
    options: {
      id: string;
      value: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'membersVoted'),
      method: 'POST',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addSticker(
    options: {
      id: string;
      image: string;
      top: number;
      left: number;
      zIndex: number;
      rotate: number;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'stickers'),
      method: 'POST',
      params: {
        image: options.image,
        top: options.top,
        left: options.left,
        zIndex: options.zIndex,
        rotate: options.rotate
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteCard(
    options: {
      id: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteComment(
    options: {
      id: string;
      idAction: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'actions', options.idAction, 'comments'),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteAttachment(
    options: {
      id: string;
      idAttachment: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'attachments', options.idAttachment),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteCheckItem(
    options: {
      id: string;
      idCheckItem: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'checkItem', options.idCheckItem),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteCheckList(
    options: {
      id: string;
      idChecklist: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'checklists', options.idChecklist),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteLabel(
    options: {
      id: string;
      idLabel: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'idLabels', options.idLabel),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteMember(
    options: {
      id: string;
      idMember: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'idMembers', options.idMember),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteMembersVote(
    options: {
      id: string;
      idMember: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'membersVoted', options.idMember),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteSticker(
    options: {
      id: string;
      idSticker: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'stickers', options.idSticker),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }
}
