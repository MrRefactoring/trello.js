export interface PutEnterprisesIdOrganizations {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use. Note: This must be an Enterprise admin's token. */
  token: Record<string, any>;
  /** ID of the Enterprise to retrieve. */
  id: Record<string, any>;
  /** ID of Organization to be transferred to Enterprise. */
  idOrganization: string;
}
