import { AxiosRequestConfig } from 'axios';
import { TrelloClient } from '..';
import { joinUrl } from '../helpers';

export class Enterprises {
  private readonly prefix = 'enterprises';

  constructor(private readonly client: TrelloClient) { }

  public async getEnterprize(
    options: {
      id: string;
      fields?: string[];
      members?: string;
      memberFields?: string[];
      memberFilter?: string;
      memberSort?: string;
      memberSortBy?: string;
      memberSortOrder?: string;
      memberStartIndex?: number;
      memberCount?: number;
      organizations?: string;
      organizationFields?: string | any;
      organizationPaidAccounts?: boolean;
      organizationMemberships?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(','),
        members: options.members,
        memberFields: options.memberFields && options.memberFields.join(','),
        memberFilter: options.memberFilter,
        memberSort: options.memberSort,
        memberSortBy: options.memberSortBy,
        memberSortOrder: options.memberSortOrder,
        memberStartIndex: options.memberStartIndex,
        memberCount: options.memberCount,
        organizations: options.organizations,
        organizationFields: options.organizationFields,
        organizationPaidAccounts: options.organizationPaidAccounts,
        organizationMemberships: options.organizationMemberships && options.organizationMemberships.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getAdmins(
    options: {
      id: string;
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'admins'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getSignUpUrl(
    options: {
      id: string;
      authenticate?: boolean;
      confirmationAccepted?: boolean;
      returnUrl?: string;
      tosAccepted?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'signupUrl'),
      method: 'GET',
      params: {
        authenticate: options.authenticate,
        confirmationAccepted: options.confirmationAccepted,
        returnUrl: options.returnUrl,
        tosAccepted: options.tosAccepted
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getMembers(
    options: {
      id: string;
      fields?: string[];
      filter?: string;
      sort?: string;
      sortBy?: string;
      sortOrder?: string;
      startIndex?: number;
      count?: string | number;
      organizationFields?: any;
      boardFields?: any;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'members'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(','),
        filter: options.filter,
        sort: options.sort,
        sortBy: options.sortBy,
        sortOrder: options.sortOrder,
        startIndex: options.startIndex,
        count: options.count,
        organization_fields: options.organizationFields,
        board_fields: options.boardFields
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getMember(
    options: {
      id: string;
      idMember: string;
      fields?: string[];
      organizationFields?: any;
      boardFields?: any;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'members', options.idMember),
      method: 'GET',
      params: {
        idMember: options.idMember,
        fields: options.fields && options.fields.join(','),
        organization_fields: options.organizationFields,
        board_fields: options.boardFields
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getOrganization(
    options: {
      id: string;
      idOrganization: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'transferrable', 'organization', options.idOrganization),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deactivateMember(
    options: {
      id: string;
      idMember: string;
      value: boolean;
      fields?: string[];
      organizationFields?: any;
      boardFields?: any;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'members', options.idMember, 'deactivated'),
      method: 'PUT',
      params: {
        value: options.value,
        fields: options.fields && options.fields.join(','),
        organization_fields: options.organizationFields,
        board_fields: options.boardFields
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async transferOrganization(
    options: {
      id: string;
      idOrganization: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'organizations'),
      method: 'PUT',
      params: {
        idOrganization: options.idOrganization
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async setAdmin(
    options: {
      id: string;
      idMember: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'admins', options.idMember),
      method: 'PUT'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async createToken(
    options: {
      id: string;
      expiration?: string | '1hour' | '1day' | '30days' | 'never';
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'tokens'),
      method: 'POST',
      params: {
        expiration: options.expiration
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteOrganization(
    options: {
      id: string;
      idMember: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'organizations', options.idMember),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteAdmin(
    options: {
      id: string;
      idMember: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'admins', options.idMember),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }
}
