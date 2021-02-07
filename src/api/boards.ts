import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Boards {
  constructor(private client: Client) { }
  /**
     * Get information about the memberships users have to the board. */
  async getBoardsIdMemberships<T = Models.Memberships>(parameters: Parameters.GetBoardsIdMemberships, callback: Callback<T>): Promise<void>;
  /**
     * Get information about the memberships users have to the board. */
  async getBoardsIdMemberships<T = Models.Memberships>(parameters: Parameters.GetBoardsIdMemberships, callback?: undefined): Promise<T>;
  async getBoardsIdMemberships<T = Models.Memberships>(parameters: Parameters.GetBoardsIdMemberships, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/memberships`,
      method: 'GET',
      params: {
        filter: parameters.filter,
        activity: parameters.activity,
        orgMemberType: parameters.orgMemberType,
        member: parameters.member,
        member_fields: parameters.member_fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getBoardsIdMemberships' });
  }
  /**
     * Request a single board. */
  async getBoardsId<T = Models.Board>(parameters: Parameters.GetBoardsId, callback: Callback<T>): Promise<void>;
  /**
     * Request a single board. */
  async getBoardsId<T = Models.Board>(parameters: Parameters.GetBoardsId, callback?: undefined): Promise<T>;
  async getBoardsId<T = Models.Board>(parameters: Parameters.GetBoardsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}`,
      method: 'GET',
      params: {
        actions: parameters.actions,
        boardStars: parameters.boardStars,
        cards: parameters.cards,
        card_pluginData: parameters.card_pluginData,
        checklists: parameters.checklists,
        customFields: parameters.customFields,
        fields: parameters.fields,
        labels: parameters.labels,
        lists: parameters.lists,
        members: parameters.members,
        memberships: parameters.memberships,
        pluginData: parameters.pluginData,
        organization: parameters.organization,
        organization_pluginData: parameters.organization_pluginData,
        myPrefs: parameters.myPrefs,
        tags: parameters.tags,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getBoardsId' });
  }
  /**
     * Update an existing board by id */
  async putBoardsId<T = any>(parameters: Parameters.PutBoardsId, callback: Callback<T>): Promise<void>;
  /**
     * Update an existing board by id */
  async putBoardsId<T = any>(parameters: Parameters.PutBoardsId, callback?: undefined): Promise<T>;
  async putBoardsId<T = any>(parameters: Parameters.PutBoardsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}`,
      method: 'PUT',
      params: {
        name: parameters.name,
        desc: parameters.desc,
        closed: parameters.closed,
        subscribed: parameters.subscribed,
        idOrganization: parameters.idOrganization,
        'prefs/permissionLevel': parameters.permissionLevel,
        'prefs/selfJoin': parameters.selfJoin,
        'prefs/cardCovers': parameters.cardCovers,
        'prefs/hideVotes': parameters.hideVotes,
        'prefs/invitations': parameters.invitations,
        'prefs/voting': parameters.voting,
        'prefs/comments': parameters.comments,
        'prefs/background': parameters.background,
        'prefs/cardAging': parameters.cardAging,
        'prefs/calendarFeedEnabled': parameters.calendarFeedEnabled,
        'labelNames/green': parameters.green,
        'labelNames/yellow': parameters.yellow,
        'labelNames/orange': parameters.orange,
        'labelNames/red': parameters.red,
        'labelNames/purple': parameters.purple,
        'labelNames/blue': parameters.blue,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putBoardsId' });
  }
  /**
     * Delete a board. */
  async deleteBoardsId<T = any>(parameters: Parameters.DeleteBoardsId, callback: Callback<T>): Promise<void>;
  /**
     * Delete a board. */
  async deleteBoardsId<T = any>(parameters: Parameters.DeleteBoardsId, callback?: undefined): Promise<T>;
  async deleteBoardsId<T = any>(parameters: Parameters.DeleteBoardsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}`,
      method: 'DELETE',
      data: parameters.body,
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteBoardsId' });
  }
  /**
     * Get a single, specific field on a board */
  async getBoardsIdField<T = any>(parameters: Parameters.GetBoardsIdField, callback: Callback<T>): Promise<void>;
  /**
     * Get a single, specific field on a board */
  async getBoardsIdField<T = any>(parameters: Parameters.GetBoardsIdField, callback?: undefined): Promise<T>;
  async getBoardsIdField<T = any>(parameters: Parameters.GetBoardsIdField, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/${parameters.field}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getBoardsIdField' });
  }
  async getBoardsIdActions<T = any>(parameters: Parameters.GetBoardsIdActions, callback: Callback<T>): Promise<void>;
  async getBoardsIdActions<T = any>(parameters: Parameters.GetBoardsIdActions, callback?: undefined): Promise<T>;
  async getBoardsIdActions<T = any>(parameters: Parameters.GetBoardsIdActions, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.boardId}/actions`,
      method: 'GET',
      params: {
        filter: parameters.filter,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getBoardsIdActions' });
  }
  /**
     * Get a single Card on a Board. */
  async getBoardsIdCardsIdcard<T = any>(parameters: Parameters.GetBoardsIdCardsIdcard, callback: Callback<T>): Promise<void>;
  /**
     * Get a single Card on a Board. */
  async getBoardsIdCardsIdcard<T = any>(parameters: Parameters.GetBoardsIdCardsIdcard, callback?: undefined): Promise<T>;
  async getBoardsIdCardsIdcard<T = any>(parameters: Parameters.GetBoardsIdCardsIdcard, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/cards/${parameters.idCard}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getBoardsIdCardsIdcard' });
  }
  async getBoardsIdBoardstars<T = any>(parameters: Parameters.GetBoardsIdBoardstars, callback: Callback<T>): Promise<void>;
  async getBoardsIdBoardstars<T = any>(parameters: Parameters.GetBoardsIdBoardstars, callback?: undefined): Promise<T>;
  async getBoardsIdBoardstars<T = any>(parameters: Parameters.GetBoardsIdBoardstars, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.boardId}/boardStars`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getBoardsIdBoardstars' });
  }
  /**
     * Get all of the checklists on a Board. */
  async boardsIdChecklists<T = any>(parameters: Parameters.BoardsIdChecklists, callback: Callback<T>): Promise<void>;
  /**
     * Get all of the checklists on a Board. */
  async boardsIdChecklists<T = any>(parameters: Parameters.BoardsIdChecklists, callback?: undefined): Promise<T>;
  async boardsIdChecklists<T = any>(parameters: Parameters.BoardsIdChecklists, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/checklists`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'boardsIdChecklists' });
  }
  /**
     * Create a new checklist on a board. */
  async postBoardsIdChecklists<T = any>(parameters: Parameters.PostBoardsIdChecklists, callback: Callback<T>): Promise<void>;
  /**
     * Create a new checklist on a board. */
  async postBoardsIdChecklists<T = any>(parameters: Parameters.PostBoardsIdChecklists, callback?: undefined): Promise<T>;
  async postBoardsIdChecklists<T = any>(parameters: Parameters.PostBoardsIdChecklists, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/checklists`,
      method: 'POST',
      params: {
        name: parameters.name,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postBoardsIdChecklists' });
  }
  /**
     * Get all of the open Cards on a Board. */
  async getBoardsIdCards<T = any>(parameters: Parameters.GetBoardsIdCards, callback: Callback<T>): Promise<void>;
  /**
     * Get all of the open Cards on a Board. */
  async getBoardsIdCards<T = any>(parameters: Parameters.GetBoardsIdCards, callback?: undefined): Promise<T>;
  async getBoardsIdCards<T = any>(parameters: Parameters.GetBoardsIdCards, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/cards`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getBoardsIdCards' });
  }
  /**
     * Get the Cards on a Board that match a given filter. */
  async getBoardsIdCardsFilter<T = any>(parameters: Parameters.GetBoardsIdCardsFilter, callback: Callback<T>): Promise<void>;
  /**
     * Get the Cards on a Board that match a given filter. */
  async getBoardsIdCardsFilter<T = any>(parameters: Parameters.GetBoardsIdCardsFilter, callback?: undefined): Promise<T>;
  async getBoardsIdCardsFilter<T = any>(parameters: Parameters.GetBoardsIdCardsFilter, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/cards/${parameters.filter}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getBoardsIdCardsFilter' });
  }
  /**
     * Get the Custom Field Definitions that exist on a board. */
  async getBoardsIdCustomfields<T = any>(parameters: Parameters.GetBoardsIdCustomfields, callback: Callback<T>): Promise<void>;
  /**
     * Get the Custom Field Definitions that exist on a board. */
  async getBoardsIdCustomfields<T = any>(parameters: Parameters.GetBoardsIdCustomfields, callback?: undefined): Promise<T>;
  async getBoardsIdCustomfields<T = any>(parameters: Parameters.GetBoardsIdCustomfields, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/customFields`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getBoardsIdCustomfields' });
  }
  /**
     * Get all of the Labels on a Board. */
  async getBoardsIdLabels<T = any>(parameters: Parameters.GetBoardsIdLabels, callback: Callback<T>): Promise<void>;
  /**
     * Get all of the Labels on a Board. */
  async getBoardsIdLabels<T = any>(parameters: Parameters.GetBoardsIdLabels, callback?: undefined): Promise<T>;
  async getBoardsIdLabels<T = any>(parameters: Parameters.GetBoardsIdLabels, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/labels`,
      method: 'GET',
      params: {
        fields: parameters.fields,
        limit: parameters.limit,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getBoardsIdLabels' });
  }
  /**
     * Create a new Label on a Board. */
  async postBoardsIdLabels<T = any>(parameters: Parameters.PostBoardsIdLabels, callback: Callback<T>): Promise<void>;
  /**
     * Create a new Label on a Board. */
  async postBoardsIdLabels<T = any>(parameters: Parameters.PostBoardsIdLabels, callback?: undefined): Promise<T>;
  async postBoardsIdLabels<T = any>(parameters: Parameters.PostBoardsIdLabels, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/labels`,
      method: 'POST',
      params: {
        name: parameters.name,
        color: parameters.color,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postBoardsIdLabels' });
  }
  /**
     * Get the Lists on a Board */
  async getBoardsIdLists<T = any>(parameters: Parameters.GetBoardsIdLists, callback: Callback<T>): Promise<void>;
  /**
     * Get the Lists on a Board */
  async getBoardsIdLists<T = any>(parameters: Parameters.GetBoardsIdLists, callback?: undefined): Promise<T>;
  async getBoardsIdLists<T = any>(parameters: Parameters.GetBoardsIdLists, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/lists`,
      method: 'GET',
      params: {
        cards: parameters.cards,
        card_fields: parameters.card_fields,
        filter: parameters.filter,
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getBoardsIdLists' });
  }
  /**
     * Create a new List on a Board. */
  async postBoardsIdLists<T = any>(parameters: Parameters.PostBoardsIdLists, callback: Callback<T>): Promise<void>;
  /**
     * Create a new List on a Board. */
  async postBoardsIdLists<T = any>(parameters: Parameters.PostBoardsIdLists, callback?: undefined): Promise<T>;
  async postBoardsIdLists<T = any>(parameters: Parameters.PostBoardsIdLists, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/lists`,
      method: 'POST',
      params: {
        name: parameters.name,
        pos: parameters.pos,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postBoardsIdLists' });
  }
  async getBoardsIdListsFilter<T = any>(parameters: Parameters.GetBoardsIdListsFilter, callback: Callback<T>): Promise<void>;
  async getBoardsIdListsFilter<T = any>(parameters: Parameters.GetBoardsIdListsFilter, callback?: undefined): Promise<T>;
  async getBoardsIdListsFilter<T = any>(parameters: Parameters.GetBoardsIdListsFilter, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/lists/${parameters.filter}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getBoardsIdListsFilter' });
  }
  /**
     * Get the Members for a board */
  async getBoardsIdMembers<T = any>(parameters: Parameters.GetBoardsIdMembers, callback: Callback<T>): Promise<void>;
  /**
     * Get the Members for a board */
  async getBoardsIdMembers<T = any>(parameters: Parameters.GetBoardsIdMembers, callback?: undefined): Promise<T>;
  async getBoardsIdMembers<T = any>(parameters: Parameters.GetBoardsIdMembers, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/members`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getBoardsIdMembers' });
  }
  /**
     * Invite a Member to a Board via their email address. */
  async putBoardsIdMembers<T = any>(parameters: Parameters.PutBoardsIdMembers, callback: Callback<T>): Promise<void>;
  /**
     * Invite a Member to a Board via their email address. */
  async putBoardsIdMembers<T = any>(parameters: Parameters.PutBoardsIdMembers, callback?: undefined): Promise<T>;
  async putBoardsIdMembers<T = any>(parameters: Parameters.PutBoardsIdMembers, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/members`,
      method: 'PUT',
      params: {
        email: parameters.email,
        type: parameters.type,
      },
      data: {
        fullName: parameters.fullName,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putBoardsIdMembers' });
  }
  /**
     * Add a member to the board. */
  async putBoardsIdMembersIdmember<T = any>(parameters: Parameters.PutBoardsIdMembersIdmember, callback: Callback<T>): Promise<void>;
  /**
     * Add a member to the board. */
  async putBoardsIdMembersIdmember<T = any>(parameters: Parameters.PutBoardsIdMembersIdmember, callback?: undefined): Promise<T>;
  async putBoardsIdMembersIdmember<T = any>(parameters: Parameters.PutBoardsIdMembersIdmember, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/members/${parameters.idMember}`,
      method: 'PUT',
      params: {
        type: parameters.type,
        allowBillableGuest: parameters.allowBillableGuest,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putBoardsIdMembersIdmember' });
  }
  async boardsidmembersidmember<T = any>(parameters: Parameters.Boardsidmembersidmember, callback: Callback<T>): Promise<void>;
  async boardsidmembersidmember<T = any>(parameters: Parameters.Boardsidmembersidmember, callback?: undefined): Promise<T>;
  async boardsidmembersidmember<T = any>(parameters: Parameters.Boardsidmembersidmember, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/members/${parameters.idMember}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'boardsidmembersidmember' });
  }
  /**
     * Update an existing board by id */
  async putBoardsIdMembershipsIdmembership<T = any>(parameters: Parameters.PutBoardsIdMembershipsIdmembership, callback: Callback<T>): Promise<void>;
  /**
     * Update an existing board by id */
  async putBoardsIdMembershipsIdmembership<T = any>(parameters: Parameters.PutBoardsIdMembershipsIdmembership, callback?: undefined): Promise<T>;
  async putBoardsIdMembershipsIdmembership<T = any>(parameters: Parameters.PutBoardsIdMembershipsIdmembership, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/memberships/${parameters.idMembership}`,
      method: 'PUT',
      params: {
        type: parameters.type,
        member_fields: parameters.member_fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putBoardsIdMembershipsIdmembership' });
  }
  /**
     * Update emailPosition Pref on a Board */
  async putBoardsIdMyprefsEmailposition<T = any>(parameters: Parameters.PutBoardsIdMyprefsEmailposition, callback: Callback<T>): Promise<void>;
  /**
     * Update emailPosition Pref on a Board */
  async putBoardsIdMyprefsEmailposition<T = any>(parameters: Parameters.PutBoardsIdMyprefsEmailposition, callback?: undefined): Promise<T>;
  async putBoardsIdMyprefsEmailposition<T = any>(parameters: Parameters.PutBoardsIdMyprefsEmailposition, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/myPrefs/emailPosition`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putBoardsIdMyprefsEmailposition' });
  }
  /**
     * Change the default list that email-to-board cards are created in. */
  async putBoardsIdMyprefsIdemaillist<T = any>(parameters: Parameters.PutBoardsIdMyprefsIdemaillist, callback: Callback<T>): Promise<void>;
  /**
     * Change the default list that email-to-board cards are created in. */
  async putBoardsIdMyprefsIdemaillist<T = any>(parameters: Parameters.PutBoardsIdMyprefsIdemaillist, callback?: undefined): Promise<T>;
  async putBoardsIdMyprefsIdemaillist<T = any>(parameters: Parameters.PutBoardsIdMyprefsIdemaillist, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/myPrefs/idEmailList`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putBoardsIdMyprefsIdemaillist' });
  }
  async putBoardsIdMyPrefsShowlistguide<T = any>(parameters: Parameters.PutBoardsIdMyPrefsShowlistguide, callback: Callback<T>): Promise<void>;
  async putBoardsIdMyPrefsShowlistguide<T = any>(parameters: Parameters.PutBoardsIdMyPrefsShowlistguide, callback?: undefined): Promise<T>;
  async putBoardsIdMyPrefsShowlistguide<T = any>(parameters: Parameters.PutBoardsIdMyPrefsShowlistguide, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/myPrefs/showListGuide`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putBoardsIdMyPrefsShowlistguide' });
  }
  async putBoardsIdMyPrefsShowsidebar<T = any>(parameters: Parameters.PutBoardsIdMyPrefsShowsidebar, callback: Callback<T>): Promise<void>;
  async putBoardsIdMyPrefsShowsidebar<T = any>(parameters: Parameters.PutBoardsIdMyPrefsShowsidebar, callback?: undefined): Promise<T>;
  async putBoardsIdMyPrefsShowsidebar<T = any>(parameters: Parameters.PutBoardsIdMyPrefsShowsidebar, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/myPrefs/showSidebar`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putBoardsIdMyPrefsShowsidebar' });
  }
  async putBoardsIdMyPrefsShowsidebaractivity<T = any>(parameters: Parameters.PutBoardsIdMyPrefsShowsidebaractivity, callback: Callback<T>): Promise<void>;
  async putBoardsIdMyPrefsShowsidebaractivity<T = any>(parameters: Parameters.PutBoardsIdMyPrefsShowsidebaractivity, callback?: undefined): Promise<T>;
  async putBoardsIdMyPrefsShowsidebaractivity<T = any>(parameters: Parameters.PutBoardsIdMyPrefsShowsidebaractivity, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/myPrefs/showSidebarActivity`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putBoardsIdMyPrefsShowsidebaractivity' });
  }
  async putBoardsIdMyPrefsShowsidebarboardactions<T = any>(parameters: Parameters.PutBoardsIdMyPrefsShowsidebarboardactions, callback: Callback<T>): Promise<void>;
  async putBoardsIdMyPrefsShowsidebarboardactions<T = any>(parameters: Parameters.PutBoardsIdMyPrefsShowsidebarboardactions, callback?: undefined): Promise<T>;
  async putBoardsIdMyPrefsShowsidebarboardactions<T = any>(parameters: Parameters.PutBoardsIdMyPrefsShowsidebarboardactions, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/myPrefs/showSidebarBoardActions`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putBoardsIdMyPrefsShowsidebarboardactions' });
  }
  async putBoardsIdMyPrefsShowsidebarmembers<T = any>(parameters: Parameters.PutBoardsIdMyPrefsShowsidebarmembers, callback: Callback<T>): Promise<void>;
  async putBoardsIdMyPrefsShowsidebarmembers<T = any>(parameters: Parameters.PutBoardsIdMyPrefsShowsidebarmembers, callback?: undefined): Promise<T>;
  async putBoardsIdMyPrefsShowsidebarmembers<T = any>(parameters: Parameters.PutBoardsIdMyPrefsShowsidebarmembers, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/myPrefs/showSidebarMembers`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putBoardsIdMyPrefsShowsidebarmembers' });
  }
  /**
     * Create a new board. */
  async postBoards<T = any>(parameters: Parameters.PostBoards, callback: Callback<T>): Promise<void>;
  /**
     * Create a new board. */
  async postBoards<T = any>(parameters: Parameters.PostBoards, callback?: undefined): Promise<T>;
  async postBoards<T = any>(parameters: Parameters.PostBoards, callback?: Callback<T>): Promise<void | T> {
    const config = ({
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
        prefs_permissionLevel: parameters.prefs_permissionLevel,
        prefs_voting: parameters.prefs_voting,
        prefs_comments: parameters.prefs_comments,
        prefs_invitations: parameters.prefs_invitations,
        prefs_selfJoin: parameters.prefs_selfJoin,
        prefs_cardCovers: parameters.prefs_cardCovers,
        prefs_background: parameters.prefs_background,
        prefs_cardAging: parameters.prefs_cardAging,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postBoards' });
  }
  /**
     * Create a new board. */
  async postBoardsIdCalendarkeyGenerate<T = any>(parameters: Parameters.PostBoardsIdCalendarkeyGenerate, callback: Callback<T>): Promise<void>;
  /**
     * Create a new board. */
  async postBoardsIdCalendarkeyGenerate<T = any>(parameters: Parameters.PostBoardsIdCalendarkeyGenerate, callback?: undefined): Promise<T>;
  async postBoardsIdCalendarkeyGenerate<T = any>(parameters: Parameters.PostBoardsIdCalendarkeyGenerate, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/calendarKey/generate`,
      method: 'POST',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postBoardsIdCalendarkeyGenerate' });
  }
  async postBoardsIdEmailkeyGenerate<T = any>(parameters: Parameters.PostBoardsIdEmailkeyGenerate, callback: Callback<T>): Promise<void>;
  async postBoardsIdEmailkeyGenerate<T = any>(parameters: Parameters.PostBoardsIdEmailkeyGenerate, callback?: undefined): Promise<T>;
  async postBoardsIdEmailkeyGenerate<T = any>(parameters: Parameters.PostBoardsIdEmailkeyGenerate, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/emailKey/generate`,
      method: 'POST',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postBoardsIdEmailkeyGenerate' });
  }
  async postBoardsIdIdtags<T = any>(parameters: Parameters.PostBoardsIdIdtags, callback: Callback<T>): Promise<void>;
  async postBoardsIdIdtags<T = any>(parameters: Parameters.PostBoardsIdIdtags, callback?: undefined): Promise<T>;
  async postBoardsIdIdtags<T = any>(parameters: Parameters.PostBoardsIdIdtags, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/idTags`,
      method: 'POST',
      params: {
        value: parameters.value,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postBoardsIdIdtags' });
  }
  async postBoardsIdMarkedasviewed<T = any>(parameters: Parameters.PostBoardsIdMarkedasviewed, callback: Callback<T>): Promise<void>;
  async postBoardsIdMarkedasviewed<T = any>(parameters: Parameters.PostBoardsIdMarkedasviewed, callback?: undefined): Promise<T>;
  async postBoardsIdMarkedasviewed<T = any>(parameters: Parameters.PostBoardsIdMarkedasviewed, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/markedAsViewed`,
      method: 'POST',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postBoardsIdMarkedasviewed' });
  }
  async postBoardsIdPowerups<T = any>(parameters: Parameters.PostBoardsIdPowerups, callback: Callback<T>): Promise<void>;
  async postBoardsIdPowerups<T = any>(parameters: Parameters.PostBoardsIdPowerups, callback?: undefined): Promise<T>;
  async postBoardsIdPowerups<T = any>(parameters: Parameters.PostBoardsIdPowerups, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/powerUps`,
      method: 'POST',
      params: {
        value: parameters.value,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postBoardsIdPowerups' });
  }
  async deleteBoardsIdPowerups<T = any>(parameters: Parameters.DeleteBoardsIdPowerups, callback: Callback<T>): Promise<void>;
  async deleteBoardsIdPowerups<T = any>(parameters: Parameters.DeleteBoardsIdPowerups, callback?: undefined): Promise<T>;
  async deleteBoardsIdPowerups<T = any>(parameters: Parameters.DeleteBoardsIdPowerups, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/powerUps/${parameters.powerUp}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteBoardsIdPowerups' });
  }
  /**
     * Get the enabled Power-Ups on a board */
  async getBoardsIdBoardplugins<T = any>(parameters: Parameters.GetBoardsIdBoardplugins, callback: Callback<T>): Promise<void>;
  /**
     * Get the enabled Power-Ups on a board */
  async getBoardsIdBoardplugins<T = any>(parameters: Parameters.GetBoardsIdBoardplugins, callback?: undefined): Promise<T>;
  async getBoardsIdBoardplugins<T = any>(parameters: Parameters.GetBoardsIdBoardplugins, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/boardPlugins`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getBoardsIdBoardplugins' });
  }
  /**
     * Enable a Power-Up on a Board */
  async postBoardsIdBoardplugins<T = any>(parameters: Parameters.PostBoardsIdBoardplugins, callback: Callback<T>): Promise<void>;
  /**
     * Enable a Power-Up on a Board */
  async postBoardsIdBoardplugins<T = any>(parameters: Parameters.PostBoardsIdBoardplugins, callback?: undefined): Promise<T>;
  async postBoardsIdBoardplugins<T = any>(parameters: Parameters.PostBoardsIdBoardplugins, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/boardPlugins`,
      method: 'POST',
      params: {
        idPlugin: parameters.idPlugin,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postBoardsIdBoardplugins' });
  }
  /**
     * Disable a Power-Up on a board */
  async deleteBoardsIdBoardplugins<T = any>(parameters: Parameters.DeleteBoardsIdBoardplugins, callback: Callback<T>): Promise<void>;
  /**
     * Disable a Power-Up on a board */
  async deleteBoardsIdBoardplugins<T = any>(parameters: Parameters.DeleteBoardsIdBoardplugins, callback?: undefined): Promise<T>;
  async deleteBoardsIdBoardplugins<T = any>(parameters: Parameters.DeleteBoardsIdBoardplugins, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/boardPlugins/${parameters.idPlugin}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteBoardsIdBoardplugins' });
  }
  /**
     * List the Power-Ups on a board */
  async getBoardIdPlugins<T = Models.Plugin>(parameters: Parameters.GetBoardIdPlugins, callback: Callback<T>): Promise<void>;
  /**
     * List the Power-Ups on a board */
  async getBoardIdPlugins<T = Models.Plugin>(parameters: Parameters.GetBoardIdPlugins, callback?: undefined): Promise<T>;
  async getBoardIdPlugins<T = Models.Plugin>(parameters: Parameters.GetBoardIdPlugins, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/boards/${parameters.id}/plugins`,
      method: 'GET',
      params: {
        filter: parameters.filter,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getBoardIdPlugins' });
  }
}
