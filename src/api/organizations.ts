import { AxiosRequestConfig } from 'axios';
import { TrelloClient } from '..';
import { joinUrl } from '../helpers';

export class Organizations {
  private readonly prefix = 'organizations';

  constructor(private readonly client: TrelloClient) { }

  public async getOrganization(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'GET'
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
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'boards'),
      method: 'GET',
      params: {
        filter: options.filter,
        fields: options.fields && options.fields.join(',')
      }
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

  public async getMembersInvited(
    options: {
      id: string;
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'membersInvited'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getMemberships(
    options: {
      id: string;
      filter?: string[];
      member?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'memberships'),
      method: 'GET',
      params: {
        filter: options.filter && options.filter.join(','),
        member: options.member
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getMembership(
    options: {
      id: string;
      idMembership: string;
      member?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'memberships', options.idMembership),
      method: 'GET',
      params: {
        member: options.member
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getPluginData(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'pluginData'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getTags(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'tags'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getBillableGuest(
    options: {
      id: string;
      idBoard: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'newBillableGuests', options.idBoard),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getExports(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'exports'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateOrganization(
    options: {
      id: string;
      name?: string;
      displayName?: string;
      desc?: string;
      website?: string;
      associatedDomain?: string;
      externalMembersDisabled?: boolean;
      googleAppsVersion?: number;
      org?: string;
      private?: string;
      public?: string;
      orgInviteRestrict?: string;
      permissionLevel?: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'PUT',
      params: {
        name: options.name,
        displayName: options.displayName,
        desc: options.desc,
        website: options.website,
        'prefs/associatedDomain': options.associatedDomain,
        'prefs/externalMembersDisabled': options.externalMembersDisabled,
        'prefs/googleAppsVersion': options.googleAppsVersion,
        'prefs/boardVisibilityRestrict/org': options.org,
        'prefs/boardVisibilityRestrict/private': options.private,
        'prefs/boardVisibilityRestrict/public': options.public,
        'prefs/orgInviteRestrict': options.orgInviteRestrict,
        'prefs/permissionLevel': options.permissionLevel
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateMembers(
    options: {
      id: string;
      email: string;
      fullName: string;
      type?: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'members'),
      method: 'PUT',
      params: {
        email: options.email,
        fullName: options.fullName,
        type: options.type
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateMember(
    options: {
      id: string;
      idMember: string;
      type: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'members', options.idMember),
      method: 'PUT',
      params: {
        type: options.type
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async memberDeactivate(
    options: {
      id: string;
      idMember: string;
      value?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'members', options.idMember, 'deactivated'),
      method: 'PUT',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addOrganization(
    options: {
      displayName: string;
      desc?: string;
      name?: string;
      website?: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix),
      method: 'POST',
      params: {
        displayName: options.displayName,
        desc: options.desc,
        name: options.name,
        website: options.website
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async uploadLogo(
    options: {
      id: string;
      file?: string | any;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'logo'),
      method: 'POST',
      params: {
        file: options.file
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async uploadTags(
    options: {
      id: string;
      name: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'tags'),
      method: 'POST',
      params: {
        name: options.name
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async uploadExports(
    options: {
      id: string;
      attachments?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'exports'),
      method: 'POST',
      params: {
        attachments: options.attachments
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteOrganization(
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

  public async deleteLogo(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'logo'),
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

  public async deleteMembersFromAll(
    options: {
      id: string;
      idMember: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'members', options.idMember, 'all'),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteAssociatedDomain(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'prefs', 'associatedDomain'),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteRestrictions(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'prefs', 'orgInviteRestrict'),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteTag(
    options: {
      id: string;
      idTag: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'tags', options.idTag),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }
}
