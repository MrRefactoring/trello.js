import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Members {
  constructor(private client: Client) {
  }

  /**
   * Get a member */
  async getMember<T = unknown>(parameters: Parameters.GetMember, callback: Callback<T>): Promise<void>;
  /**
   * Get a member */
  async getMember<T = unknown>(parameters: Parameters.GetMember, callback?: never): Promise<T>;
  async getMember<T = unknown>(parameters: Parameters.GetMember, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}`,
      method: 'GET',
      params: {
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
        organization_fields: parameters.organizationFields || parameters.organization?.fields,
        organization_paid_account: parameters.organizationPaidAccount || parameters.organization?.paidAccount,
        organizationsInvited: parameters.organizationsInvited,
        organizationsInvited_fields: parameters.organizationsInvitedFields,
        paid_account: parameters.paidAccount,
        savedSearches: parameters.savedSearches,
        tokens: parameters.tokens,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMember' });
  }

  /**
   * Update a Member */
  async updateMember<T = unknown>(parameters: Parameters.UpdateMember, callback: Callback<T>): Promise<void>;
  /**
   * Update a Member */
  async updateMember<T = unknown>(parameters: Parameters.UpdateMember, callback?: never): Promise<T>;
  async updateMember<T = unknown>(parameters: Parameters.UpdateMember, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}`,
      method: 'PUT',
      params: {
        fullName: parameters.fullName,
        initials: parameters.initials,
        username: parameters.username,
        bio: parameters.bio,
        avatarSource: parameters.avatarSource,
        'prefs/colorBlind': parameters.colorBlind || parameters.preferences?.colorBlind,
        'prefs/locale': parameters.locale || parameters.preferences?.locale,
        'prefs/minutesBetweenSummaries': parameters.minutesBetweenSummaries || parameters.preferences?.minutesBetweenSummaries,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateMember' });
  }

  /**
   * Get a particular property of a member */
  async getMemberField<T = unknown>(parameters: Parameters.GetMemberField, callback: Callback<T>): Promise<void>;
  /**
   * Get a particular property of a member */
  async getMemberField<T = unknown>(parameters: Parameters.GetMemberField, callback?: never): Promise<T>;
  async getMemberField<T = unknown>(parameters: Parameters.GetMemberField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/${parameters.field}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberField' });
  }

  /**
   * List the actions for a member */
  async getMemberActions<T = Array<Models.Member>>(parameters: Parameters.GetMemberActions, callback: Callback<T>): Promise<void>;
  /**
   * List the actions for a member */
  async getMemberActions<T = Array<Models.Member>>(parameters: Parameters.GetMemberActions, callback?: never): Promise<T>;
  async getMemberActions<T = Array<Models.Member>>(parameters: Parameters.GetMemberActions, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/actions`,
      method: 'GET',
      params: {
        filter: parameters.filter,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberActions' });
  }

  /**
   * Get a member's custom board backgrounds */
  async getMemberBoardBackgrounds<T = Array<Models.BoardBackground>>(parameters: Parameters.GetMemberBoardBackgrounds, callback: Callback<T>): Promise<void>;
  /**
   * Get a member's custom board backgrounds */
  async getMemberBoardBackgrounds<T = Array<Models.BoardBackground>>(parameters: Parameters.GetMemberBoardBackgrounds, callback?: never): Promise<T>;
  async getMemberBoardBackgrounds<T = Array<Models.BoardBackground>>(parameters: Parameters.GetMemberBoardBackgrounds, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/boardBackgrounds`,
      method: 'GET',
      params: {
        filter: parameters.filter,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberBoardBackgrounds' });
  }

  /**
   * Upload a new boardBackground */
  async uploadMemberBoardBackground<T = Array<Models.BoardBackground>>(parameters: Parameters.UploadMemberBoardBackground, callback: Callback<T>): Promise<void>;
  /**
   * Upload a new boardBackground */
  async uploadMemberBoardBackground<T = Array<Models.BoardBackground>>(parameters: Parameters.UploadMemberBoardBackground, callback?: never): Promise<T>;
  async uploadMemberBoardBackground<T = Array<Models.BoardBackground>>(parameters: Parameters.UploadMemberBoardBackground, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/boardBackgrounds`,
      method: 'POST',
      params: {
        file: parameters.file,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'uploadMemberBoardBackground' });
  }

  /**
   * Get a member's board background */
  async getMemberBoardBackground<T = Models.BoardBackground>(parameters: Parameters.GetMemberBoardBackground, callback: Callback<T>): Promise<void>;
  /**
   * Get a member's board background */
  async getMemberBoardBackground<T = Models.BoardBackground>(parameters: Parameters.GetMemberBoardBackground, callback?: never): Promise<T>;
  async getMemberBoardBackground<T = Models.BoardBackground>(parameters: Parameters.GetMemberBoardBackground, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/boardBackgrounds/${parameters.idBackground}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberBoardBackground' });
  }

  /**
   * Update a board background */
  async updateBoardBackground<T = Models.BoardBackground>(parameters: Parameters.UpdateBoardBackground, callback: Callback<T>): Promise<void>;
  /**
   * Update a board background */
  async updateBoardBackground<T = Models.BoardBackground>(parameters: Parameters.UpdateBoardBackground, callback?: never): Promise<T>;
  async updateBoardBackground<T = Models.BoardBackground>(parameters: Parameters.UpdateBoardBackground, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/boardBackgrounds/${parameters.idBackground}`,
      method: 'PUT',
      params: {
        brightness: parameters.brightness,
        tile: parameters.tile,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateBoardBackground' });
  }

  /**
   * Delete a board background */
  async deleteMemberBoardBackground<T = unknown>(parameters: Parameters.DeleteMemberBoardBackgroud, callback: Callback<T>): Promise<void>;
  /**
   * Delete a board background */
  async deleteMemberBoardBackground<T = unknown>(parameters: Parameters.DeleteMemberBoardBackgroud, callback?: never): Promise<T>;
  async deleteMemberBoardBackground<T = unknown>(parameters: Parameters.DeleteMemberBoardBackgroud, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/boardBackgrounds/${parameters.idBackground}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteMemberBoardBackground' });
  }

  /**
   * List a member's board stars */
  async getMemberBoardStars<T = unknown>(parameters: Parameters.GetMemberBoardStars, callback: Callback<T>): Promise<void>;
  /**
   * List a member's board stars */
  async getMemberBoardStars<T = unknown>(parameters: Parameters.GetMemberBoardStars, callback?: never): Promise<T>;
  async getMemberBoardStars<T = unknown>(parameters: Parameters.GetMemberBoardStars, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/boardStars`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberBoardStars' });
  }

  /**
   * Star a new board on behalf of a Member */
  async starMemberBoard<T = Array<Models.BoardStars>>(parameters: Parameters.StarMemberBoard, callback: Callback<T>): Promise<void>;
  /**
   * Star a new board on behalf of a Member */
  async starMemberBoard<T = Array<Models.BoardStars>>(parameters: Parameters.StarMemberBoard, callback?: never): Promise<T>;
  async starMemberBoard<T = Array<Models.BoardStars>>(parameters: Parameters.StarMemberBoard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/boardStars`,
      method: 'POST',
      params: {
        idBoard: parameters.idBoard,
        pos: parameters.pos,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'starMemberBoard' });
  }

  /**
   * Get a specific boardStar */
  async getMemberBoardStar<T = Models.BoardStars>(parameters: Parameters.GetMemberBoardStar, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific boardStar */
  async getMemberBoardStar<T = Models.BoardStars>(parameters: Parameters.GetMemberBoardStar, callback?: never): Promise<T>;
  async getMemberBoardStar<T = Models.BoardStars>(parameters: Parameters.GetMemberBoardStar, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/boardStars/${parameters.idStar}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberBoardStar' });
  }

  /**
   * Update the position of a starred board */
  async updateMemberBoardStar<T = unknown>(parameters: Parameters.UpdateMemberBoardStar, callback: Callback<T>): Promise<void>;
  /**
   * Update the position of a starred board */
  async updateMemberBoardStar<T = unknown>(parameters: Parameters.UpdateMemberBoardStar, callback?: never): Promise<T>;
  async updateMemberBoardStar<T = unknown>(parameters: Parameters.UpdateMemberBoardStar, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/boardStars/${parameters.idStar}`,
      method: 'PUT',
      params: {
        pos: parameters.pos,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateMemberBoardStar' });
  }

  /**
   * Unstar a board */
  async unstarMemberBoard<T = unknown>(parameters: Parameters.UnstarMemberBoard, callback: Callback<T>): Promise<void>;
  /**
   * Unstar a board */
  async unstarMemberBoard<T = unknown>(parameters: Parameters.UnstarMemberBoard, callback?: never): Promise<T>;
  async unstarMemberBoard<T = unknown>(parameters: Parameters.UnstarMemberBoard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/boardStars/${parameters.idStar}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'unstarMemberBoard' });
  }

  /**
   * Lists the boards that the user is a member of. */
  async getMemberBoards<T = Models.Board[]>(parameters: Parameters.GetMemberBoards, callback: Callback<T>): Promise<void>;
  /**
   * Lists the boards that the user is a member of. */
  async getMemberBoards<T = Models.Board[]>(parameters: Parameters.GetMemberBoards, callback?: never): Promise<T>;
  async getMemberBoards<T = Models.Board[]>(parameters: Parameters.GetMemberBoards, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/boards`,
      method: 'GET',
      params: {
        filter: parameters.filter,
        fields: parameters.fields,
        lists: parameters.lists,
        organization: parameters.organization,
        organization_fields: parameters.organizationFields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberBoards' });
  }

  /**
   * Get the boards the member has been invited to */
  async getMemberBoardsInvited<T = Array<Models.Board>>(parameters: Parameters.GetMemberBoardsInvited, callback: Callback<T>): Promise<void>;
  /**
   * Get the boards the member has been invited to */
  async getMemberBoardsInvited<T = Array<Models.Board>>(parameters: Parameters.GetMemberBoardsInvited, callback?: never): Promise<T>;
  async getMemberBoardsInvited<T = Array<Models.Board>>(parameters: Parameters.GetMemberBoardsInvited, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/boardsInvited`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberBoardsInvited' });
  }

  /**
   * Gets the cards a member is on */
  async getMemberCards<T = Array<Models.Card>>(parameters: Parameters.GetMemberCards, callback: Callback<T>): Promise<void>;
  /**
   * Gets the cards a member is on */
  async getMemberCards<T = Array<Models.Card>>(parameters: Parameters.GetMemberCards, callback?: never): Promise<T>;
  async getMemberCards<T = Array<Models.Card>>(parameters: Parameters.GetMemberCards, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/cards`,
      method: 'GET',
      params: {
        filter: parameters.filter,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberCards' });
  }

  /**
   * Get a member's custom board backgrounds */
  async getMemberCustomBoardBackgrounds<T = Array<Models.BoardBackground>>(parameters: Parameters.GetMemberCustomBoardBackgrounds, callback: Callback<T>): Promise<void>;
  /**
   * Get a member's custom board backgrounds */
  async getMemberCustomBoardBackgrounds<T = Array<Models.BoardBackground>>(parameters: Parameters.GetMemberCustomBoardBackgrounds, callback?: never): Promise<T>;
  async getMemberCustomBoardBackgrounds<T = Array<Models.BoardBackground>>(parameters: Parameters.GetMemberCustomBoardBackgrounds, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/customBoardBackgrounds`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberCustomBoardBackgrounds' });
  }

  /**
   * Upload a new custom board background */
  async uploadMemberCustomBoardBackground<T = Models.BoardBackground>(parameters: Parameters.UploadMemberCustomBoardBackground, callback: Callback<T>): Promise<void>;
  /**
   * Upload a new custom board background */
  async uploadMemberCustomBoardBackground<T = Models.BoardBackground>(parameters: Parameters.UploadMemberCustomBoardBackground, callback?: never): Promise<T>;
  async uploadMemberCustomBoardBackground<T = Models.BoardBackground>(parameters: Parameters.UploadMemberCustomBoardBackground, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/customBoardBackgrounds`,
      method: 'POST',
      params: {
        file: parameters.file,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'uploadMemberCustomBoardBackground' });
  }

  /**
   * Get a specific custom board background */
  async getMemberCustomBoardBackground<T = Models.BoardBackground>(parameters: Parameters.GetMemberCustomBoardBackground, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific custom board background */
  async getMemberCustomBoardBackground<T = Models.BoardBackground>(parameters: Parameters.GetMemberCustomBoardBackground, callback?: never): Promise<T>;
  async getMemberCustomBoardBackground<T = Models.BoardBackground>(parameters: Parameters.GetMemberCustomBoardBackground, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/customBoardBackgrounds/${parameters.idBackground}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberCustomBoardBackground' });
  }

  /**
   * Update a specific custom board background */
  async updateMemberCustomBoardBackground<T = Models.BoardBackground>(parameters: Parameters.UpdateMemberCustomBoardBackground, callback: Callback<T>): Promise<void>;
  /**
   * Update a specific custom board background */
  async updateMemberCustomBoardBackground<T = Models.BoardBackground>(parameters: Parameters.UpdateMemberCustomBoardBackground, callback?: never): Promise<T>;
  async updateMemberCustomBoardBackground<T = Models.BoardBackground>(parameters: Parameters.UpdateMemberCustomBoardBackground, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/customBoardBackgrounds/${parameters.idBackground}`,
      method: 'PUT',
      params: {
        brightness: parameters.brightness,
        tile: parameters.tile,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateMemberCustomBoardBackground' });
  }

  /**
   * Delete a specific custom board background */
  async deleteMemberCustomBoardBackground<T = unknown>(parameters: Parameters.DeleteMemberCustomBoardBackground, callback: Callback<T>): Promise<void>;
  /**
   * Delete a specific custom board background */
  async deleteMemberCustomBoardBackground<T = unknown>(parameters: Parameters.DeleteMemberCustomBoardBackground, callback?: never): Promise<T>;
  async deleteMemberCustomBoardBackground<T = unknown>(parameters: Parameters.DeleteMemberCustomBoardBackground, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/customBoardBackgrounds/${parameters.idBackground}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteMemberCustomBoardBackground' });
  }

  /**
   * Get a Member's uploaded custom Emojis */
  async getMemberCustomEmojis<T = Array<Models.CustomEmoji>>(parameters: Parameters.GetMemberCustomEmojis, callback: Callback<T>): Promise<void>;
  /**
   * Get a Member's uploaded custom Emojis */
  async getMemberCustomEmojis<T = Array<Models.CustomEmoji>>(parameters: Parameters.GetMemberCustomEmojis, callback?: never): Promise<T>;
  async getMemberCustomEmojis<T = Array<Models.CustomEmoji>>(parameters: Parameters.GetMemberCustomEmojis, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/customEmoji`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberCustomEmojis' });
  }

  /**
   * Create a new custom Emoji */
  async createMemberCustomEmoji<T = Models.CustomEmoji>(parameters: Parameters.CreateMemberCustomEmoji, callback: Callback<T>): Promise<void>;
  /**
   * Create a new custom Emoji */
  async createMemberCustomEmoji<T = Models.CustomEmoji>(parameters: Parameters.CreateMemberCustomEmoji, callback?: never): Promise<T>;
  async createMemberCustomEmoji<T = Models.CustomEmoji>(parameters: Parameters.CreateMemberCustomEmoji, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/customEmoji`,
      method: 'POST',
      params: {
        file: parameters.file,
        name: parameters.name,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'createMemberCustomEmoji' });
  }

  /**
   * Get a Member's custom Emoji */
  async getMemberCustomEmoji<T = Models.CustomEmoji>(parameters: Parameters.GetMemberCustomEmoji, callback: Callback<T>): Promise<void>;
  /**
   * Get a Member's custom Emoji */
  async getMemberCustomEmoji<T = Models.CustomEmoji>(parameters: Parameters.GetMemberCustomEmoji, callback?: never): Promise<T>;
  async getMemberCustomEmoji<T = Models.CustomEmoji>(parameters: Parameters.GetMemberCustomEmoji, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/customEmoji/${parameters.idEmoji}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberCustomEmoji' });
  }

  /**
   * Get a Member's uploaded stickers */
  async getMemberCustomStickers<T = Array<Models.CustomSticker>>(parameters: Parameters.GetMemberCustomStickers, callback: Callback<T>): Promise<void>;
  /**
   * Get a Member's uploaded stickers */
  async getMemberCustomStickers<T = Array<Models.CustomSticker>>(parameters: Parameters.GetMemberCustomStickers, callback?: never): Promise<T>;
  async getMemberCustomStickers<T = Array<Models.CustomSticker>>(parameters: Parameters.GetMemberCustomStickers, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/customStickers`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberCustomStickers' });
  }

  /**
   * Upload a new custom sticker */
  async uploadMemberCustomSticker<T = Models.CustomSticker>(parameters: Parameters.UploadMemberCustomSticker, callback: Callback<T>): Promise<void>;
  /**
   * Upload a new custom sticker */
  async uploadMemberCustomSticker<T = Models.CustomSticker>(parameters: Parameters.UploadMemberCustomSticker, callback?: never): Promise<T>;
  async uploadMemberCustomSticker<T = Models.CustomSticker>(parameters: Parameters.UploadMemberCustomSticker, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/customStickers`,
      method: 'POST',
      params: {
        file: parameters.file,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'uploadMemberCustomSticker' });
  }

  /**
   * Get a Member's custom Sticker */
  async getMemberCustomSticker<T = Models.CustomSticker>(parameters: Parameters.GetMemberCustomSticker, callback: Callback<T>): Promise<void>;
  /**
   * Get a Member's custom Sticker */
  async getMemberCustomSticker<T = Models.CustomSticker>(parameters: Parameters.GetMemberCustomSticker, callback?: never): Promise<T>;
  async getMemberCustomSticker<T = Models.CustomSticker>(parameters: Parameters.GetMemberCustomSticker, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/customStickers/${parameters.idSticker}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberCustomSticker' });
  }

  /**
   * Delete a Member's custom Sticker */
  async deleteMemberCustomSticker<T = unknown>(parameters: Parameters.DeleteMemberCustomSticker, callback: Callback<T>): Promise<void>;
  /**
   * Delete a Member's custom Sticker */
  async deleteMemberCustomSticker<T = unknown>(parameters: Parameters.DeleteMemberCustomSticker, callback?: never): Promise<T>;
  async deleteMemberCustomSticker<T = unknown>(parameters: Parameters.DeleteMemberCustomSticker, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/customStickers/${parameters.idSticker}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteMemberCustomSticker' });
  }

  /**
   * Get a member's notifications */
  async getMemberNotifications<T = Array<Models.Notification>>(parameters: Parameters.GetMemberNotifications, callback: Callback<T>): Promise<void>;
  /**
   * Get a member's notifications */
  async getMemberNotifications<T = Array<Models.Notification>>(parameters: Parameters.GetMemberNotifications, callback?: never): Promise<T>;
  async getMemberNotifications<T = Array<Models.Notification>>(parameters: Parameters.GetMemberNotifications, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/notifications`,
      method: 'GET',
      params: {
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
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberNotifications' });
  }

  /**
   * Get a member's teams */
  async getMemberOrganizations<T = Models.Organization[]>(parameters: Parameters.GetMemberOrganizations, callback: Callback<T>): Promise<void>;
  /**
   * Get a member's teams */
  async getMemberOrganizations<T = Models.Organization[]>(parameters: Parameters.GetMemberOrganizations, callback?: never): Promise<T>;
  async getMemberOrganizations<T = Models.Organization[]>(parameters: Parameters.GetMemberOrganizations, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/organizations`,
      method: 'GET',
      params: {
        filter: parameters.filter,
        fields: parameters.fields,
        paid_account: parameters.paidAccount,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberOrganizations' });
  }

  /**
   * Get a member's teams they have been invited to */
  async getMemberOrganizationsInvited<T = Array<Models.Organization>>(parameters: Parameters.GetMemberOrganizationsInvited, callback: Callback<T>): Promise<void>;
  /**
   * Get a member's teams they have been invited to */
  async getMemberOrganizationsInvited<T = Array<Models.Organization>>(parameters: Parameters.GetMemberOrganizationsInvited, callback?: never): Promise<T>;
  async getMemberOrganizationsInvited<T = Array<Models.Organization>>(parameters: Parameters.GetMemberOrganizationsInvited, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/organizationsInvited`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberOrganizationsInvited' });
  }

  /**
   * List the saved searches of a Member */
  async getMemberSavedSearches<T = Array<Models.SavedSearch>>(parameters: Parameters.GetMemberSavedSearches, callback: Callback<T>): Promise<void>;
  /**
   * List the saved searches of a Member */
  async getMemberSavedSearches<T = Array<Models.SavedSearch>>(parameters: Parameters.GetMemberSavedSearches, callback?: never): Promise<T>;
  async getMemberSavedSearches<T = Array<Models.SavedSearch>>(parameters: Parameters.GetMemberSavedSearches, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/savedSearches`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberSavedSearches' });
  }

  /**
   * Create a saved search */
  async createMemberSavedSearch<T = Models.SavedSearch>(parameters: Parameters.CreateMemberSavedSearch, callback: Callback<T>): Promise<void>;
  /**
   * Create a saved search */
  async createMemberSavedSearch<T = Models.SavedSearch>(parameters: Parameters.CreateMemberSavedSearch, callback?: never): Promise<T>;
  async createMemberSavedSearch<T = Models.SavedSearch>(parameters: Parameters.CreateMemberSavedSearch, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/savedSearches`,
      method: 'POST',
      params: {
        name: parameters.name,
        query: parameters.query,
        pos: parameters.pos,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'createMemberSavedSearch' });
  }

  /**
   * Get a saved search */
  async getMemberSavedSearch<T = Models.SavedSearch>(parameters: Parameters.GetMemberSavedSearch, callback: Callback<T>): Promise<void>;
  /**
   * Get a saved search */
  async getMemberSavedSearch<T = Models.SavedSearch>(parameters: Parameters.GetMemberSavedSearch, callback?: never): Promise<T>;
  async getMemberSavedSearch<T = Models.SavedSearch>(parameters: Parameters.GetMemberSavedSearch, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/savedSearches/${parameters.idSearch}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberSavedSearch' });
  }

  /**
   * Update a saved search */
  async updateMemberSavedSearch<T = Models.SavedSearch>(parameters: Parameters.UpdateMemberSavedSerch, callback: Callback<T>): Promise<void>;
  /**
   * Update a saved search */
  async updateMemberSavedSearch<T = Models.SavedSearch>(parameters: Parameters.UpdateMemberSavedSerch, callback?: never): Promise<T>;
  async updateMemberSavedSearch<T = Models.SavedSearch>(parameters: Parameters.UpdateMemberSavedSerch, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/savedSearches/${parameters.idSearch}`,
      method: 'PUT',
      params: {
        name: parameters.name,
        query: parameters.query,
        pos: parameters.pos,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateMemberSavedSearch' });
  }

  /**
   * Delete a saved search */
  async deleteMemberSavedSearch<T = unknown>(parameters: Parameters.DeleteMemberSavedSearch, callback: Callback<T>): Promise<void>;
  /**
   * Delete a saved search */
  async deleteMemberSavedSearch<T = unknown>(parameters: Parameters.DeleteMemberSavedSearch, callback?: never): Promise<T>;
  async deleteMemberSavedSearch<T = unknown>(parameters: Parameters.DeleteMemberSavedSearch, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/savedSearches/${parameters.idSearch}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteMemberSavedSearch' });
  }

  /**
   * List a members app tokens */
  async getMemberTokens<T = Array<Models.Token>>(parameters: Parameters.GetMemberTokens, callback: Callback<T>): Promise<void>;
  /**
   * List a members app tokens */
  async getMemberTokens<T = Array<Models.Token>>(parameters: Parameters.GetMemberTokens, callback?: never): Promise<T>;
  async getMemberTokens<T = Array<Models.Token>>(parameters: Parameters.GetMemberTokens, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/tokens`,
      method: 'GET',
      params: {
        webhooks: parameters.webhooks,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getMemberTokens' });
  }

  /**
   * Create a new avatar for a member */
  async createMemberAvatar<T = unknown>(parameters: Parameters.CreateMemberAvatar, callback: Callback<T>): Promise<void>;
  /**
   * Create a new avatar for a member */
  async createMemberAvatar<T = unknown>(parameters: Parameters.CreateMemberAvatar, callback?: never): Promise<T>;
  async createMemberAvatar<T = unknown>(parameters: Parameters.CreateMemberAvatar, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/avatar`,
      method: 'POST',
      params: {
        file: parameters.file,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'createMemberAvatar' });
  }

  /**
   * Dismiss a message */
  async dismissMemberMessage<T = unknown>(parameters: Parameters.DismissMemberMessage, callback: Callback<T>): Promise<void>;
  /**
   * Dismiss a message */
  async dismissMemberMessage<T = unknown>(parameters: Parameters.DismissMemberMessage, callback?: never): Promise<T>;
  async dismissMemberMessage<T = unknown>(parameters: Parameters.DismissMemberMessage, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/members/${parameters.id}/oneTimeMessagesDismissed`,
      method: 'POST',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'dismissMemberMessage' });
  }
}
