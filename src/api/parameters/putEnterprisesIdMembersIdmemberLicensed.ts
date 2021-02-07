export interface PutEnterprisesIdMembersIdmemberLicensed {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use. Note: This must be an Enterprise admin's token. */
  token: Record<string, any>;
  /** ID of the Enterprise. */
  id: Record<string, any>;
  /** The ID of the Member */
  idMember: Record<string, any>;
  /** Boolean value to determine whether the user should be given an Enterprise license (true) or not (false). */
  Values: boolean;
}
