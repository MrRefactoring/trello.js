import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Organizations {
  constructor(private client: Client) {}

  /** Create a new Workspace */
  async createOrganization<T = unknown>(
    parameters: Parameters.CreateOrganization,
    callback: Callback<T>,
  ): Promise<void>;
  /** Create a new Workspace */
  async createOrganization<T = unknown>(parameters: Parameters.CreateOrganization, callback?: never): Promise<T>;
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

    return this.client.sendRequest(config, callback);
  }

  async getOrganization<T = Models.Organization>(
    parameters: Parameters.GetOrganization,
    callback: Callback<T>,
  ): Promise<void>;
  async getOrganization<T = Models.Organization>(parameters: Parameters.GetOrganization, callback?: never): Promise<T>;
  async getOrganization<T = Models.Organization>(
    parameters: Parameters.GetOrganization,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Update an organization */
  async updateOrganization<T = Models.Organization>(
    parameters: Parameters.UpdateOrganization,
    callback: Callback<T>,
  ): Promise<void>;
  /** Update an organization */
  async updateOrganization<T = Models.Organization>(
    parameters: Parameters.UpdateOrganization,
    callback?: never,
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

    return this.client.sendRequest(config, callback);
  }

  /** Delete an Organization */
  async deleteOrganization<T = unknown>(
    parameters: Parameters.DeleteOrganization,
    callback: Callback<T>,
  ): Promise<void>;
  /** Delete an Organization */
  async deleteOrganization<T = unknown>(parameters: Parameters.DeleteOrganization, callback?: never): Promise<T>;
  async deleteOrganization<T = unknown>(
    parameters: Parameters.DeleteOrganization,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback);
  }

  async getOrganizationField<T = Models.Organization>(
    parameters: Parameters.GetOrganizationField,
    callback: Callback<T>,
  ): Promise<void>;
  async getOrganizationField<T = Models.Organization>(
    parameters: Parameters.GetOrganizationField,
    callback?: never,
  ): Promise<T>;
  async getOrganizationField<T = Models.Organization>(
    parameters: Parameters.GetOrganizationField,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/${parameters.field}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /** List the actions on a Workspace */
  async getOrganizationActions<T = Models.Action[]>(
    parameters: Parameters.GetOrganizationActions,
    callback: Callback<T>,
  ): Promise<void>;
  /** List the actions on a Workspace */
  async getOrganizationActions<T = Models.Action[]>(
    parameters: Parameters.GetOrganizationActions,
    callback?: never,
  ): Promise<T>;
  async getOrganizationActions<T = Models.Action[]>(
    parameters: Parameters.GetOrganizationActions,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/actions`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /** List the boards in a Workspace */
  async getOrganizationBoards<T = Array<Models.Board>>(
    parameters: Parameters.GetOrganizationBoards,
    callback: Callback<T>,
  ): Promise<void>;
  /** List the boards in a Workspace */
  async getOrganizationBoards<T = Array<Models.Board>>(
    parameters: Parameters.GetOrganizationBoards,
    callback?: never,
  ): Promise<T>;
  async getOrganizationBoards<T = Array<Models.Board>>(
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

    return this.client.sendRequest(config, callback);
  }

  /** Retrieve the exports that exist for the given organization */
  async getOrganizationExports<T = Models.Export[]>(
    parameters: Parameters.GetOrganizationExports,
    callback: Callback<T>,
  ): Promise<void>;
  /** Retrieve the exports that exist for the given organization */
  async getOrganizationExports<T = Models.Export[]>(
    parameters: Parameters.GetOrganizationExports,
    callback?: never,
  ): Promise<T>;
  async getOrganizationExports<T = Models.Export[]>(
    parameters: Parameters.GetOrganizationExports,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/exports`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Kick off CSV export for an organization */
  async exportOrganizationCSV<T = Models.Export>(
    parameters: Parameters.ExportOrganizationCSV,
    callback: Callback<T>,
  ): Promise<void>;
  /** Kick off CSV export for an organization */
  async exportOrganizationCSV<T = Models.Export>(
    parameters: Parameters.ExportOrganizationCSV,
    callback?: never,
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

    return this.client.sendRequest(config, callback);
  }

  /** List the members in a Workspace */
  async getOrganizationMembers<T = Array<Models.Member>>(
    parameters: Parameters.GetOrganizationMembers,
    callback: Callback<T>,
  ): Promise<void>;
  /** List the members in a Workspace */
  async getOrganizationMembers<T = Array<Models.Member>>(
    parameters: Parameters.GetOrganizationMembers,
    callback?: never,
  ): Promise<T>;
  async getOrganizationMembers<T = Array<Models.Member>>(
    parameters: Parameters.GetOrganizationMembers,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/members`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  async updateOrganizationMember<T = unknown>(
    parameters: Parameters.UpdateOrganizationMember,
    callback: Callback<T>,
  ): Promise<void>;
  async updateOrganizationMember<T = unknown>(
    parameters: Parameters.UpdateOrganizationMember,
    callback?: never,
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

    return this.client.sendRequest(config, callback);
  }

  /** List the memberships of a Workspace */
  async getOrganizationMemberships<T = Array<Models.Memberships>>(
    parameters: Parameters.GetOrganizationMemberships,
    callback: Callback<T>,
  ): Promise<void>;
  /** List the memberships of a Workspace */
  async getOrganizationMemberships<T = Array<Models.Memberships>>(
    parameters: Parameters.GetOrganizationMemberships,
    callback?: never,
  ): Promise<T>;
  async getOrganizationMemberships<T = Array<Models.Memberships>>(
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

    return this.client.sendRequest(config, callback);
  }

  /** Get a single Membership for an Organization */
  async getOrganizationMembership<T = unknown>(
    parameters: Parameters.GetOrganizationMembership,
    callback: Callback<T>,
  ): Promise<void>;
  /** Get a single Membership for an Organization */
  async getOrganizationMembership<T = unknown>(
    parameters: Parameters.GetOrganizationMembership,
    callback?: never,
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

    return this.client.sendRequest(config, callback);
  }

  /** Get organization scoped pluginData on this Workspace */
  async getOrganizationPluginData<T = Array<Models.PluginData>>(
    parameters: Parameters.GetOrganizationPluginData,
    callback: Callback<T>,
  ): Promise<void>;
  /** Get organization scoped pluginData on this Workspace */
  async getOrganizationPluginData<T = Array<Models.PluginData>>(
    parameters: Parameters.GetOrganizationPluginData,
    callback?: never,
  ): Promise<T>;
  async getOrganizationPluginData<T = Array<Models.PluginData>>(
    parameters: Parameters.GetOrganizationPluginData,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/pluginData`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /** List the organization's collections */
  async getOrganizationTags<T = Array<Models.Tag>>(
    parameters: Parameters.GetOrganizationTags,
    callback: Callback<T>,
  ): Promise<void>;
  /** List the organization's collections */
  async getOrganizationTags<T = Array<Models.Tag>>(
    parameters: Parameters.GetOrganizationTags,
    callback?: never,
  ): Promise<T>;
  async getOrganizationTags<T = Array<Models.Tag>>(
    parameters: Parameters.GetOrganizationTags,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/tags`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Create a Tag in an Organization */
  async createOrganizationTag<T = unknown>(
    parameters: Parameters.CreateOrganizationTag,
    callback: Callback<T>,
  ): Promise<void>;
  /** Create a Tag in an Organization */
  async createOrganizationTag<T = unknown>(parameters: Parameters.CreateOrganizationTag, callback?: never): Promise<T>;
  async createOrganizationTag<T = unknown>(
    parameters: Parameters.CreateOrganizationTag,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/tags`,
      method: 'POST',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Add a member to a Workspace or update their member type. */
  async addOrganizationMember<T = unknown>(
    parameters: Parameters.AddOrganizationMember,
    callback: Callback<T>,
  ): Promise<void>;
  /** Add a member to a Workspace or update their member type. */
  async addOrganizationMember<T = unknown>(parameters: Parameters.AddOrganizationMember, callback?: never): Promise<T>;
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

    return this.client.sendRequest(config, callback);
  }

  /** Remove a member from a Workspace */
  async deleteOrganizationMember<T = unknown>(
    parameters: Parameters.DeleteOrganizationMember,
    callback: Callback<T>,
  ): Promise<void>;
  /** Remove a member from a Workspace */
  async deleteOrganizationMember<T = unknown>(
    parameters: Parameters.DeleteOrganizationMember,
    callback?: never,
  ): Promise<T>;
  async deleteOrganizationMember<T = unknown>(
    parameters: Parameters.DeleteOrganizationMember,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/members/${parameters.idMember}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Deactivate or reactivate a member of a Workspace */
  async updateOrganizationDeactivateStatus<T = unknown>(
    parameters: Parameters.UpdateOrganizationDeactivateStatus,
    callback: Callback<T>,
  ): Promise<void>;
  /** Deactivate or reactivate a member of a Workspace */
  async updateOrganizationDeactivateStatus<T = unknown>(
    parameters: Parameters.UpdateOrganizationDeactivateStatus,
    callback?: never,
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

    return this.client.sendRequest(config, callback);
  }

  /** Set the logo image for a Workspace */
  async setOrganizationLogo<T = unknown>(
    parameters: Parameters.SetOrganizationLogo,
    callback: Callback<T>,
  ): Promise<void>;
  /** Set the logo image for a Workspace */
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

    return this.client.sendRequest(config, callback);
  }

  /** Delete a logo from a Workspace */
  async deleteOrganizationLogo<T = unknown>(
    parameters: Parameters.DeleteOrganizationLogo,
    callback: Callback<T>,
  ): Promise<void>;
  /** Delete a logo from a Workspace */
  async deleteOrganizationLogo<T = unknown>(
    parameters: Parameters.DeleteOrganizationLogo,
    callback?: never,
  ): Promise<T>;
  async deleteOrganizationLogo<T = unknown>(
    parameters: Parameters.DeleteOrganizationLogo,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/logo`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Remove a member from a Workspace and from all Workspace boards */
  async deleteOrganizationMemberFromAll<T = unknown>(
    parameters: Parameters.DeleteOrganizationMemberFromAll,
    callback: Callback<T>,
  ): Promise<void>;
  /** Remove a member from a Workspace and from all Workspace boards */
  async deleteOrganizationMemberFromAll<T = unknown>(
    parameters: Parameters.DeleteOrganizationMemberFromAll,
    callback?: never,
  ): Promise<T>;
  async deleteOrganizationMemberFromAll<T = unknown>(
    parameters: Parameters.DeleteOrganizationMemberFromAll,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/members/${parameters.idMember}/all`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Remove the associated Google Apps domain from a Workspace */
  async deleteOrganizationAssociatedDomain<T = unknown>(
    parameters: Parameters.DeleteOrganizationAssociatedDomain,
    callback: Callback<T>,
  ): Promise<void>;
  /** Remove the associated Google Apps domain from a Workspace */
  async deleteOrganizationAssociatedDomain<T = unknown>(
    parameters: Parameters.DeleteOrganizationAssociatedDomain,
    callback?: never,
  ): Promise<T>;
  async deleteOrganizationAssociatedDomain<T = unknown>(
    parameters: Parameters.DeleteOrganizationAssociatedDomain,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/prefs/associatedDomain`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Remove the email domain restriction on who can be invited to the Workspace */
  async deleteOrganizationInvites<T = unknown>(
    parameters: Parameters.DeleteOrganizationInvites,
    callback: Callback<T>,
  ): Promise<void>;
  /** Remove the email domain restriction on who can be invited to the Workspace */
  async deleteOrganizationInvites<T = unknown>(
    parameters: Parameters.DeleteOrganizationInvites,
    callback?: never,
  ): Promise<T>;
  async deleteOrganizationInvites<T = unknown>(
    parameters: Parameters.DeleteOrganizationInvites,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/prefs/orgInviteRestrict`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Delete an organization's tag */
  async deleteOrganizationTag<T = unknown>(
    parameters: Parameters.DeleteOrganizationTag,
    callback: Callback<T>,
  ): Promise<void>;
  /** Delete an organization's tag */
  async deleteOrganizationTag<T = unknown>(parameters: Parameters.DeleteOrganizationTag, callback?: never): Promise<T>;
  async deleteOrganizationTag<T = unknown>(
    parameters: Parameters.DeleteOrganizationTag,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/tags/${parameters.idTag}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback);
  }

  /** Used to check whether the given board has new billable guests on it. */
  async getOrganizationNewBillableGuestBoard<T = unknown>(
    parameters: Parameters.GetOrganizationNewBillableGuestBoard,
    callback: Callback<T>,
  ): Promise<void>;
  /** Used to check whether the given board has new billable guests on it. */
  async getOrganizationNewBillableGuestBoard<T = unknown>(
    parameters: Parameters.GetOrganizationNewBillableGuestBoard,
    callback?: never,
  ): Promise<T>;
  async getOrganizationNewBillableGuestBoard<T = unknown>(
    parameters: Parameters.GetOrganizationNewBillableGuestBoard,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/organizations/${parameters.id}/newBillableGuests/${parameters.idBoard}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }
}
