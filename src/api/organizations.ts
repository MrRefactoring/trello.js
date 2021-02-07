import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Organizations {
  constructor(private client: Client) { }
  /**
     * Create a new team */
  async postOrganizations<T = any>(parameters: Parameters.PostOrganizations, callback: Callback<T>): Promise<void>;
  /**
     * Create a new team */
  async postOrganizations<T = any>(parameters: Parameters.PostOrganizations, callback?: undefined): Promise<T>;
  async postOrganizations<T = any>(parameters: Parameters.PostOrganizations, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/organizations',
      method: 'POST',
      params: {
        key: parameters.key,
        token: parameters.token,
        displayName: parameters.displayName,
        desc: parameters.desc,
        name: parameters.name,
        website: parameters.website,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postOrganizations' });
  }
  async getOrganizationsId<T = Models.Organization>(callback?: Callback<T>): Promise<void>;
  async getOrganizationsId<T = Models.Organization>(callback?: undefined): Promise<T>;
  async getOrganizationsId<T = Models.Organization>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationsId' });
  }
  /**
     * Update an organization */
  async putOrganizationsId<T = Models.Organization>(parameters: Parameters.PutOrganizationsId, callback: Callback<T>): Promise<void>;
  /**
     * Update an organization */
  async putOrganizationsId<T = Models.Organization>(parameters: Parameters.PutOrganizationsId, callback?: undefined): Promise<T>;
  async putOrganizationsId<T = Models.Organization>(parameters: Parameters.PutOrganizationsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}`,
      method: 'PUT',
      params: {
        key: parameters.key,
        token: parameters.token,
        name: parameters.name,
        displayName: parameters.displayName,
        desc: parameters.desc,
        website: parameters.website,
        'prefs/associatedDomain': parameters.associatedDomain,
        'prefs/externalMembersDisabled': parameters.externalMembersDisabled,
        'prefs/googleAppsVersion': parameters.googleAppsVersion,
        'prefs/boardVisibilityRestrict/org': parameters.boardVisibilityRestrict / org,
        'prefs/boardVisibilityRestrict/private': parameters.boardVisibilityRestrict / private,
        'prefs/boardVisibilityRestrict/public': parameters.boardVisibilityRestrict / public,
        'prefs/orgInviteRestrict': parameters.orgInviteRestrict,
        'prefs/permissionLevel': parameters.permissionLevel,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putOrganizationsId' });
  }
  /**
     * Delete an Organization */
  async deleteOrganizationsId<T = any>(callback?: Callback<T>): Promise<void>;
  /**
     * Delete an Organization */
  async deleteOrganizationsId<T = any>(callback?: undefined): Promise<T>;
  async deleteOrganizationsId<T = any>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteOrganizationsId' });
  }
  async getOrganizationsIdField<T = Models.Organization>(parameters: Parameters.GetOrganizationsIdField, callback: Callback<T>): Promise<void>;
  async getOrganizationsIdField<T = Models.Organization>(parameters: Parameters.GetOrganizationsIdField, callback?: undefined): Promise<T>;
  async getOrganizationsIdField<T = Models.Organization>(parameters: Parameters.GetOrganizationsIdField, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/${parameters.field}`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationsIdField' });
  }
  /**
     * List the actions on a team */
  async getOrganizationsIdActions<T = any>(parameters: Parameters.GetOrganizationsIdActions, callback: Callback<T>): Promise<void>;
  /**
     * List the actions on a team */
  async getOrganizationsIdActions<T = any>(parameters: Parameters.GetOrganizationsIdActions, callback?: undefined): Promise<T>;
  async getOrganizationsIdActions<T = any>(parameters: Parameters.GetOrganizationsIdActions, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/actions`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationsIdActions' });
  }
  /**
     * List the boards in a team */
  async getOrganizationsIdBoards<T = any>(parameters: Parameters.GetOrganizationsIdBoards, callback: Callback<T>): Promise<void>;
  /**
     * List the boards in a team */
  async getOrganizationsIdBoards<T = any>(parameters: Parameters.GetOrganizationsIdBoards, callback?: undefined): Promise<T>;
  async getOrganizationsIdBoards<T = any>(parameters: Parameters.GetOrganizationsIdBoards, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/boards`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        filter: parameters.filter,
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationsIdBoards' });
  }
  /**
     * Retrieve the exports that exist for the given organization */
  async getOrganizationsIdExports<T = any>(callback?: Callback<T>): Promise<void>;
  /**
     * Retrieve the exports that exist for the given organization */
  async getOrganizationsIdExports<T = any>(callback?: undefined): Promise<T>;
  async getOrganizationsIdExports<T = any>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/exports`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationsIdExports' });
  }
  /**
     * Kick off CSV export for an organization */
  async postOrganizationsIdExports<T = Models.Export>(parameters: Parameters.PostOrganizationsIdExports, callback: Callback<T>): Promise<void>;
  /**
     * Kick off CSV export for an organization */
  async postOrganizationsIdExports<T = Models.Export>(parameters: Parameters.PostOrganizationsIdExports, callback?: undefined): Promise<T>;
  async postOrganizationsIdExports<T = Models.Export>(parameters: Parameters.PostOrganizationsIdExports, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/exports`,
      method: 'POST',
      params: {
        key: parameters.key,
        token: parameters.token,
        attachments: parameters.attachments,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postOrganizationsIdExports' });
  }
  /**
     * List the members in a team */
  async getOrganizationsIdMembers<T = any>(parameters: Parameters.GetOrganizationsIdMembers, callback: Callback<T>): Promise<void>;
  /**
     * List the members in a team */
  async getOrganizationsIdMembers<T = any>(parameters: Parameters.GetOrganizationsIdMembers, callback?: undefined): Promise<T>;
  async getOrganizationsIdMembers<T = any>(parameters: Parameters.GetOrganizationsIdMembers, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/members`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationsIdMembers' });
  }
  async putOrganizationsIdMembers<T = any>(parameters: Parameters.PutOrganizationsIdMembers, callback: Callback<T>): Promise<void>;
  async putOrganizationsIdMembers<T = any>(parameters: Parameters.PutOrganizationsIdMembers, callback?: undefined): Promise<T>;
  async putOrganizationsIdMembers<T = any>(parameters: Parameters.PutOrganizationsIdMembers, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/members`,
      method: 'PUT',
      params: {
        key: parameters.key,
        token: parameters.token,
        email: parameters.email,
        fullName: parameters.fullName,
        type: parameters.type,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putOrganizationsIdMembers' });
  }
  /**
     * List the memberships of a team */
  async getOrganizationsIdMemberships<T = any>(parameters: Parameters.GetOrganizationsIdMemberships, callback: Callback<T>): Promise<void>;
  /**
     * List the memberships of a team */
  async getOrganizationsIdMemberships<T = any>(parameters: Parameters.GetOrganizationsIdMemberships, callback?: undefined): Promise<T>;
  async getOrganizationsIdMemberships<T = any>(parameters: Parameters.GetOrganizationsIdMemberships, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/memberships`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        filter: parameters.filter,
        member: parameters.member,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationsIdMemberships' });
  }
  /**
     * Get a single Membership for an Organization */
  async getOrganizationsIdMembershipsIdmembership<T = any>(parameters: Parameters.GetOrganizationsIdMembershipsIdmembership, callback: Callback<T>): Promise<void>;
  /**
     * Get a single Membership for an Organization */
  async getOrganizationsIdMembershipsIdmembership<T = any>(parameters: Parameters.GetOrganizationsIdMembershipsIdmembership, callback?: undefined): Promise<T>;
  async getOrganizationsIdMembershipsIdmembership<T = any>(parameters: Parameters.GetOrganizationsIdMembershipsIdmembership, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/memberships/${parameters.idMembership}`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        member: parameters.member,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationsIdMembershipsIdmembership' });
  }
  /**
     * Get organization scoped pluginData on this team */
  async getOrganizationsIdPlugindata<T = any>(parameters: Parameters.GetOrganizationsIdPlugindata, callback: Callback<T>): Promise<void>;
  /**
     * Get organization scoped pluginData on this team */
  async getOrganizationsIdPlugindata<T = any>(parameters: Parameters.GetOrganizationsIdPlugindata, callback?: undefined): Promise<T>;
  async getOrganizationsIdPlugindata<T = any>(parameters: Parameters.GetOrganizationsIdPlugindata, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/pluginData`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationsIdPlugindata' });
  }
  /**
     * List the organization's collections */
  async getOrganizationsIdTags<T = any>(callback?: Callback<T>): Promise<void>;
  /**
     * List the organization's collections */
  async getOrganizationsIdTags<T = any>(callback?: undefined): Promise<T>;
  async getOrganizationsIdTags<T = any>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/tags`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationsIdTags' });
  }
  /**
     * Create a Tag in an Organization */
  async postOrganizationsIdTags<T = any>(callback?: Callback<T>): Promise<void>;
  /**
     * Create a Tag in an Organization */
  async postOrganizationsIdTags<T = any>(callback?: undefined): Promise<T>;
  async postOrganizationsIdTags<T = any>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/tags`,
      method: 'POST',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postOrganizationsIdTags' });
  }
  /**
     * Add a member to a team or update their member type. */
  async putOrganizationsIdMembersIdmember<T = any>(parameters: Parameters.PutOrganizationsIdMembersIdmember, callback: Callback<T>): Promise<void>;
  /**
     * Add a member to a team or update their member type. */
  async putOrganizationsIdMembersIdmember<T = any>(parameters: Parameters.PutOrganizationsIdMembersIdmember, callback?: undefined): Promise<T>;
  async putOrganizationsIdMembersIdmember<T = any>(parameters: Parameters.PutOrganizationsIdMembersIdmember, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/members/${parameters.idMember}`,
      method: 'PUT',
      params: {
        key: parameters.key,
        token: parameters.token,
        type: parameters.type,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putOrganizationsIdMembersIdmember' });
  }
  /**
     * Remove a member from a team */
  async deleteOrganizationsIdMembers<T = any>(parameters: Parameters.DeleteOrganizationsIdMembers, callback: Callback<T>): Promise<void>;
  /**
     * Remove a member from a team */
  async deleteOrganizationsIdMembers<T = any>(parameters: Parameters.DeleteOrganizationsIdMembers, callback?: undefined): Promise<T>;
  async deleteOrganizationsIdMembers<T = any>(parameters: Parameters.DeleteOrganizationsIdMembers, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/members/${parameters.idMember}`,
      method: 'DELETE',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteOrganizationsIdMembers' });
  }
  /**
     * Deactivate or reactivate a member of a team */
  async putOrganizationsIdMembersIdmemberDeactivated<T = any>(parameters: Parameters.PutOrganizationsIdMembersIdmemberDeactivated, callback: Callback<T>): Promise<void>;
  /**
     * Deactivate or reactivate a member of a team */
  async putOrganizationsIdMembersIdmemberDeactivated<T = any>(parameters: Parameters.PutOrganizationsIdMembersIdmemberDeactivated, callback?: undefined): Promise<T>;
  async putOrganizationsIdMembersIdmemberDeactivated<T = any>(parameters: Parameters.PutOrganizationsIdMembersIdmemberDeactivated, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/members/${parameters.idMember}/deactivated`,
      method: 'PUT',
      params: {
        key: parameters.key,
        token: parameters.token,
        value: parameters.value,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putOrganizationsIdMembersIdmemberDeactivated' });
  }
  /**
     * Set the logo image for a team */
  async postOrganizationsIdLogo<T = any>(parameters: Parameters.PostOrganizationsIdLogo, callback: Callback<T>): Promise<void>;
  /**
     * Set the logo image for a team */
  async postOrganizationsIdLogo<T = any>(parameters: Parameters.PostOrganizationsIdLogo, callback?: undefined): Promise<T>;
  async postOrganizationsIdLogo<T = any>(parameters: Parameters.PostOrganizationsIdLogo, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/logo`,
      method: 'POST',
      params: {
        key: parameters.key,
        token: parameters.token,
        file: parameters.file,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postOrganizationsIdLogo' });
  }
  /**
     * Delete a the logo from a team */
  async deleteOrganizationsIdLogo<T = any>(parameters: Parameters.DeleteOrganizationsIdLogo, callback: Callback<T>): Promise<void>;
  /**
     * Delete a the logo from a team */
  async deleteOrganizationsIdLogo<T = any>(parameters: Parameters.DeleteOrganizationsIdLogo, callback?: undefined): Promise<T>;
  async deleteOrganizationsIdLogo<T = any>(parameters: Parameters.DeleteOrganizationsIdLogo, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/logo`,
      method: 'DELETE',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteOrganizationsIdLogo' });
  }
  /**
     * Remove a member from a team and from all team boards */
  async organizationsIdMembersIdmemberAll<T = any>(parameters: Parameters.OrganizationsIdMembersIdmemberAll, callback: Callback<T>): Promise<void>;
  /**
     * Remove a member from a team and from all team boards */
  async organizationsIdMembersIdmemberAll<T = any>(parameters: Parameters.OrganizationsIdMembersIdmemberAll, callback?: undefined): Promise<T>;
  async organizationsIdMembersIdmemberAll<T = any>(parameters: Parameters.OrganizationsIdMembersIdmemberAll, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/members/${parameters.idMember}/all`,
      method: 'DELETE',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'organizationsIdMembersIdmemberAll' });
  }
  /**
     * Remove the associated Google Apps domain from a team */
  async deleteOrganizationsIdPrefsAssociateddomain<T = any>(parameters: Parameters.DeleteOrganizationsIdPrefsAssociateddomain, callback: Callback<T>): Promise<void>;
  /**
     * Remove the associated Google Apps domain from a team */
  async deleteOrganizationsIdPrefsAssociateddomain<T = any>(parameters: Parameters.DeleteOrganizationsIdPrefsAssociateddomain, callback?: undefined): Promise<T>;
  async deleteOrganizationsIdPrefsAssociateddomain<T = any>(parameters: Parameters.DeleteOrganizationsIdPrefsAssociateddomain, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/prefs/associatedDomain`,
      method: 'DELETE',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteOrganizationsIdPrefsAssociateddomain' });
  }
  /**
     * Remove the email domain restriction on who can be invited to the team */
  async deleteOrganizationsIdPrefsOrginviterestrict<T = any>(parameters: Parameters.DeleteOrganizationsIdPrefsOrginviterestrict, callback: Callback<T>): Promise<void>;
  /**
     * Remove the email domain restriction on who can be invited to the team */
  async deleteOrganizationsIdPrefsOrginviterestrict<T = any>(parameters: Parameters.DeleteOrganizationsIdPrefsOrginviterestrict, callback?: undefined): Promise<T>;
  async deleteOrganizationsIdPrefsOrginviterestrict<T = any>(parameters: Parameters.DeleteOrganizationsIdPrefsOrginviterestrict, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/prefs/orgInviteRestrict`,
      method: 'DELETE',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteOrganizationsIdPrefsOrginviterestrict' });
  }
  /**
     * Delete an organization's tag */
  async deleteOrganizationsIdTagsIdtag<T = any>(parameters: Parameters.DeleteOrganizationsIdTagsIdtag, callback: Callback<T>): Promise<void>;
  /**
     * Delete an organization's tag */
  async deleteOrganizationsIdTagsIdtag<T = any>(parameters: Parameters.DeleteOrganizationsIdTagsIdtag, callback?: undefined): Promise<T>;
  async deleteOrganizationsIdTagsIdtag<T = any>(parameters: Parameters.DeleteOrganizationsIdTagsIdtag, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/tags/${parameters.idTag}`,
      method: 'DELETE',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteOrganizationsIdTagsIdtag' });
  }
  /**
     * Used to check whether the given board has new billable guests on it. */
  async getOrganizationsIdNewbillableguestsIdboard<T = any>(parameters: Parameters.GetOrganizationsIdNewbillableguestsIdboard, callback: Callback<T>): Promise<void>;
  /**
     * Used to check whether the given board has new billable guests on it. */
  async getOrganizationsIdNewbillableguestsIdboard<T = any>(parameters: Parameters.GetOrganizationsIdNewbillableguestsIdboard, callback?: undefined): Promise<T>;
  async getOrganizationsIdNewbillableguestsIdboard<T = any>(parameters: Parameters.GetOrganizationsIdNewbillableguestsIdboard, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/organizations/${parameters.id}/newBillableGuests/${parameters.idBoard}`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getOrganizationsIdNewbillableguestsIdboard' });
  }
}
