import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Boards {
  constructor(private client: Client) {}

  /** Get information about the memberships users have to the board. */
  async getBoardMemberships<T = Models.Memberships>(
    parameters: Parameters.GetBoardMemberships,
    callback: Callback<T>,
  ): Promise<void>;
  /** Get information about the memberships users have to the board. */
  async getBoardMemberships<T = Models.Memberships>(
    parameters: Parameters.GetBoardMemberships,
    callback?: never,
  ): Promise<T>;
  async getBoardMemberships<T = Models.Memberships>(
    parameters: Parameters.GetBoardMemberships,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/memberships`,
      method: 'GET',
      params: {
        filter: parameters.filter,
        activity: parameters.activity,
        orgMemberType: parameters.orgMemberType,
        member: parameters.member,
        member_fields: parameters.memberFields,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  /** Request a single board. */
  async getBoard<T = Models.Board>(parameters: Parameters.GetBoard, callback: Callback<T>): Promise<void>;
  /** Request a single board. */
  async getBoard<T = Models.Board>(parameters: Parameters.GetBoard, callback?: never): Promise<T>;
  async getBoard<T = Models.Board>(parameters: Parameters.GetBoard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}`,
      method: 'GET',
      params: {
        actions: parameters.actions,
        boardStars: parameters.boardStars,
        cards: parameters.cards,
        card_fields: parameters.card?.fields,
        card_list: parameters.card?.list,
        card_members: parameters.card?.members,
        card_stickers: parameters.card?.stickers,
        card_attachments: parameters.card?.attachments,
        card_pluginData: parameters.cardPluginData ?? parameters.card?.pluginData,
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
    };

    return this.client.sendRequest(config, callback);
  }

  /** Update an existing board by id */
  async updateBoard<T = unknown>(parameters: Parameters.UpdateBoard, callback: Callback<T>): Promise<void>;
  /** Update an existing board by id */
  async updateBoard<T = unknown>(parameters: Parameters.UpdateBoard, callback?: never): Promise<T>;
  async updateBoard<T = unknown>(parameters: Parameters.UpdateBoard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}`,
      method: 'PUT',
      params: {
        name: parameters.name,
        desc: parameters.desc,
        closed: parameters.closed,
        subscribed: parameters.subscribed,
        idOrganization: parameters.idOrganization,
        'prefs/permissionLevel': parameters.permissionLevel ?? parameters.prefs?.permissionLevel,
        'prefs/selfJoin': parameters.selfJoin ?? parameters.prefs?.selfJoin,
        'prefs/cardCovers': parameters.cardCovers ?? parameters.prefs?.cardCovers,
        'prefs/hideVotes': parameters.hideVotes ?? parameters.prefs?.hideVotes,
        'prefs/invitations': parameters.invitations ?? parameters.prefs?.invitations,
        'prefs/voting': parameters.voting ?? parameters.prefs?.voting,
        'prefs/comments': parameters.comments ?? parameters.prefs?.comments,
        'prefs/background': parameters.background ?? parameters.prefs?.background,
        'prefs/cardAging': parameters.cardAging ?? parameters.prefs?.cardAging,
        'prefs/calendarFeedEnabled': parameters.calendarFeedEnabled ?? parameters.prefs?.calendarFeedEnabled,
        'labelNames/green': parameters.green ?? parameters.labelNames?.green,
        'labelNames/yellow': parameters.yellow ?? parameters.labelNames?.yellow,
        'labelNames/orange': parameters.orange ?? parameters.labelNames?.orange,
        'labelNames/red': parameters.red ?? parameters.labelNames?.red,
        'labelNames/purple': parameters.purple ?? parameters.labelNames?.purple,
        'labelNames/blue': parameters.blue ?? parameters.labelNames?.blue,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  /** Delete a board. */
  async deleteBoard<T = void>(parameters: Parameters.DeleteBoard, callback: Callback<T>): Promise<void>;
  /** Delete a board. */
  async deleteBoard<T = void>(parameters: Parameters.DeleteBoard, callback?: never): Promise<T>;
  async deleteBoard<T = void>(parameters: Parameters.DeleteBoard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}`,
      method: 'DELETE',
      data: parameters.body,
    };

    return this.client.sendRequest(config, callback);
  }

  /** Get a single, specific field on a board */
  async getBoardField<T = unknown>(parameters: Parameters.GetBoardField, callback: Callback<T>): Promise<void>;
  /** Get a single, specific field on a board */
  async getBoardField<T = unknown>(parameters: Parameters.GetBoardField, callback?: never): Promise<T>;
  async getBoardField<T = unknown>(parameters: Parameters.GetBoardField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/${parameters.field}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Get an Actions on a Board. */
  async getBoardActions<T = unknown>(parameters: Parameters.GetBoardActions, callback: Callback<T>): Promise<void>;
  /** Get an Actions on a Board. */
  async getBoardActions<T = unknown>(parameters: Parameters.GetBoardActions, callback?: never): Promise<T>;
  async getBoardActions<T = unknown>(
    parameters: Parameters.GetBoardActions,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.boardId}/actions`,
      method: 'GET',
      params: {
        filter: parameters.filter,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  /** Get a single Card on a Board. */
  async getBoardCard<T = unknown>(parameters: Parameters.GetBoardCard, callback: Callback<T>): Promise<void>;
  /** Get a single Card on a Board. */
  async getBoardCard<T = unknown>(parameters: Parameters.GetBoardCard, callback?: never): Promise<T>;
  async getBoardCard<T = unknown>(parameters: Parameters.GetBoardCard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/cards/${parameters.idCard}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Get a Stars on a Board. */
  async getBoardStars<T = Array<Models.BoardStars>>(
    parameters: Parameters.GetBoardStars,
    callback: Callback<T>,
  ): Promise<void>;
  /** Get a Stars on a Board. */
  async getBoardStars<T = Array<Models.BoardStars>>(parameters: Parameters.GetBoardStars, callback?: never): Promise<T>;
  async getBoardStars<T = Array<Models.BoardStars>>(
    parameters: Parameters.GetBoardStars,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.boardId}/boardStars`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Get all of the checklists on a Board. */
  async getBoardChecklists<T = unknown>(
    parameters: Parameters.GetBoardChecklists,
    callback: Callback<T>,
  ): Promise<void>;
  /** Get all of the checklists on a Board. */
  async getBoardChecklists<T = unknown>(parameters: Parameters.GetBoardChecklists, callback?: never): Promise<T>;
  async getBoardChecklists<T = unknown>(
    parameters: Parameters.GetBoardChecklists,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/checklists`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Create a new checklist on a board. */
  async createBoardChecklist<T = unknown>(
    parameters: Parameters.CreateBoardChecklist,
    callback: Callback<T>,
  ): Promise<void>;
  /** Create a new checklist on a board. */
  async createBoardChecklist<T = unknown>(parameters: Parameters.CreateBoardChecklist, callback?: never): Promise<T>;
  async createBoardChecklist<T = unknown>(
    parameters: Parameters.CreateBoardChecklist,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/checklists`,
      method: 'POST',
      params: {
        name: parameters.name,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  /** Get all of the open Cards on a Board. */
  async getBoardCards<T = unknown>(parameters: Parameters.GetBoardCards, callback: Callback<T>): Promise<void>;
  /** Get all of the open Cards on a Board. */
  async getBoardCards<T = unknown>(parameters: Parameters.GetBoardCards, callback?: never): Promise<T>;
  async getBoardCards<T = unknown>(parameters: Parameters.GetBoardCards, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/cards`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Get the Cards on a Board that match a given filter. */
  async getBoardCardsFilter<T = unknown>(
    parameters: Parameters.GetBoardCardsFilter,
    callback: Callback<T>,
  ): Promise<void>;
  /** Get the Cards on a Board that match a given filter. */
  async getBoardCardsFilter<T = unknown>(parameters: Parameters.GetBoardCardsFilter, callback?: never): Promise<T>;
  async getBoardCardsFilter<T = unknown>(
    parameters: Parameters.GetBoardCardsFilter,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/cards/${parameters.filter}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Get the Custom Field Definitions that exist on a board. */
  async getBoardCustomFields<T = Models.CustomField[]>(
    parameters: Parameters.GetBoardCustomFields,
    callback: Callback<T>,
  ): Promise<void>;
  /** Get the Custom Field Definitions that exist on a board. */
  async getBoardCustomFields<T = Models.CustomField[]>(
    parameters: Parameters.GetBoardCustomFields,
    callback?: never,
  ): Promise<T>;
  async getBoardCustomFields<T = Models.CustomField[]>(
    parameters: Parameters.GetBoardCustomFields,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/customFields`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Get all of the Labels on a Board. */
  async getBoardLabels<T = unknown>(parameters: Parameters.GetBoardLabels, callback: Callback<T>): Promise<void>;
  /** Get all of the Labels on a Board. */
  async getBoardLabels<T = unknown>(parameters: Parameters.GetBoardLabels, callback?: never): Promise<T>;
  async getBoardLabels<T = unknown>(parameters: Parameters.GetBoardLabels, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/labels`,
      method: 'GET',
      params: {
        fields: parameters.fields,
        limit: parameters.limit,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  /** Create a new Label on a Board. */
  async createBoardLabel<T = unknown>(parameters: Parameters.CreateBoardLabel, callback: Callback<T>): Promise<void>;
  /** Create a new Label on a Board. */
  async createBoardLabel<T = unknown>(parameters: Parameters.CreateBoardLabel, callback?: never): Promise<T>;
  async createBoardLabel<T = unknown>(
    parameters: Parameters.CreateBoardLabel,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/labels`,
      method: 'POST',
      params: {
        name: parameters.name,
        color: parameters.color,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  /** Get the Lists on a Board */
  async getBoardLists<T = Models.List[]>(parameters: Parameters.GetBoardLists, callback: Callback<T>): Promise<void>;
  /** Get the Lists on a Board */
  async getBoardLists<T = Models.List[]>(parameters: Parameters.GetBoardLists, callback?: never): Promise<T>;
  async getBoardLists<T = Models.List[]>(
    parameters: Parameters.GetBoardLists,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/lists`,
      method: 'GET',
      params: {
        cards: parameters.cards,
        card_fields: parameters.cardFields,
        filter: parameters.filter,
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  /** Create a new List on a Board. */
  async createBoardList<T = Models.List>(parameters: Parameters.CreateBoardList, callback: Callback<T>): Promise<void>;
  /** Create a new List on a Board. */
  async createBoardList<T = Models.List>(parameters: Parameters.CreateBoardList, callback?: never): Promise<T>;
  async createBoardList<T = Models.List>(
    parameters: Parameters.CreateBoardList,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/lists`,
      method: 'POST',
      params: {
        name: parameters.name,
        pos: parameters.pos,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  async getBoardListsFilter<T = unknown>(
    parameters: Parameters.GetBoardListsFilter,
    callback: Callback<T>,
  ): Promise<void>;
  async getBoardListsFilter<T = unknown>(parameters: Parameters.GetBoardListsFilter, callback?: never): Promise<T>;
  async getBoardListsFilter<T = unknown>(
    parameters: Parameters.GetBoardListsFilter,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/lists/${parameters.filter}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Get the Members for a board */
  async getBoardMembers<T = unknown>(parameters: Parameters.GetBoardMembers, callback: Callback<T>): Promise<void>;
  /** Get the Members for a board */
  async getBoardMembers<T = unknown>(parameters: Parameters.GetBoardMembers, callback?: never): Promise<T>;
  async getBoardMembers<T = unknown>(
    parameters: Parameters.GetBoardMembers,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/members`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Invite a Member to a Board via their email address. */
  async inviteMember<T = unknown>(parameters: Parameters.InviteMember, callback: Callback<T>): Promise<void>;
  /** Invite a Member to a Board via their email address. */
  async inviteMember<T = unknown>(parameters: Parameters.InviteMember, callback?: never): Promise<T>;
  async inviteMember<T = unknown>(parameters: Parameters.InviteMember, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/members`,
      method: 'PUT',
      params: {
        email: parameters.email,
        type: parameters.type,
      },
      data: {
        fullName: parameters.fullName,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  /** Add a member to the board. */
  async addMemberToBoard<T = unknown>(parameters: Parameters.AddMemberToBoard, callback: Callback<T>): Promise<void>;
  /** Add a member to the board. */
  async addMemberToBoard<T = unknown>(parameters: Parameters.AddMemberToBoard, callback?: never): Promise<T>;
  async addMemberToBoard<T = unknown>(
    parameters: Parameters.AddMemberToBoard,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/members/${parameters.idMember}`,
      method: 'PUT',
      params: {
        type: parameters.type,
        allowBillableGuest: parameters.allowBillableGuest,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  async removeMemberFromBoard<T = unknown>(
    parameters: Parameters.RemoveMemberFromBoard,
    callback: Callback<T>,
  ): Promise<void>;
  async removeMemberFromBoard<T = unknown>(parameters: Parameters.RemoveMemberFromBoard, callback?: never): Promise<T>;
  async removeMemberFromBoard<T = unknown>(
    parameters: Parameters.RemoveMemberFromBoard,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/members/${parameters.idMember}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Update an existing board by id */
  async updateMemberOnBoard<T = unknown>(
    parameters: Parameters.UpdateMemberOnBoard,
    callback: Callback<T>,
  ): Promise<void>;
  /** Update an existing board by id */
  async updateMemberOnBoard<T = unknown>(parameters: Parameters.UpdateMemberOnBoard, callback?: never): Promise<T>;
  async updateMemberOnBoard<T = unknown>(
    parameters: Parameters.UpdateMemberOnBoard,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/memberships/${parameters.idMembership}`,
      method: 'PUT',
      params: {
        type: parameters.type,
        member_fields: parameters.memberFields,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  /** Update emailPosition Pref on a Board */
  async updateEmailPosition<T = unknown>(
    parameters: Parameters.UpdateEmailPosition,
    callback: Callback<T>,
  ): Promise<void>;
  /** Update emailPosition Pref on a Board */
  async updateEmailPosition<T = unknown>(parameters: Parameters.UpdateEmailPosition, callback?: never): Promise<T>;
  async updateEmailPosition<T = unknown>(
    parameters: Parameters.UpdateEmailPosition,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/myPrefs/emailPosition`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  /** Change the default list that email-to-board cards are created in. */
  async changeEmailList<T = unknown>(parameters: Parameters.ChangeEmailList, callback: Callback<T>): Promise<void>;
  /** Change the default list that email-to-board cards are created in. */
  async changeEmailList<T = unknown>(parameters: Parameters.ChangeEmailList, callback?: never): Promise<T>;
  async changeEmailList<T = unknown>(
    parameters: Parameters.ChangeEmailList,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/myPrefs/idEmailList`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  async updateShowListGuide<T = unknown>(
    parameters: Parameters.UpdateShowListGuide,
    callback: Callback<T>,
  ): Promise<void>;
  async updateShowListGuide<T = unknown>(parameters: Parameters.UpdateShowListGuide, callback?: never): Promise<T>;
  async updateShowListGuide<T = unknown>(
    parameters: Parameters.UpdateShowListGuide,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/myPrefs/showListGuide`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  async updateShowSidebar<T = unknown>(parameters: Parameters.UpdateShowSidebar, callback: Callback<T>): Promise<void>;
  async updateShowSidebar<T = unknown>(parameters: Parameters.UpdateShowSidebar, callback?: never): Promise<T>;
  async updateShowSidebar<T = unknown>(
    parameters: Parameters.UpdateShowSidebar,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/myPrefs/showSidebar`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  async updateShowSidebarActivity<T = unknown>(
    parameters: Parameters.UpdateShowSidebarActivity,
    callback: Callback<T>,
  ): Promise<void>;
  async updateShowSidebarActivity<T = unknown>(
    parameters: Parameters.UpdateShowSidebarActivity,
    callback?: never,
  ): Promise<T>;
  async updateShowSidebarActivity<T = unknown>(
    parameters: Parameters.UpdateShowSidebarActivity,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/myPrefs/showSidebarActivity`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  async updateShowSidebarBoardActions<T = unknown>(
    parameters: Parameters.UpdateShowSidebarBoardActions,
    callback: Callback<T>,
  ): Promise<void>;
  async updateShowSidebarBoardActions<T = unknown>(
    parameters: Parameters.UpdateShowSidebarBoardActions,
    callback?: never,
  ): Promise<T>;
  async updateShowSidebarBoardActions<T = unknown>(
    parameters: Parameters.UpdateShowSidebarBoardActions,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/myPrefs/showSidebarBoardActions`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  async updateShowSidebarMembers<T = unknown>(
    parameters: Parameters.UpdateShowSidebarMembers,
    callback: Callback<T>,
  ): Promise<void>;
  async updateShowSidebarMembers<T = unknown>(
    parameters: Parameters.UpdateShowSidebarMembers,
    callback?: never,
  ): Promise<T>;
  async updateShowSidebarMembers<T = unknown>(
    parameters: Parameters.UpdateShowSidebarMembers,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/myPrefs/showSidebarMembers`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  /** Create a new board. */
  async createBoard<T = Models.Board>(parameters: Parameters.CreateBoard, callback: Callback<T>): Promise<void>;
  /** Create a new board. */
  async createBoard<T = Models.Board>(parameters: Parameters.CreateBoard, callback?: never): Promise<T>;
  async createBoard<T = Models.Board>(parameters: Parameters.CreateBoard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: '/boards/',
      method: 'POST',
      params: {
        name: parameters.name,
        defaultLabels: parameters.defaultLabels,
        defaultLists: parameters.defaultLists,
        desc: parameters.desc,
        idOrganization: parameters.idOrganization,
        idBoardSource: parameters.idBoardSource,
        keepFromSource: parameters.keepFromSource,
        powerUps: parameters.powerUps,
        prefs_permissionLevel: parameters.prefsPermissionLevel ?? parameters.prefs?.permissionLevel,
        prefs_voting: parameters.prefsVoting ?? parameters.prefs?.voting,
        prefs_comments: parameters.prefsComments ?? parameters.prefs?.comments,
        prefs_invitations: parameters.prefsInvitations ?? parameters.prefs?.invitations,
        prefs_selfJoin: parameters.prefsSelfJoin ?? parameters.prefs?.selfJoin,
        prefs_cardCovers: parameters.prefsCardCovers ?? parameters.prefs?.cardCovers,
        prefs_background: parameters.prefsBackground ?? parameters.prefs?.background,
        prefs_cardAging: parameters.prefsCardAging ?? parameters.prefs?.cardAging,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  /** Create a new board. */
  async createCalendarKey<T = unknown>(parameters: Parameters.CreateCalendarKey, callback: Callback<T>): Promise<void>;
  /** Create a new board. */
  async createCalendarKey<T = unknown>(parameters: Parameters.CreateCalendarKey, callback?: never): Promise<T>;
  async createCalendarKey<T = unknown>(
    parameters: Parameters.CreateCalendarKey,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/calendarKey/generate`,
      method: 'POST',
    };

    return this.client.sendRequest(config, callback);
  }

  async createEmailKey<T = unknown>(parameters: Parameters.CreateEmailKey, callback: Callback<T>): Promise<void>;
  async createEmailKey<T = unknown>(parameters: Parameters.CreateEmailKey, callback?: never): Promise<T>;
  async createEmailKey<T = unknown>(parameters: Parameters.CreateEmailKey, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/emailKey/generate`,
      method: 'POST',
    };

    return this.client.sendRequest(config, callback);
  }

  async createIdTags<T = unknown>(parameters: Parameters.CreateIdTags, callback: Callback<T>): Promise<void>;
  async createIdTags<T = unknown>(parameters: Parameters.CreateIdTags, callback?: never): Promise<T>;
  async createIdTags<T = unknown>(parameters: Parameters.CreateIdTags, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/idTags`,
      method: 'POST',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  async markAsViewed<T = unknown>(parameters: Parameters.MarkAsViewed, callback: Callback<T>): Promise<void>;
  async markAsViewed<T = unknown>(parameters: Parameters.MarkAsViewed, callback?: never): Promise<T>;
  async markAsViewed<T = unknown>(parameters: Parameters.MarkAsViewed, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/markedAsViewed`,
      method: 'POST',
    };

    return this.client.sendRequest(config, callback, { methodName: 'markAsViewed' });
  }

  /** @deprecated Was removed from API */
  async createPowerUp<T = unknown>(parameters: Parameters.CreatePowerUp, callback: Callback<T>): Promise<void>;
  /** @deprecated Was removed from API */
  async createPowerUp<T = unknown>(parameters: Parameters.CreatePowerUp, callback?: never): Promise<T>;
  async createPowerUp<T = unknown>(parameters: Parameters.CreatePowerUp, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/powerUps`,
      method: 'POST',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  /** @deprecated Was removed from API */
  async deletePowerUp<T = unknown>(parameters: Parameters.DeletePowerUp, callback: Callback<T>): Promise<void>;
  /** @deprecated Was removed from API */
  async deletePowerUp<T = unknown>(parameters: Parameters.DeletePowerUp, callback?: never): Promise<T>;
  async deletePowerUp<T = unknown>(parameters: Parameters.DeletePowerUp, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/powerUps/${parameters.powerUp}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback);
  }

  /**
   * @deprecated Will be removed from API
   *
   *   Get the enabled Power-Ups on a board
   */
  async getEnabledPowerUps<T = Models.Plugin[]>(
    parameters: Parameters.GetEnabledPowerUps,
    callback: Callback<T>,
  ): Promise<void>;
  /**
   * @deprecated Will be removed from API
   *
   *   Get the enabled Power-Ups on a board
   */
  async getEnabledPowerUps<T = Models.Plugin[]>(
    parameters: Parameters.GetEnabledPowerUps,
    callback?: never,
  ): Promise<T>;
  async getEnabledPowerUps<T = Models.Plugin[]>(
    parameters: Parameters.GetEnabledPowerUps,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/boardPlugins`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /**
   * @deprecated Will be removed from API
   *
   *   Enable a Power-Up on a Board
   */
  async enablePowerUp<T = unknown>(parameters: Parameters.EnablePowerUp, callback: Callback<T>): Promise<void>;
  /** Enable a Power-Up on a Board */
  async enablePowerUp<T = unknown>(parameters: Parameters.EnablePowerUp, callback?: never): Promise<T>;
  async enablePowerUp<T = unknown>(parameters: Parameters.EnablePowerUp, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/boardPlugins`,
      method: 'POST',
      params: {
        idPlugin: parameters.idPlugin,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  /**
   * @deprecated Will be removed from API
   *
   *   Disable a Power-Up on a board
   */
  async disablePowerUp<T = unknown>(parameters: Parameters.DisablePowerUp, callback: Callback<T>): Promise<void>;
  /** Disable a Power-Up on a board */
  async disablePowerUp<T = unknown>(parameters: Parameters.DisablePowerUp, callback?: never): Promise<T>;
  async disablePowerUp<T = unknown>(parameters: Parameters.DisablePowerUp, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/boardPlugins/${parameters.idPlugin}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback);
  }

  /**
   * @deprecated Will be removed from API
   *
   *   List the Power-Ups on a board
   */
  async getPowerUps<T = Models.Plugin>(parameters: Parameters.GetPowerUps, callback: Callback<T>): Promise<void>;
  /**
   * @deprecated Will be removed from API
   *
   *   List the Power-Ups on a board
   */
  async getPowerUps<T = Models.Plugin>(parameters: Parameters.GetPowerUps, callback?: never): Promise<T>;
  async getPowerUps<T = Models.Plugin>(parameters: Parameters.GetPowerUps, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/boards/${parameters.id}/plugins`,
      method: 'GET',
      params: {
        filter: parameters.filter,
      },
    };

    return this.client.sendRequest(config, callback);
  }
}
