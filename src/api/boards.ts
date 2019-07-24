import { AxiosRequestConfig } from 'axios';
import { TrelloClient } from '..';
import { joinUrl } from '../helpers';

export class Board {
  private readonly prefix = 'boards';

  constructor(private readonly client: TrelloClient) { }

  public async getBoard(
    options: {
      id: string;
      actions?: string;
      boardStars?: string;
      cards?: string;
      cardPluginData?: string;
      checklists?: string;
      customFields?: boolean;
      fields?: string[];
      labels?: string;
      lists?: string;
      members?: string;
      memberships?: string;
      membersInvited?: string;
      membersInvitedFields?: string[];
      pluginData?: boolean;
      organization?: boolean;
      organizationPluginData?: boolean;
      myPrefs?: boolean;
      tags?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'GET',
      params: {
        actions: options.actions,
        boardStars: options.boardStars,
        cards: options.cards,
        card_pluginData: options.cardPluginData,
        checklists: options.checklists,
        customFields: options.customFields,
        fields: options.fields && options.fields.join(','),
        labels: options.labels,
        lists: options.lists,
        members: options.members,
        memberships: options.memberships,
        membersInvited: options.membersInvited,
        membersInvited_fields: options.membersInvitedFields && options.membersInvitedFields.join(','),
        pluginData: options.pluginData,
        organization: options.organization,
        organization_pluginData: options.organizationPluginData,
        myPrefs: options.myPrefs,
        tags: options.tags
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
      limit?: number;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'actions'),
      method: 'GET',
      params: {
        limit: options.limit
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getEnabledPlugins(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'boardPlugins'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getStars(
    options: {
      id: string;
      filter: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'boardStars'),
      method: 'GET',
      params: {
        filter: options.filter
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCards(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'cards'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCardsFilter(
    options: {
      id: string;
      filter: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'cards', options.filter),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCard(
    options: {
      id: string;
      idCard: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'cards', options.idCard),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getChecklist(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'checklists'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCustomFields(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'customFields'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getLabels(
    options: {
      id: string;
      fields?: string[];
      limit?: number;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'labels'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(','),
        limit: options.limit
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getLists(
    options: {
      id: string;
      cards?: string;
      cardFields?: string[];
      filter?: string;
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'lists'),
      method: 'GET',
      params: {
        cards: options.cards,
        card_fields: options.cardFields && options.cardFields.join(','),
        filter: options.filter,
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getListsFilter(
    options: {
      id: string;
      filter: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'lists', options.filter),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getMembers(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'members'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getMemberships(
    options: {
      id: string;
      filter?: string;
      activity?: boolean;
      orgMemberType?: boolean;
      member?: boolean;
      memberFields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'memberships'),
      method: 'GET',
      params: {
        filter: options.filter,
        activity: options.activity,
        orgMemberType: options.orgMemberType,
        member: options.member,
        member_fields: options.memberFields && options.memberFields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getPlugins(
    options: {
      id: string;
      filter?: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'plugins'),
      method: 'GET',
      params: {
        filter: options.filter
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateBoard(
    options: {
      id: string;
      name?: string;
      desc?: string;
      closed?: boolean;
      subscribed?: boolean;
      idOrganization?: string;
      permissionLevel?: string | 'org' | 'private' | 'public';
      selfJoin?: boolean;
      cardCovers?: boolean;
      hideVotes?: boolean;
      invitations?: string;
      voting?: string;
      comments?: string;
      background?: string;
      cardAging?: string;
      calendarFeedEnabled?: boolean;
      green?: string;
      yellow?: string;
      orange?: string;
      red?: string;
      purple?: string;
      blue?: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'PUT',
      params: {
        name: options.name,
        desc: options.desc,
        closed: options.closed,
        subscribed: options.subscribed,
        idOrganization: options.idOrganization,
        'prefs/permissionLevel': options.permissionLevel,
        'prefs/selfJoin': options.selfJoin,
        'prefs/cardCovers': options.cardCovers,
        'prefs/hideVotes': options.hideVotes,
        'prefs/invitations': options.invitations,
        'prefs/voting': options.voting,
        'prefs/comments': options.comments,
        'prefs/background': options.background,
        'prefs/cardAging': options.cardAging,
        'prefs/calendarFeedEnabled': options.calendarFeedEnabled,
        'labelNames/green': options.green,
        'labelNames/yellow': options.yellow,
        'labelNames/orange': options.orange,
        'labelNames/red': options.red,
        'labelNames/purple': options.purple,
        'labelNames/blue': options.blue
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateMembers(
    options: {
      id: string;
      email: string;
      type: string;
      fullName?: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'members'),
      method: 'PUT',
      headers: {
        type: options.type
      },
      params: {
        email: options.email
      },
      data: {
        fullName: options.fullName
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateMember(
    options: {
      id: string;
      idMember: string;
      type: string;
      allowBillableGuest?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'members', options.idMember),
      method: 'PUT',
      params: {
        type: options.type,
        allowBillableGuest: options.allowBillableGuest
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  // TODO bad docs https://developers.trello.com/reference/#boardsidlabelnamesmembershipsidmembership
  public async updateMembership(
    options: {
      id: string;
      idMembership: string;
      type: string;
      memberFields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'memberships', options.idMembership),
      method: 'PUT',
      params: {
        idMembership: options.idMembership,
        type: options.type,
        member_fields: options.memberFields && options.memberFields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateEmailPosition(
    options: {
      id: string;
      value: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'myPrefs', 'emailPosition'),
      method: 'PUT',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateIdEmailList(
    options: {
      id: string;
      value: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'myPrefs', 'idEmailList'),
      method: 'PUT',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async showListGuide(
    options: {
      id: string;
      value: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'myPrefs', 'showListGuide'),
      method: 'PUT',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async showSidebar(
    options: {
      id: string;
      value: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'myPrefs', 'showSidebar'),
      method: 'PUT',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async showSidebarActivity(
    options: {
      id: string;
      value: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'myPrefs', 'showSidebarActivity'),
      method: 'PUT',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async showSidebarBoardActions(
    options: {
      id: string;
      value: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'myPrefs', 'showSidebarBoardActions'),
      method: 'PUT',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async showSidebarMembers(
    options: {
      id: string;
      value: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'myPrefs', 'showSidebarMembers'),
      method: 'PUT',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addBoard(
    options: {
      name: string;
      defaultLabels?: boolean;
      defaultLists?: boolean;
      desc?: string;
      idOrganization?: string;
      idBoardSource?: string;
      keepFromSource?: string;
      powerUps?: string;
      permissionLevel?: string;
      voting?: string;
      comments?: string;
      invitations?: string;
      selfJoin?: boolean;
      cardCovers?: boolean;
      background?: string;
      cardAging?: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix),
      method: 'POST',
      params: {
        name: options.name,
        defaultLabels: options.defaultLabels,
        defaultLists: options.defaultLists,
        desc: options.desc,
        idOrganization: options.idOrganization,
        idBoardSource: options.idBoardSource,
        keepFromSource: options.keepFromSource,
        powerUps: options.powerUps,
        prefs_permissionLevel: options.permissionLevel,
        prefs_voting: options.voting,
        prefs_comments: options.comments,
        prefs_invitations: options.invitations,
        prefs_selfJoin: options.selfJoin,
        prefs_cardCovers: options.cardCovers,
        prefs_background: options.background,
        prefs_cardAging: options.cardAging
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addPlugin(
    options: {
      id: string;
      idPlugin?: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'boardPlugins'),
      method: 'POST',
      params: {
        idPlugin: options.idPlugin
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async generateNewCalendarKey(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'calendarKey', 'generate'),
      method: 'POST'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async generateNewEmailKey(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'emailKey', 'generate'),
      method: 'POST'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addIdTag(
    options: {
      id: string;
      value: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'idTags'),
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
      name: string;
      color: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'labels'),
      method: 'POST',
      params: {
        name: options.name,
        color: options.color
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addList(
    options: {
      id: string;
      name: string;
      pos?: string | number;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'lists'),
      method: 'POST',
      params: {
        name: options.name,
        pos: options.pos
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async markedAsViewed(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'markedAsViewed'),
      method: 'POST'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async powerUps(
    options: {
      id: string;
      value: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'powerUps'),
      method: 'POST',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteBoard(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deletePlugin(
    options: {
      id: string;
      idPlugin: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'boardPlugins', options.idPlugin),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteMember(
    options: {
      id: string;
      idMember: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'members', options.idMember),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deletePowerUp(
    options: {
      id: string;
      powerUp: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'powerUps', options.powerUp),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }
}
