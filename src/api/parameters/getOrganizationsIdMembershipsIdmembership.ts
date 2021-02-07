export interface GetOrganizationsIdMembershipsIdmembership {
  /** The ID or name of the organization */
  id: Record<string, any>;
  /** The ID of the membership to load */
  idMembership: Record<string, any>;
  /** Whether to include the Member object in the response */
  member?: boolean;
}
