import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Members {
  constructor(private client: Client) { }

  /**
   * Get a member */
  async getMembersId<T = any>(parameters: Parameters.GetMembersId, callback: Callback<T>): Promise<void>;
  /**
   * Get a member */
  async getMembersId<T = any>(parameters: Parameters.GetMembersId, callback?: undefined): Promise<T>;
  async getMembersId<T = any>(parameters: Parameters.GetMembersId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}`,
      method: 'GET',
      params: {
        actions: parameters.actions,
        boards: parameters.boards,
        boardBackgrounds: parameters.boardBackgrounds,
        boardsInvited: parameters.boardsInvited,
        boardsInvited_fields: parameters.boardsInvited_fields,
        boardStars: parameters.boardStars,
        cards: parameters.cards,
        customBoardBackgrounds: parameters.customBoardBackgrounds,
        customEmoji: parameters.customEmoji,
        customStickers: parameters.customStickers,
        fields: parameters.fields,
        notifications: parameters.notifications,
        organizations: parameters.organizations,
        organization_fields: parameters.organization_fields,
        organization_paid_account: parameters.organization_paid_account,
        organizationsInvited: parameters.organizationsInvited,
        organizationsInvited_fields: parameters.organizationsInvited_fields,
        paid_account: parameters.paid_account,
        savedSearches: parameters.savedSearches,
        tokens: parameters.tokens,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersId' });
  }

  /**
   * Update a Member */
  async putMembersId<T = any>(parameters: Parameters.PutMembersId, callback: Callback<T>): Promise<void>;
  /**
   * Update a Member */
  async putMembersId<T = any>(parameters: Parameters.PutMembersId, callback?: undefined): Promise<T>;
  async putMembersId<T = any>(parameters: Parameters.PutMembersId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}`,
      method: 'PUT',
      params: {
        fullName: parameters.fullName,
        initials: parameters.initials,
        username: parameters.username,
        bio: parameters.bio,
        avatarSource: parameters.avatarSource,
        'prefs/colorBlind': parameters.colorBlind,
        'prefs/locale': parameters.locale,
        'prefs/minutesBetweenSummaries': parameters.minutesBetweenSummaries,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putMembersId' });
  }

  /**
   * Get a particular property of a member */
  async getMembersIdField<T = any>(parameters: Parameters.GetMembersIdField, callback: Callback<T>): Promise<void>;
  /**
   * Get a particular property of a member */
  async getMembersIdField<T = any>(parameters: Parameters.GetMembersIdField, callback?: undefined): Promise<T>;
  async getMembersIdField<T = any>(parameters: Parameters.GetMembersIdField, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/${parameters.field}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdField' });
  }

  /**
   * List the actions for a member */
  async getMembersIdActions<T = any>(parameters: Parameters.GetMembersIdActions, callback: Callback<T>): Promise<void>;
  /**
   * List the actions for a member */
  async getMembersIdActions<T = any>(parameters: Parameters.GetMembersIdActions, callback?: undefined): Promise<T>;
  async getMembersIdActions<T = any>(parameters: Parameters.GetMembersIdActions, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/actions`,
      method: 'GET',
      params: {
        filter: parameters.filter,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdActions' });
  }

  /**
   * Get a member's custom board backgrounds */
  async getMembersIdBoardbackgrounds<T = any>(parameters: Parameters.GetMembersIdBoardbackgrounds, callback: Callback<T>): Promise<void>;
  /**
   * Get a member's custom board backgrounds */
  async getMembersIdBoardbackgrounds<T = any>(parameters: Parameters.GetMembersIdBoardbackgrounds, callback?: undefined): Promise<T>;
  async getMembersIdBoardbackgrounds<T = any>(parameters: Parameters.GetMembersIdBoardbackgrounds, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/boardBackgrounds`,
      method: 'GET',
      params: {
        filter: parameters.filter,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdBoardbackgrounds' });
  }

  /**
   * Upload a new boardBackground */
  async postMembersIdBoardbackgrounds1<T = any>(parameters: Parameters.PostMembersIdBoardbackgrounds1, callback: Callback<T>): Promise<void>;
  /**
   * Upload a new boardBackground */
  async postMembersIdBoardbackgrounds1<T = any>(parameters: Parameters.PostMembersIdBoardbackgrounds1, callback?: undefined): Promise<T>;
  async postMembersIdBoardbackgrounds1<T = any>(parameters: Parameters.PostMembersIdBoardbackgrounds1, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/boardBackgrounds`,
      method: 'POST',
      params: {
        file: parameters.file,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postMembersIdBoardbackgrounds1' });
  }

  /**
   * Get a member's board background */
  async getMembersIdBoardbackgroundsIdbackground<T = Models.BoardBackground>(parameters: Parameters.GetMembersIdBoardbackgroundsIdbackground, callback: Callback<T>): Promise<void>;
  /**
   * Get a member's board background */
  async getMembersIdBoardbackgroundsIdbackground<T = Models.BoardBackground>(parameters: Parameters.GetMembersIdBoardbackgroundsIdbackground, callback?: undefined): Promise<T>;
  async getMembersIdBoardbackgroundsIdbackground<T = Models.BoardBackground>(parameters: Parameters.GetMembersIdBoardbackgroundsIdbackground, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/boardBackgrounds/${parameters.idBackground}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdBoardbackgroundsIdbackground' });
  }

  /**
   * Update a board background */
  async putMembersIdBoardbackgroundsIdbackground<T = Models.BoardBackground>(parameters: Parameters.PutMembersIdBoardbackgroundsIdbackground, callback: Callback<T>): Promise<void>;
  /**
   * Update a board background */
  async putMembersIdBoardbackgroundsIdbackground<T = Models.BoardBackground>(parameters: Parameters.PutMembersIdBoardbackgroundsIdbackground, callback?: undefined): Promise<T>;
  async putMembersIdBoardbackgroundsIdbackground<T = Models.BoardBackground>(parameters: Parameters.PutMembersIdBoardbackgroundsIdbackground, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/boardBackgrounds/${parameters.idBackground}`,
      method: 'PUT',
      params: {
        brightness: parameters.brightness,
        tile: parameters.tile,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putMembersIdBoardbackgroundsIdbackground' });
  }

  /**
   * Delete a board background */
  async deleteMembersIdBoardbackgroundsIdbackground<T = any>(parameters: Parameters.DeleteMembersIdBoardbackgroundsIdbackground, callback: Callback<T>): Promise<void>;
  /**
   * Delete a board background */
  async deleteMembersIdBoardbackgroundsIdbackground<T = any>(parameters: Parameters.DeleteMembersIdBoardbackgroundsIdbackground, callback?: undefined): Promise<T>;
  async deleteMembersIdBoardbackgroundsIdbackground<T = any>(parameters: Parameters.DeleteMembersIdBoardbackgroundsIdbackground, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/boardBackgrounds/${parameters.idBackground}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteMembersIdBoardbackgroundsIdbackground' });
  }

  /**
   * List a member's board stars */
  async getMembersIdBoardstars<T = any>(parameters: Parameters.GetMembersIdBoardstars, callback: Callback<T>): Promise<void>;
  /**
   * List a member's board stars */
  async getMembersIdBoardstars<T = any>(parameters: Parameters.GetMembersIdBoardstars, callback?: undefined): Promise<T>;
  async getMembersIdBoardstars<T = any>(parameters: Parameters.GetMembersIdBoardstars, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/boardStars`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdBoardstars' });
  }

  /**
   * Star a new board on behalf of a Member */
  async postMembersIdBoardstars<T = any>(parameters: Parameters.PostMembersIdBoardstars, callback: Callback<T>): Promise<void>;
  /**
   * Star a new board on behalf of a Member */
  async postMembersIdBoardstars<T = any>(parameters: Parameters.PostMembersIdBoardstars, callback?: undefined): Promise<T>;
  async postMembersIdBoardstars<T = any>(parameters: Parameters.PostMembersIdBoardstars, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/boardStars`,
      method: 'POST',
      params: {
        idBoard: parameters.idBoard,
        pos: parameters.pos,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postMembersIdBoardstars' });
  }

  /**
   * Get a specific boardStar */
  async getMembersIdBoardstarsIdstar<T = Models.BoardStars>(parameters: Parameters.GetMembersIdBoardstarsIdstar, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific boardStar */
  async getMembersIdBoardstarsIdstar<T = Models.BoardStars>(parameters: Parameters.GetMembersIdBoardstarsIdstar, callback?: undefined): Promise<T>;
  async getMembersIdBoardstarsIdstar<T = Models.BoardStars>(parameters: Parameters.GetMembersIdBoardstarsIdstar, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/boardStars/${parameters.idStar}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdBoardstarsIdstar' });
  }

  /**
   * Update the position of a starred board */
  async putMembersIdBoardstarsIdstar<T = any>(parameters: Parameters.PutMembersIdBoardstarsIdstar, callback: Callback<T>): Promise<void>;
  /**
   * Update the position of a starred board */
  async putMembersIdBoardstarsIdstar<T = any>(parameters: Parameters.PutMembersIdBoardstarsIdstar, callback?: undefined): Promise<T>;
  async putMembersIdBoardstarsIdstar<T = any>(parameters: Parameters.PutMembersIdBoardstarsIdstar, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/boardStars/${parameters.idStar}`,
      method: 'PUT',
      params: {
        pos: parameters.pos,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putMembersIdBoardstarsIdstar' });
  }

  /**
   * Unstar a board */
  async deleteMembersIdBoardstarsIdstar<T = any>(parameters: Parameters.DeleteMembersIdBoardstarsIdstar, callback: Callback<T>): Promise<void>;
  /**
   * Unstar a board */
  async deleteMembersIdBoardstarsIdstar<T = any>(parameters: Parameters.DeleteMembersIdBoardstarsIdstar, callback?: undefined): Promise<T>;
  async deleteMembersIdBoardstarsIdstar<T = any>(parameters: Parameters.DeleteMembersIdBoardstarsIdstar, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/boardStars/${parameters.idStar}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteMembersIdBoardstarsIdstar' });
  }

  /**
   * Lists the boards that the user is a member of. */
  async getMembersIdBoards<T = any>(parameters: Parameters.GetMembersIdBoards, callback: Callback<T>): Promise<void>;
  /**
   * Lists the boards that the user is a member of. */
  async getMembersIdBoards<T = any>(parameters: Parameters.GetMembersIdBoards, callback?: undefined): Promise<T>;
  async getMembersIdBoards<T = any>(parameters: Parameters.GetMembersIdBoards, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/boards`,
      method: 'GET',
      params: {
        filter: parameters.filter,
        fields: parameters.fields,
        lists: parameters.lists,
        organization: parameters.organization,
        organization_fields: parameters.organization_fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdBoards' });
  }

  /**
   * Get the boards the member has been invited to */
  async getMembersIdBoardsinvited<T = any>(parameters: Parameters.GetMembersIdBoardsinvited, callback: Callback<T>): Promise<void>;
  /**
   * Get the boards the member has been invited to */
  async getMembersIdBoardsinvited<T = any>(parameters: Parameters.GetMembersIdBoardsinvited, callback?: undefined): Promise<T>;
  async getMembersIdBoardsinvited<T = any>(parameters: Parameters.GetMembersIdBoardsinvited, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/boardsInvited`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdBoardsinvited' });
  }

  /**
   * Gets the cards a member is on */
  async getMembersIdCards<T = any>(parameters: Parameters.GetMembersIdCards, callback: Callback<T>): Promise<void>;
  /**
   * Gets the cards a member is on */
  async getMembersIdCards<T = any>(parameters: Parameters.GetMembersIdCards, callback?: undefined): Promise<T>;
  async getMembersIdCards<T = any>(parameters: Parameters.GetMembersIdCards, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/cards`,
      method: 'GET',
      params: {
        filter: parameters.filter,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdCards' });
  }

  /**
   * Get a member's custom board backgrounds */
  async getMembersIdCustomboardbackgrounds<T = any>(parameters: Parameters.GetMembersIdCustomboardbackgrounds, callback: Callback<T>): Promise<void>;
  /**
   * Get a member's custom board backgrounds */
  async getMembersIdCustomboardbackgrounds<T = any>(parameters: Parameters.GetMembersIdCustomboardbackgrounds, callback?: undefined): Promise<T>;
  async getMembersIdCustomboardbackgrounds<T = any>(parameters: Parameters.GetMembersIdCustomboardbackgrounds, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/customBoardBackgrounds`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdCustomboardbackgrounds' });
  }

  /**
   * Upload a new custom board background */
  async membersidcustomboardbackgrounds1<T = Models.BoardBackground>(parameters: Parameters.Membersidcustomboardbackgrounds1, callback: Callback<T>): Promise<void>;
  /**
   * Upload a new custom board background */
  async membersidcustomboardbackgrounds1<T = Models.BoardBackground>(parameters: Parameters.Membersidcustomboardbackgrounds1, callback?: undefined): Promise<T>;
  async membersidcustomboardbackgrounds1<T = Models.BoardBackground>(parameters: Parameters.Membersidcustomboardbackgrounds1, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/customBoardBackgrounds`,
      method: 'POST',
      params: {
        file: parameters.file,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'membersidcustomboardbackgrounds1' });
  }

  /**
   * Get a specific custom board background */
  async getMembersIdCustomboardbackgroundsIdbackground<T = Models.BoardBackground>(parameters: Parameters.GetMembersIdCustomboardbackgroundsIdbackground, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific custom board background */
  async getMembersIdCustomboardbackgroundsIdbackground<T = Models.BoardBackground>(parameters: Parameters.GetMembersIdCustomboardbackgroundsIdbackground, callback?: undefined): Promise<T>;
  async getMembersIdCustomboardbackgroundsIdbackground<T = Models.BoardBackground>(parameters: Parameters.GetMembersIdCustomboardbackgroundsIdbackground, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/customBoardBackgrounds/${parameters.idBackground}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdCustomboardbackgroundsIdbackground' });
  }

  /**
   * Update a specific custom board background */
  async putMembersIdCustomboardbackgroundsIdbackground<T = Models.BoardBackground>(parameters: Parameters.PutMembersIdCustomboardbackgroundsIdbackground, callback: Callback<T>): Promise<void>;
  /**
   * Update a specific custom board background */
  async putMembersIdCustomboardbackgroundsIdbackground<T = Models.BoardBackground>(parameters: Parameters.PutMembersIdCustomboardbackgroundsIdbackground, callback?: undefined): Promise<T>;
  async putMembersIdCustomboardbackgroundsIdbackground<T = Models.BoardBackground>(parameters: Parameters.PutMembersIdCustomboardbackgroundsIdbackground, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/customBoardBackgrounds/${parameters.idBackground}`,
      method: 'PUT',
      params: {
        brightness: parameters.brightness,
        tile: parameters.tile,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putMembersIdCustomboardbackgroundsIdbackground' });
  }

  /**
   * Delete a specific custom board background */
  async deleteMembersIdCustomboardbackgroundsIdbackground<T = any>(parameters: Parameters.DeleteMembersIdCustomboardbackgroundsIdbackground, callback: Callback<T>): Promise<void>;
  /**
   * Delete a specific custom board background */
  async deleteMembersIdCustomboardbackgroundsIdbackground<T = any>(parameters: Parameters.DeleteMembersIdCustomboardbackgroundsIdbackground, callback?: undefined): Promise<T>;
  async deleteMembersIdCustomboardbackgroundsIdbackground<T = any>(parameters: Parameters.DeleteMembersIdCustomboardbackgroundsIdbackground, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/customBoardBackgrounds/${parameters.idBackground}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteMembersIdCustomboardbackgroundsIdbackground' });
  }

  /**
   * Get a Member's uploaded custom Emojis */
  async getMembersIdCustomemoji<T = any>(parameters: Parameters.GetMembersIdCustomemoji, callback: Callback<T>): Promise<void>;
  /**
   * Get a Member's uploaded custom Emojis */
  async getMembersIdCustomemoji<T = any>(parameters: Parameters.GetMembersIdCustomemoji, callback?: undefined): Promise<T>;
  async getMembersIdCustomemoji<T = any>(parameters: Parameters.GetMembersIdCustomemoji, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/customEmoji`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdCustomemoji' });
  }

  /**
   * Create a new custom Emoji */
  async postMembersIdCustomemoji<T = Models.CustomEmoji>(parameters: Parameters.PostMembersIdCustomemoji, callback: Callback<T>): Promise<void>;
  /**
   * Create a new custom Emoji */
  async postMembersIdCustomemoji<T = Models.CustomEmoji>(parameters: Parameters.PostMembersIdCustomemoji, callback?: undefined): Promise<T>;
  async postMembersIdCustomemoji<T = Models.CustomEmoji>(parameters: Parameters.PostMembersIdCustomemoji, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/customEmoji`,
      method: 'POST',
      params: {
        file: parameters.file,
        name: parameters.name,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postMembersIdCustomemoji' });
  }

  /**
   * Get a Member's custom Emoji */
  async membersidcustomemojiidemoji<T = Models.CustomEmoji>(parameters: Parameters.Membersidcustomemojiidemoji, callback: Callback<T>): Promise<void>;
  /**
   * Get a Member's custom Emoji */
  async membersidcustomemojiidemoji<T = Models.CustomEmoji>(parameters: Parameters.Membersidcustomemojiidemoji, callback?: undefined): Promise<T>;
  async membersidcustomemojiidemoji<T = Models.CustomEmoji>(parameters: Parameters.Membersidcustomemojiidemoji, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/customEmoji/${parameters.idEmoji}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'membersidcustomemojiidemoji' });
  }

  /**
   * Get a Member's uploaded stickers */
  async getMembersIdCustomstickers<T = any>(parameters: Parameters.GetMembersIdCustomstickers, callback: Callback<T>): Promise<void>;
  /**
   * Get a Member's uploaded stickers */
  async getMembersIdCustomstickers<T = any>(parameters: Parameters.GetMembersIdCustomstickers, callback?: undefined): Promise<T>;
  async getMembersIdCustomstickers<T = any>(parameters: Parameters.GetMembersIdCustomstickers, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/customStickers`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdCustomstickers' });
  }

  /**
   * Upload a new custom sticker */
  async postMembersIdCustomstickers<T = Models.CustomSticker>(parameters: Parameters.PostMembersIdCustomstickers, callback: Callback<T>): Promise<void>;
  /**
   * Upload a new custom sticker */
  async postMembersIdCustomstickers<T = Models.CustomSticker>(parameters: Parameters.PostMembersIdCustomstickers, callback?: undefined): Promise<T>;
  async postMembersIdCustomstickers<T = Models.CustomSticker>(parameters: Parameters.PostMembersIdCustomstickers, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/customStickers`,
      method: 'POST',
      params: {
        file: parameters.file,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postMembersIdCustomstickers' });
  }

  /**
   * Get a Member's custom Sticker */
  async getMembersIdCustomstickersIdsticker<T = Models.CustomSticker>(parameters: Parameters.GetMembersIdCustomstickersIdsticker, callback: Callback<T>): Promise<void>;
  /**
   * Get a Member's custom Sticker */
  async getMembersIdCustomstickersIdsticker<T = Models.CustomSticker>(parameters: Parameters.GetMembersIdCustomstickersIdsticker, callback?: undefined): Promise<T>;
  async getMembersIdCustomstickersIdsticker<T = Models.CustomSticker>(parameters: Parameters.GetMembersIdCustomstickersIdsticker, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/customStickers/${parameters.idSticker}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdCustomstickersIdsticker' });
  }

  /**
   * Delete a Member's custom Sticker */
  async deleteMembersIdCustomstickersIdsticker<T = any>(parameters: Parameters.DeleteMembersIdCustomstickersIdsticker, callback: Callback<T>): Promise<void>;
  /**
   * Delete a Member's custom Sticker */
  async deleteMembersIdCustomstickersIdsticker<T = any>(parameters: Parameters.DeleteMembersIdCustomstickersIdsticker, callback?: undefined): Promise<T>;
  async deleteMembersIdCustomstickersIdsticker<T = any>(parameters: Parameters.DeleteMembersIdCustomstickersIdsticker, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/customStickers/${parameters.idSticker}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteMembersIdCustomstickersIdsticker' });
  }

  /**
   * Get a member's notifications */
  async getMembersIdNotifications<T = any>(parameters: Parameters.GetMembersIdNotifications, callback: Callback<T>): Promise<void>;
  /**
   * Get a member's notifications */
  async getMembersIdNotifications<T = any>(parameters: Parameters.GetMembersIdNotifications, callback?: undefined): Promise<T>;
  async getMembersIdNotifications<T = any>(parameters: Parameters.GetMembersIdNotifications, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/notifications`,
      method: 'GET',
      params: {
        entities: parameters.entities,
        display: parameters.display,
        filter: parameters.filter,
        read_filter: parameters.read_filter,
        fields: parameters.fields,
        limit: parameters.limit,
        page: parameters.page,
        before: parameters.before,
        since: parameters.since,
        memberCreator: parameters.memberCreator,
        memberCreator_fields: parameters.memberCreator_fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdNotifications' });
  }

  /**
   * Get a member's teams */
  async getMembersIdOrganizations<T = any>(parameters: Parameters.GetMembersIdOrganizations, callback: Callback<T>): Promise<void>;
  /**
   * Get a member's teams */
  async getMembersIdOrganizations<T = any>(parameters: Parameters.GetMembersIdOrganizations, callback?: undefined): Promise<T>;
  async getMembersIdOrganizations<T = any>(parameters: Parameters.GetMembersIdOrganizations, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/organizations`,
      method: 'GET',
      params: {
        filter: parameters.filter,
        fields: parameters.fields,
        paid_account: parameters.paid_account,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdOrganizations' });
  }

  /**
   * Get a member's teams they have been invited to */
  async getMembersIdOrganizationsinvited<T = any>(parameters: Parameters.GetMembersIdOrganizationsinvited, callback: Callback<T>): Promise<void>;
  /**
   * Get a member's teams they have been invited to */
  async getMembersIdOrganizationsinvited<T = any>(parameters: Parameters.GetMembersIdOrganizationsinvited, callback?: undefined): Promise<T>;
  async getMembersIdOrganizationsinvited<T = any>(parameters: Parameters.GetMembersIdOrganizationsinvited, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/organizationsInvited`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdOrganizationsinvited' });
  }

  /**
   * List the saved searches of a Member */
  async getMembersIdSavedsearches<T = any>(parameters: Parameters.GetMembersIdSavedsearches, callback: Callback<T>): Promise<void>;
  /**
   * List the saved searches of a Member */
  async getMembersIdSavedsearches<T = any>(parameters: Parameters.GetMembersIdSavedsearches, callback?: undefined): Promise<T>;
  async getMembersIdSavedsearches<T = any>(parameters: Parameters.GetMembersIdSavedsearches, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/savedSearches`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdSavedsearches' });
  }

  /**
   * Create a saved search */
  async postMembersIdSavedsearches<T = Models.SavedSearch>(parameters: Parameters.PostMembersIdSavedsearches, callback: Callback<T>): Promise<void>;
  /**
   * Create a saved search */
  async postMembersIdSavedsearches<T = Models.SavedSearch>(parameters: Parameters.PostMembersIdSavedsearches, callback?: undefined): Promise<T>;
  async postMembersIdSavedsearches<T = Models.SavedSearch>(parameters: Parameters.PostMembersIdSavedsearches, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/savedSearches`,
      method: 'POST',
      params: {
        name: parameters.name,
        query: parameters.query,
        pos: parameters.pos,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postMembersIdSavedsearches' });
  }

  /**
   * Get a saved search */
  async getMembersIdSavedsearchesIdsearch<T = Models.SavedSearch>(parameters: Parameters.GetMembersIdSavedsearchesIdsearch, callback: Callback<T>): Promise<void>;
  /**
   * Get a saved search */
  async getMembersIdSavedsearchesIdsearch<T = Models.SavedSearch>(parameters: Parameters.GetMembersIdSavedsearchesIdsearch, callback?: undefined): Promise<T>;
  async getMembersIdSavedsearchesIdsearch<T = Models.SavedSearch>(parameters: Parameters.GetMembersIdSavedsearchesIdsearch, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/savedSearches/${parameters.idSearch}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdSavedsearchesIdsearch' });
  }

  /**
   * Update a saved search */
  async putMembersIdSavedsearchesIdsearch<T = Models.SavedSearch>(parameters: Parameters.PutMembersIdSavedsearchesIdsearch, callback: Callback<T>): Promise<void>;
  /**
   * Update a saved search */
  async putMembersIdSavedsearchesIdsearch<T = Models.SavedSearch>(parameters: Parameters.PutMembersIdSavedsearchesIdsearch, callback?: undefined): Promise<T>;
  async putMembersIdSavedsearchesIdsearch<T = Models.SavedSearch>(parameters: Parameters.PutMembersIdSavedsearchesIdsearch, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/savedSearches/${parameters.idSearch}`,
      method: 'PUT',
      params: {
        name: parameters.name,
        query: parameters.query,
        pos: parameters.pos,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putMembersIdSavedsearchesIdsearch' });
  }

  /**
   * Delete a saved search */
  async deleteMembersIdSavedsearchesIdsearch<T = any>(parameters: Parameters.DeleteMembersIdSavedsearchesIdsearch, callback: Callback<T>): Promise<void>;
  /**
   * Delete a saved search */
  async deleteMembersIdSavedsearchesIdsearch<T = any>(parameters: Parameters.DeleteMembersIdSavedsearchesIdsearch, callback?: undefined): Promise<T>;
  async deleteMembersIdSavedsearchesIdsearch<T = any>(parameters: Parameters.DeleteMembersIdSavedsearchesIdsearch, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/savedSearches/${parameters.idSearch}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteMembersIdSavedsearchesIdsearch' });
  }

  /**
   * List a members app tokens */
  async getMembersIdTokens<T = any>(parameters: Parameters.GetMembersIdTokens, callback: Callback<T>): Promise<void>;
  /**
   * List a members app tokens */
  async getMembersIdTokens<T = any>(parameters: Parameters.GetMembersIdTokens, callback?: undefined): Promise<T>;
  async getMembersIdTokens<T = any>(parameters: Parameters.GetMembersIdTokens, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/tokens`,
      method: 'GET',
      params: {
        webhooks: parameters.webhooks,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getMembersIdTokens' });
  }

  /**
   * Create a new avatar for a member */
  async membersidavatar<T = any>(parameters: Parameters.Membersidavatar, callback: Callback<T>): Promise<void>;
  /**
   * Create a new avatar for a member */
  async membersidavatar<T = any>(parameters: Parameters.Membersidavatar, callback?: undefined): Promise<T>;
  async membersidavatar<T = any>(parameters: Parameters.Membersidavatar, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/avatar`,
      method: 'POST',
      params: {
        file: parameters.file,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'membersidavatar' });
  }

  /**
   * Dismiss a message */
  async postMembersIdOnetimemessagesdismissed<T = any>(parameters: Parameters.PostMembersIdOnetimemessagesdismissed, callback: Callback<T>): Promise<void>;
  /**
   * Dismiss a message */
  async postMembersIdOnetimemessagesdismissed<T = any>(parameters: Parameters.PostMembersIdOnetimemessagesdismissed, callback?: undefined): Promise<T>;
  async postMembersIdOnetimemessagesdismissed<T = any>(parameters: Parameters.PostMembersIdOnetimemessagesdismissed, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/members/${parameters.id}/oneTimeMessagesDismissed`,
      method: 'POST',
      params: {
        value: parameters.value,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postMembersIdOnetimemessagesdismissed' });
  }
}
