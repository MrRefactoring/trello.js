export interface GetSearchMembers {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** Search query 1 to 16384 characters long */
  query: string;
  /** The maximum number of results to return. Maximum of 20. */
  limit?: number;
  idBoard?: Record<string, any>;
  idOrganization?: Record<string, any>;
  onlyOrgMembers?: boolean;
}
