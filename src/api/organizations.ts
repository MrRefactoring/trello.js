import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Organizations {
  constructor(private client: Client) {}

  /** Create a new team */
  async createOrganization<T = unknown>(
    parameters: Parameters.CreateOrganization,
    callback: Callback<T>
  ): Promise<void>;
  /** Create a new team */
  async createOrganization<T = unknown>(parameters: Parameters.CreateOrganization, callback?: undefined): Promise<T>;
  async createOrganization<T = unknown>(
    parameters: Parameters.CreateOrganization,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: '/organizations',
      method: 'POST',
      params: {
        displayName: parameters.displayName,
        desc: parameters.desc,
        name: parameters.name,
        website: parameters.website,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'createOrganization' });
  }

  async getOrganization<T = Models.Organization>(
    parameters: Parameters.GetOrganization,
    callback: Callback<T>
  ): Promise<void>;
  async getOrganization<T = Models.Organization>(
    parameters: Parameters.GetOrganization,
    callback?: undefined
  ): Promise<T>;
  async getOrganization<T = Models.Organization>(
    parameters: Parameters.GetOrganization,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getOrganization' });
  }

  /** Update an organization */
  async updateOrganization<T = Models.Organization>(
    parameters: Parameters.UpdateOrganization,
    callback: Callback<T>
  ): Promise<void>;
  /** Update an organization */
  async updateOrganization<T = Models.Organization>(
    parameters: Parameters.UpdateOrganization,
    callback?: undefined
  ): Promise<T>;
  async updateOrganization<T = Models.Organization>(
    parameters: Parameters.UpdateOrganization,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}`,
      method: 'PUT',
      params: {
        name: parameters.name,
        displayName: parameters.displayName,
        desc: parameters.desc,
        website: parameters.website,
        'prefs/associatedDomain': parameters.associatedDomain,
        'prefs/externalMembersDisabled': parameters.externalMembersDisabled,
        'prefs/googleAppsVersion': parameters.googleAppsVersion,
        'prefs/boardVisibilityRestrict/org': parameters.org,
        'prefs/boardVisibilityRestrict/private': parameters.private,
        'prefs/boardVisibilityRestrict/public': parameters.public,
        'prefs/orgInviteRestrict': parameters.orgInviteRestrict,
        'prefs/permissionLevel': parameters.permissionLevel,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateOrganization' });
  }

  /** Delete an Organization */
  async deleteOrganization<T = unknown>(
    parameters: Parameters.DeleteOrganization,
    callback: Callback<T>
  ): Promise<void>;
  /** Delete an Organization */
  async deleteOrganization<T = unknown>(parameters: Parameters.DeleteOrganization, callback?: undefined): Promise<T>;
  async deleteOrganization<T = unknown>(
    parameters: Parameters.DeleteOrganization,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteOrganization' });
  }

  async getOrganizationField<T = Models.Organization>(
    parameters: Parameters.GetOrganizationField,
    callback: Callback<T>
  ): Promise<void>;
  async getOrganizationField<T = Models.Organization>(
    parameters: Parameters.GetOrganizationField,
    callback?: undefined
  ): Promise<T>;
  async getOrganizationField<T = Models.Organization>(
    parameters: Parameters.GetOrganizationField,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/${parameters.field}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationField' });
  }

  /** List the actions on a team */
  async getOrganizationActions<T = unknown>(
    parameters: Parameters.GetOrganizationActions,
    callback: Callback<T>
  ): Promise<void>;
  /** List the actions on a team */
  async getOrganizationActions<T = unknown>(
    parameters: Parameters.GetOrganizationActions,
    callback?: undefined
  ): Promise<T>;
  async getOrganizationActions<T = unknown>(
    parameters: Parameters.GetOrganizationActions,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/actions`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationActions' });
  }

  /** List the boards in a team */
  async getOrganizationBoards<T = unknown>(
    parameters: Parameters.GetOrganizationBoards,
    callback: Callback<T>
  ): Promise<void>;
  /** List the boards in a team */
  async getOrganizationBoards<T = unknown>(
    parameters: Parameters.GetOrganizationBoards,
    callback?: undefined
  ): Promise<T>;
  async getOrganizationBoards<T = unknown>(
    parameters: Parameters.GetOrganizationBoards,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/boards`,
      method: 'GET',
      params: {
        filter: parameters.filter,
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationBoards' });
  }

  /** Retrieve the exports that exist for the given organization */
  async getOrganizationExports<T = unknown>(
    parameters: Parameters.GetOrganizationExports,
    callback: Callback<T>
  ): Promise<void>;
  /** Retrieve the exports that exist for the given organization */
  async getOrganizationExports<T = unknown>(
    parameters: Parameters.GetOrganizationExports,
    callback?: undefined
  ): Promise<T>;
  async getOrganizationExports<T = unknown>(
    parameters: Parameters.GetOrganizationExports,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/exports`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationExports' });
  }

  /** Kick off CSV export for an organization */
  async exportOrganizationCSV<T = Models.Export>(
    parameters: Parameters.ExportOrganizationCSV,
    callback: Callback<T>
  ): Promise<void>;
  /** Kick off CSV export for an organization */
  async exportOrganizationCSV<T = Models.Export>(
    parameters: Parameters.ExportOrganizationCSV,
    callback?: undefined
  ): Promise<T>;
  async exportOrganizationCSV<T = Models.Export>(
    parameters: Parameters.ExportOrganizationCSV,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/exports`,
      method: 'POST',
      params: {
        attachments: parameters.attachments,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'exportOrganizationCSV' });
  }

  /** List the members in a team */
  async getOrganizationMembers<T = unknown>(
    parameters: Parameters.GetOrganizationMembers,
    callback: Callback<T>
  ): Promise<void>;
  /** List the members in a team */
  async getOrganizationMembers<T = unknown>(
    parameters: Parameters.GetOrganizationMembers,
    callback?: undefined
  ): Promise<T>;
  async getOrganizationMembers<T = unknown>(
    parameters: Parameters.GetOrganizationMembers,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/members`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationMembers' });
  }

  async updateOrganizationMember<T = unknown>(
    parameters: Parameters.UpdateOrganizationMember,
    callback: Callback<T>
  ): Promise<void>;
  async updateOrganizationMember<T = unknown>(
    parameters: Parameters.UpdateOrganizationMember,
    callback?: undefined
  ): Promise<T>;
  async updateOrganizationMember<T = unknown>(
    parameters: Parameters.UpdateOrganizationMember,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/members`,
      method: 'PUT',
      params: {
        email: parameters.email,
        fullName: parameters.fullName,
        type: parameters.type,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateOrganizationMember' });
  }

  /** List the memberships of a team */
  async getOrganizationMemberships<T = unknown>(
    parameters: Parameters.GetOrganizationMemberships,
    callback: Callback<T>
  ): Promise<void>;
  /** List the memberships of a team */
  async getOrganizationMemberships<T = unknown>(
    parameters: Parameters.GetOrganizationMemberships,
    callback?: undefined
  ): Promise<T>;
  async getOrganizationMemberships<T = unknown>(
    parameters: Parameters.GetOrganizationMemberships,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/memberships`,
      method: 'GET',
      params: {
        filter: parameters.filter,
        member: parameters.member,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationMemberships' });
  }

  /** Get a single Membership for an Organization */
  async getOrganizationMembership<T = unknown>(
    parameters: Parameters.GetOrganizationMembership,
    callback: Callback<T>
  ): Promise<void>;
  /** Get a single Membership for an Organization */
  async getOrganizationMembership<T = unknown>(
    parameters: Parameters.GetOrganizationMembership,
    callback?: undefined
  ): Promise<T>;
  async getOrganizationMembership<T = unknown>(
    parameters: Parameters.GetOrganizationMembership,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/memberships/${parameters.idMembership}`,
      method: 'GET',
      params: {
        member: parameters.member,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationMembership' });
  }

  /** Get organization scoped pluginData on this team */
  async getOrganizationPluginData<T = unknown>(
    parameters: Parameters.GetOrganizationPluginData,
    callback: Callback<T>
  ): Promise<void>;
  /** Get organization scoped pluginData on this team */
  async getOrganizationPluginData<T = unknown>(
    parameters: Parameters.GetOrganizationPluginData,
    callback?: undefined
  ): Promise<T>;
  async getOrganizationPluginData<T = unknown>(
    parameters: Parameters.GetOrganizationPluginData,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/pluginData`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationPluginData' });
  }

  /** List the organization's collections */
  async getOrganizationTags<T = unknown>(
    parameters: Parameters.GetOrganizationTags,
    callback: Callback<T>
  ): Promise<void>;
  /** List the organization's collections */
  async getOrganizationTags<T = unknown>(parameters: Parameters.GetOrganizationTags, callback?: undefined): Promise<T>;
  async getOrganizationTags<T = unknown>(
    parameters: Parameters.GetOrganizationTags,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/tags`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationTags' });
  }

  /** Create a Tag in an Organization */
  async createOrganizationTag<T = unknown>(
    parameters: Parameters.CreateOrganizationTag,
    callback: Callback<T>
  ): Promise<void>;
  /** Create a Tag in an Organization */
  async createOrganizationTag<T = unknown>(
    parameters: Parameters.CreateOrganizationTag,
    callback?: undefined
  ): Promise<T>;
  async createOrganizationTag<T = unknown>(
    parameters: Parameters.CreateOrganizationTag,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/tags`,
      method: 'POST',
    };

    return this.client.sendRequest(config, callback, { methodName: 'createOrganizationTag' });
  }

  /** Add a member to a team or update their member type. */
  async addOrganizationMember<T = unknown>(
    parameters: Parameters.AddOrganizationMember,
    callback: Callback<T>
  ): Promise<void>;
  /** Add a member to a team or update their member type. */
  async addOrganizationMember<T = unknown>(
    parameters: Parameters.AddOrganizationMember,
    callback?: undefined
  ): Promise<T>;
  async addOrganizationMember<T = unknown>(
    parameters: Parameters.AddOrganizationMember,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/members/${parameters.idMember}`,
      method: 'PUT',
      params: {
        type: parameters.type,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'addOrganizationMember' });
  }

  /** Remove a member from a team */
  async deleteOrganizationMember<T = unknown>(
    parameters: Parameters.DeleteOrganizationMember,
    callback: Callback<T>
  ): Promise<void>;
  /** Remove a member from a team */
  async deleteOrganizationMember<T = unknown>(
    parameters: Parameters.DeleteOrganizationMember,
    callback?: undefined
  ): Promise<T>;
  async deleteOrganizationMember<T = unknown>(
    parameters: Parameters.DeleteOrganizationMember,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/members/${parameters.idMember}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteOrganizationMember' });
  }

  /** Deactivate or reactivate a member of a team */
  async updateOrganizationDeactivateStatus<T = unknown>(
    parameters: Parameters.UpdateOrganizationDeactivateStatus,
    callback: Callback<T>
  ): Promise<void>;
  /** Deactivate or reactivate a member of a team */
  async updateOrganizationDeactivateStatus<T = unknown>(
    parameters: Parameters.UpdateOrganizationDeactivateStatus,
    callback?: undefined
  ): Promise<T>;
  async updateOrganizationDeactivateStatus<T = unknown>(
    parameters: Parameters.UpdateOrganizationDeactivateStatus,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/members/${parameters.idMember}/deactivated`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateOrganizationDeactivateStatus' });
  }

  /** Set the logo image for a team */
  async setOrganizationLogo<T = unknown>(
    parameters: Parameters.SetOrganizationLogo,
    callback: Callback<T>
  ): Promise<void>;
  /** Set the logo image for a team */
  async setOrganizationLogo<T = unknown>(parameters: Parameters.SetOrganizationLogo, callback?: undefined): Promise<T>;
  async setOrganizationLogo<T = unknown>(
    parameters: Parameters.SetOrganizationLogo,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/logo`,
      method: 'POST',
      params: {
        file: parameters.file,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'setOrganizationLogo' });
  }

  /** Delete a the logo from a team */
  async deleteOrganizationLogo<T = unknown>(
    parameters: Parameters.DeleteOrganizationLogo,
    callback: Callback<T>
  ): Promise<void>;
  /** Delete a the logo from a team */
  async deleteOrganizationLogo<T = unknown>(
    parameters: Parameters.DeleteOrganizationLogo,
    callback?: undefined
  ): Promise<T>;
  async deleteOrganizationLogo<T = unknown>(
    parameters: Parameters.DeleteOrganizationLogo,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/logo`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteOrganizationLogo' });
  }

  /** Remove a member from a team and from all team boards */
  async deleteOrganizationMemberFromAll<T = unknown>(
    parameters: Parameters.DeleteOrganizationMemberFromAll,
    callback: Callback<T>
  ): Promise<void>;
  /** Remove a member from a team and from all team boards */
  async deleteOrganizationMemberFromAll<T = unknown>(
    parameters: Parameters.DeleteOrganizationMemberFromAll,
    callback?: undefined
  ): Promise<T>;
  async deleteOrganizationMemberFromAll<T = unknown>(
    parameters: Parameters.DeleteOrganizationMemberFromAll,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/members/${parameters.idMember}/all`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteOrganizationMemberFromAll' });
  }

  /** Remove the associated Google Apps domain from a team */
  async deleteOrganizationAssociatedDomain<T = unknown>(
    parameters: Parameters.DeleteOrganizationAssociatedDomain,
    callback: Callback<T>
  ): Promise<void>;
  /** Remove the associated Google Apps domain from a team */
  async deleteOrganizationAssociatedDomain<T = unknown>(
    parameters: Parameters.DeleteOrganizationAssociatedDomain,
    callback?: undefined
  ): Promise<T>;
  async deleteOrganizationAssociatedDomain<T = unknown>(
    parameters: Parameters.DeleteOrganizationAssociatedDomain,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/prefs/associatedDomain`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteOrganizationAssociatedDomain' });
  }

  /** Remove the email domain restriction on who can be invited to the team */
  async deleteOrganizationInvites<T = unknown>(
    parameters: Parameters.DeleteOrganizationInvites,
    callback: Callback<T>
  ): Promise<void>;
  /** Remove the email domain restriction on who can be invited to the team */
  async deleteOrganizationInvites<T = unknown>(
    parameters: Parameters.DeleteOrganizationInvites,
    callback?: undefined
  ): Promise<T>;
  async deleteOrganizationInvites<T = unknown>(
    parameters: Parameters.DeleteOrganizationInvites,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/prefs/orgInviteRestrict`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteOrganizationInvites' });
  }

  /** Delete an organization's tag */
  async deleteOrganizationTag<T = unknown>(
    parameters: Parameters.DeleteOrganizationTag,
    callback: Callback<T>
  ): Promise<void>;
  /** Delete an organization's tag */
  async deleteOrganizationTag<T = unknown>(
    parameters: Parameters.DeleteOrganizationTag,
    callback?: undefined
  ): Promise<T>;
  async deleteOrganizationTag<T = unknown>(
    parameters: Parameters.DeleteOrganizationTag,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/tags/${parameters.idTag}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteOrganizationTag' });
  }

  /** Used to check whether the given board has new billable guests on it. */
  async getOrganizationNewBillableGuestBoard<T = unknown>(
    parameters: Parameters.GetOrganizationNewBillableGuestBoard,
    callback: Callback<T>
  ): Promise<void>;
  /** Used to check whether the given board has new billable guests on it. */
  async getOrganizationNewBillableGuestBoard<T = unknown>(
    parameters: Parameters.GetOrganizationNewBillableGuestBoard,
    callback?: undefined
  ): Promise<T>;
  async getOrganizationNewBillableGuestBoard<T = unknown>(
    parameters: Parameters.GetOrganizationNewBillableGuestBoard,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/newBillableGuests/${parameters.idBoard}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationNewBillableGuestBoard' });
  }
}
