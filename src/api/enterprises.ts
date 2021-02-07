import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Enterprises {
  constructor(private client: Client) { }

  /**
   * Get an enterprise by its ID. */
  async getEnterprisesId<T = any>(parameters: Parameters.GetEnterprisesId, callback: Callback<T>): Promise<void>;
  /**
   * Get an enterprise by its ID. */
  async getEnterprisesId<T = any>(parameters: Parameters.GetEnterprisesId, callback?: undefined): Promise<T>;
  async getEnterprisesId<T = any>(parameters: Parameters.GetEnterprisesId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/enterprises/${parameters.id}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
        members: parameters.members,
        member_fields: parameters.member_fields,
        member_filter: parameters.member_filter,
        member_sort: parameters.member_sort,
        member_sortBy: parameters.member_sortBy,
        member_sortOrder: parameters.member_sortOrder,
        member_startIndex: parameters.member_startIndex,
        member_count: parameters.member_count,
        organizations: parameters.organizations,
        organization_fields: parameters.organization_fields,
        organization_paid_accounts: parameters.organization_paid_accounts,
        organization_memberships: parameters.organization_memberships,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getEnterprisesId' });
  }

  /**
   * Returns an array of Actions related to the Enterprise object. Used for populating data sent to Google Sheets from an Enterprise's audit log page: https://trello.com/e/{enterprise_name}/admin/auditlog. An Enterprise admin token is required for this route. */
  async getEnterprisesIdAuditLog<T = any>(parameters: Parameters.GetEnterprisesIdAuditLog, callback?: Callback<T>): Promise<void>;
  /**
   * Returns an array of Actions related to the Enterprise object. Used for populating data sent to Google Sheets from an Enterprise's audit log page: https://trello.com/e/{enterprise_name}/admin/auditlog. An Enterprise admin token is required for this route. */
  async getEnterprisesIdAuditLog<T = any>(parameters: Parameters.GetEnterprisesIdAuditLog, callback?: undefined): Promise<T>;
  async getEnterprisesIdAuditLog<T = any>(parameters: Parameters.GetEnterprisesIdAuditLog, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/enterprises/${parameters.id}/auditlog`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getEnterprisesIdAuditLog' });
  }

  /**
   * Get an enterprise's admin members. */
  async getEnterprisesIdAdmins<T = Models.Enterprise>(parameters: Parameters.GetEnterprisesIdAdmins, callback: Callback<T>): Promise<void>;
  /**
   * Get an enterprise's admin members. */
  async getEnterprisesIdAdmins<T = Models.Enterprise>(parameters: Parameters.GetEnterprisesIdAdmins, callback?: undefined): Promise<T>;
  async getEnterprisesIdAdmins<T = Models.Enterprise>(parameters: Parameters.GetEnterprisesIdAdmins, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/enterprises/${parameters.id}/admins`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getEnterprisesIdAdmins' });
  }

  /**
   * Get the signup URL for an enterprise. */
  async getEnterprisesIdSignupurl<T = any>(parameters: Parameters.GetEnterprisesIdSignupurl, callback: Callback<T>): Promise<void>;
  /**
   * Get the signup URL for an enterprise. */
  async getEnterprisesIdSignupurl<T = any>(parameters: Parameters.GetEnterprisesIdSignupurl, callback?: undefined): Promise<T>;
  async getEnterprisesIdSignupurl<T = any>(parameters: Parameters.GetEnterprisesIdSignupurl, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/enterprises/${parameters.id}/signupUrl`,
      method: 'GET',
      params: {
        authenticate: parameters.authenticate,
        confirmationAccepted: parameters.confirmationAccepted,
        returnUrl: parameters.returnUrl,
        tosAccepted: parameters.tosAccepted,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getEnterprisesIdSignupurl' });
  }

  /**
   * Get the members of an enterprise. */
  async getEnterprisesIdMembers<T = any>(parameters: Parameters.GetEnterprisesIdMembers, callback: Callback<T>): Promise<void>;
  /**
   * Get the members of an enterprise. */
  async getEnterprisesIdMembers<T = any>(parameters: Parameters.GetEnterprisesIdMembers, callback?: undefined): Promise<T>;
  async getEnterprisesIdMembers<T = any>(parameters: Parameters.GetEnterprisesIdMembers, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/enterprises/${parameters.id}/members`,
      method: 'GET',
      params: {
        fields: parameters.fields,
        filter: parameters.filter,
        sort: parameters.sort,
        sortBy: parameters.sortBy,
        sortOrder: parameters.sortOrder,
        startIndex: parameters.startIndex,
        count: parameters.count,
        organization_fields: parameters.organization_fields,
        board_fields: parameters.board_fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getEnterprisesIdMembers' });
  }

  /**
   * Get a specific member of an enterprise by ID. */
  async getEnterprisesIdMembersIdmember<T = Models.Member>(parameters: Parameters.GetEnterprisesIdMembersIdmember, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific member of an enterprise by ID. */
  async getEnterprisesIdMembersIdmember<T = Models.Member>(parameters: Parameters.GetEnterprisesIdMembersIdmember, callback?: undefined): Promise<T>;
  async getEnterprisesIdMembersIdmember<T = Models.Member>(parameters: Parameters.GetEnterprisesIdMembersIdmember, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/enterprises/${parameters.id}/members/${parameters.idMember}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
        organization_fields: parameters.organization_fields,
        board_fields: parameters.board_fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getEnterprisesIdMembersIdmember' });
  }

  /**
   * Get whether an organization can be transferred to an enterprise. */
  async getEnterprisesIdTransferrableOrganizationIdOrganization<T = Models.Organization>(parameters: Parameters.GetEnterprisesIdTransferrableOrganizationIdOrganization, callback: Callback<T>): Promise<void>;
  /**
   * Get whether an organization can be transferred to an enterprise. */
  async getEnterprisesIdTransferrableOrganizationIdOrganization<T = Models.Organization>(parameters: Parameters.GetEnterprisesIdTransferrableOrganizationIdOrganization, callback?: undefined): Promise<T>;
  async getEnterprisesIdTransferrableOrganizationIdOrganization<T = Models.Organization>(parameters: Parameters.GetEnterprisesIdTransferrableOrganizationIdOrganization, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/enterprises/${parameters.id}/transferrable/organization/${parameters.idOrganization}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getEnterprisesIdTransferrableOrganizationIdOrganization' });
  }

  /**
   * Create an auth Token for an Enterprise. */
  async postEnterprisesIdTokens<T = any>(parameters: Parameters.PostEnterprisesIdTokens, callback: Callback<T>): Promise<void>;
  /**
   * Create an auth Token for an Enterprise. */
  async postEnterprisesIdTokens<T = any>(parameters: Parameters.PostEnterprisesIdTokens, callback?: undefined): Promise<T>;
  async postEnterprisesIdTokens<T = any>(parameters: Parameters.PostEnterprisesIdTokens, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/enterprises/${parameters.id}/tokens`,
      method: 'POST',
      params: {
        expiration: parameters.expiration,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postEnterprisesIdTokens' });
  }

  /**
   * Transfer an organization to an enterprise. */
  async putEnterprisesIdOrganizations<T = any>(parameters: Parameters.PutEnterprisesIdOrganizations, callback: Callback<T>): Promise<void>;
  /**
   * Transfer an organization to an enterprise. */
  async putEnterprisesIdOrganizations<T = any>(parameters: Parameters.PutEnterprisesIdOrganizations, callback?: undefined): Promise<T>;
  async putEnterprisesIdOrganizations<T = any>(parameters: Parameters.PutEnterprisesIdOrganizations, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/enterprises/${parameters.id}/organizations`,
      method: 'PUT',
      params: {
        idOrganization: parameters.idOrganization,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putEnterprisesIdOrganizations' });
  }

  /**
   * This endpoint is used to update whether the provided Member should use one of the Enterprise's available licenses or not. */
  async putEnterprisesIdMembersIdmemberLicensed<T = Models.Member>(parameters: Parameters.PutEnterprisesIdMembersIdmemberLicensed, callback: Callback<T>): Promise<void>;
  /**
   * This endpoint is used to update whether the provided Member should use one of the Enterprise's available licenses or not. */
  async putEnterprisesIdMembersIdmemberLicensed<T = Models.Member>(parameters: Parameters.PutEnterprisesIdMembersIdmemberLicensed, callback?: undefined): Promise<T>;
  async putEnterprisesIdMembersIdmemberLicensed<T = Models.Member>(parameters: Parameters.PutEnterprisesIdMembersIdmemberLicensed, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/enterprises/${parameters.id}/members/${parameters.idMember}/licensed`,
      method: 'PUT',
      params: {
        Values: parameters.Values,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putEnterprisesIdMembersIdmemberLicensed' });
  }

  /**
   * Deactivate a Member of an Enterprise. */
  async enterprisesIdMembersIdMemberDeactivated<T = any>(parameters: Parameters.EnterprisesIdMembersIdMemberDeactivated, callback: Callback<T>): Promise<void>;
  /**
   * Deactivate a Member of an Enterprise. */
  async enterprisesIdMembersIdMemberDeactivated<T = any>(parameters: Parameters.EnterprisesIdMembersIdMemberDeactivated, callback?: undefined): Promise<T>;
  async enterprisesIdMembersIdMemberDeactivated<T = any>(parameters: Parameters.EnterprisesIdMembersIdMemberDeactivated, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/enterprises/${parameters.id}/members/${parameters.idMember}/deactivated`,
      method: 'PUT',
      params: {
        value: parameters.value,
        fields: parameters.fields,
        organization_fields: parameters.organization_fields,
        board_fields: parameters.board_fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'enterprisesIdMembersIdMemberDeactivated' });
  }

  /**
   * Make Member an admin of Enterprise. */
  async putEnterprisesIdAdminsIdmember<T = any>(parameters: Parameters.PutEnterprisesIdAdminsIdmember, callback: Callback<T>): Promise<void>;
  /**
   * Make Member an admin of Enterprise. */
  async putEnterprisesIdAdminsIdmember<T = any>(parameters: Parameters.PutEnterprisesIdAdminsIdmember, callback?: undefined): Promise<T>;
  async putEnterprisesIdAdminsIdmember<T = any>(parameters: Parameters.PutEnterprisesIdAdminsIdmember, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/enterprises/${parameters.id}/admins/${parameters.idMember}`,
      method: 'PUT',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putEnterprisesIdAdminsIdmember' });
  }

  /**
   * Remove an organization from an enterprise. */
  async deleteEnterprisesIdOrganizationsIdorg<T = any>(parameters: Parameters.DeleteEnterprisesIdOrganizationsIdorg, callback: Callback<T>): Promise<void>;
  /**
   * Remove an organization from an enterprise. */
  async deleteEnterprisesIdOrganizationsIdorg<T = any>(parameters: Parameters.DeleteEnterprisesIdOrganizationsIdorg, callback?: undefined): Promise<T>;
  async deleteEnterprisesIdOrganizationsIdorg<T = any>(parameters: Parameters.DeleteEnterprisesIdOrganizationsIdorg, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/enterprises/${parameters.id}/organizations/${parameters.idOrg}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteEnterprisesIdOrganizationsIdorg' });
  }

  /**
   * Remove an member as admin from an enterprise. */
  async enterprisesIdOrganizationsIdmember<T = any>(parameters: Parameters.EnterprisesIdOrganizationsIdmember, callback: Callback<T>): Promise<void>;
  /**
   * Remove an member as admin from an enterprise. */
  async enterprisesIdOrganizationsIdmember<T = any>(parameters: Parameters.EnterprisesIdOrganizationsIdmember, callback?: undefined): Promise<T>;
  async enterprisesIdOrganizationsIdmember<T = any>(parameters: Parameters.EnterprisesIdOrganizationsIdmember, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/enterprises/${parameters.id}/organizations/${parameters.idMember}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'enterprisesIdOrganizationsIdmember' });
  }
}
