export interface GetSearchMembers {
  /** Search query 1 to 16384 characters long */
  query: string;
  /** The maximum number of results to return. Maximum of 20. */
  limit?: number;
  idBoard?: string;
  idOrganization?: string;
  onlyOrgMembers?: boolean;
}
