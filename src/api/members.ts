import { AxiosRequestConfig } from 'axios';
import { TrelloClient } from '..';
import { joinUrl } from '../helpers';

export class Members {
  private readonly prefix = 'members';

  constructor(private readonly client: TrelloClient) { }

  public async getMember(
    options: {
      id: string;
      actions?: string;
      boards?: string;
      boardBackgrounds?: string;
      boardsInvited?: string[];
      boardsInvitedFields?: string[];
      boardStars?: boolean;
      cards?: string;
      customBoardBackgrounds?: string;
      customEmoji?: string;
      customStickers?: string;
      fields?: string[];
      notifications?: string;
      organizations?: string;
      organizationFields?: string[];
      organizationPaidAccount?: boolean;
      organizationInvited?: string;
      organizationInvitedFields?: string[];
      paidAccount?: boolean;
      savedSearches?: boolean;
      tokens?: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'GET',
      params: {
        actions: options.actions,
        boards: options.boards,
        boardBackgrounds: options.boardBackgrounds,
        boardsInvited: options.boardsInvited,
        boardsInvited_fields: options.boardsInvitedFields && options.boardsInvitedFields.join(','),
        boardStars: options.boardStars,
        cards: options.cards,
        customBoardBackgrounds: options.customBoardBackgrounds,
        customEmoji: options.customEmoji,
        customStickers: options.customStickers,
        fields: options.fields && options.fields.join(','),
        notifications: options.notifications,
        organizations: options.organizations,
        organization_fields: options.organizationFields && options.organizationFields.join(','),
        organization_paid_account: options.organizationPaidAccount,
        organizationInvited: options.organizationInvited,
        organizationInvited_fields: options.organizationInvitedFields && options.organizationInvitedFields.join(','),
        paid_account: options.paidAccount,
        savedSearches: options.savedSearches,
        tokens: options.tokens
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getField(
    options: {
      id: string;
      field: string;
    },
    callback?: (err: any, data: any) => void
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
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'actions'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getBoards(
    options: {
      id: string;
      filter?: string;
      fields?: string[];
      lists?: string[];
      memberships?: string[];
      organization?: boolean;
      organizationFields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'boards'),
      method: 'GET',
      params: {
        filter: options.filter,
        fields: options.fields && options.fields.join(','),
        lists: options.lists && options.lists.join(','),
        memberships: options.memberships && options.memberships.join(','),
        organization: options.organization,
        organization_fields: options.organizationFields && options.organizationFields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getBoardBackgrounds(
    options: {
      id: string;
      filter?: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'boardBackgrounds'),
      method: 'GET',
      params: {
        filter: options.filter
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getBoardBackground(
    options: {
      id: string;
      idBackground: string;
      filter?: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'boardBackgrounds', options.idBackground),
      method: 'GET',
      params: {
        filter: options.filter
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getBoardStars(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'boardStars'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getBoardStar(
    options: {
      id: string;
      idStar: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'boardStars', options.idStar),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getBoardsInvited(
    options: {
      id: string;
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'boardsInvited'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCards(
    options: {
      id: string;
      filter?: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'cards'),
      method: 'GET',
      params: {
        filter: options.filter
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCustomBoardBackgrounds(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'customBoardBackgrounds'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCustomBoardBackground(
    options: {
      id: string;
      idBackground: string;
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'customBoardBackgrounds', options.idBackground),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCustomEmojis(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'customEmoji'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCustomEmoji(
    options: {
      id: string;
      idEmoji: string;
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'customEmoji', options.idEmoji),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCustomStickers(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'customStickers'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCustomSticker(
    options: {
      id: string;
      idSticker: string;
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'customEmoji', options.idSticker),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getEnterprises(
    options: {
      id: string;
      idSticker: string;
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'enterprises'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getNotifications(
    options: {
      id: string;
      entities?: boolean;
      display?: boolean;
      filter?: string;
      readFilter?: string;
      fields?: string[];
      limit?: number;
      page?: number;
      before?: string;
      since?: string;
      memberCreator?: boolean;
      memberCreatorFields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'notifications'),
      method: 'GET',
      params: {
        entities: options.entities,
        display: options.display,
        filter: options.filter,
        read_filter: options.readFilter,
        fields: options.fields && options.fields.join(','),
        limit: options.limit,
        page: options.page,
        before: options.before,
        since: options.since,
        memberCreator: options.memberCreator,
        memberCreator_fields: options.memberCreatorFields && options.memberCreatorFields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getOrganizations(
    options: {
      id: string;
      filter?: string;
      fields?: string[];
      paidAccount?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'organizations'),
      method: 'GET',
      params: {
        filter: options.filter,
        fields: options.fields && options.fields.join(','),
        paid_account: options.paidAccount
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getOrganizationInvited(
    options: {
      id: string;
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'organizationsInvited'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getSavedSearchers(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'savedSearches'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getSavedSearch(
    options: {
      id: string;
      idSearch: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'savedSearches', options.idSearch),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getToken(
    options: {
      id: string;
      webhooks?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'tokens'),
      method: 'GET',
      params: {
        webhooks: options.webhooks
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateMember(
    options: {
      id: string;
      fullName?: string;
      initials?: string;
      username?: string;
      bio?: string;
      avatarSource?: string;
      colorBlind?: boolean;
      locale?: string;
      minutesBetweenSummaries?: number;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'PUT',
      params: {
        fullName: options.fullName,
        initials: options.initials,
        username: options.username,
        bio: options.bio,
        avatarSource: options.avatarSource,
        'prefs/colorBlind': options.colorBlind,
        'prefs/locale': options.locale,
        'prefs/minutesBetweenSummaries': options.minutesBetweenSummaries
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateBoardBackground(
    options: {
      id: string;
      idBackground: string;
      brightness?: string;
      tile?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'boardBackgrounds', options.idBackground),
      method: 'PUT',
      params: {
        brightness: options.brightness,
        tile: options.tile
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateBoardStar(
    options: {
      id: string;
      idStar: string;
      pos?: string | number;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'boardStars', options.idStar),
      method: 'PUT',
      params: {
        pos: options.pos
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateCustomBackground(
    options: {
      id: string;
      idBackground: string;
      brightness?: string;
      tile?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'customBoardBackgrounds', options.idBackground),
      method: 'PUT',
      params: {
        brightness: options.brightness,
        tile: options.tile
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateSavedSearch(
    options: {
      id: string;
      idSearch: string;
      name?: string;
      query?: string;
      pos?: string | number;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'savedSearches', options.idSearch),
      method: 'PUT',
      params: {
        name: options.name,
        query: options.query,
        pos: options.pos
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addAvatar(
    options: {
      id: string;
      file: string | any;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'avatar'),
      method: 'POST',
      params: {
        file: options.file
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async uploadBoardBackground(
    options: {
      id: string;
      file: any;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'boardBackgrounds'),
      method: 'POST',
      params: {
        file: options.file
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async starBoard(
    options: {
      id: string;
      idBoard: string;
      pos: string | number;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'boardStars'),
      method: 'POST',
      params: {
        idBoard: options.idBoard,
        pos: options.pos
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async uploadCustomBoardBackground(
    options: {
      id: string;
      file: any;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'customBoardBackgrounds'),
      method: 'POST',
      params: {
        file: options.file
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async uploadCustomEmoji(
    options: {
      id: string;
      file: any;
      name: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'customEmoji'),
      method: 'POST',
      params: {
        file: options.file,
        name: options.name
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async uploadCustomSticker(
    options: {
      id: string;
      file: any;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'customSticker'),
      method: 'POST',
      params: {
        file: options.file
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async dismissMessage(
    options: {
      id: string;
      value: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'oneTimeMessagesDismissed'),
      method: 'POST',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async createSavedSearch(
    options: {
      id: string;
      name: string;
      query: string;
      pos: string | number;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'savedSearches'),
      method: 'POST',
      params: {
        name: options.name,
        query: options.query,
        pos: options.pos
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteBoardBackground(
    options: {
      id: string;
      idBackground: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'boardBackgrounds', options.idBackground),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteBoardStar(
    options: {
      id: string;
      idStar: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'boardStars', options.idStar),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteCustomBoardBackground(
    options: {
      id: string;
      idBackground: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'customBoardBackgrounds', options.idBackground),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteCustomSticker(
    options: {
      id: string;
      idSticker: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'customStickers', options.idSticker),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteSavedSearch(
    options: {
      id: string;
      idSearch: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'savedSearches', options.idSearch),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }
}
