export interface GetOrganizationMembership {
  /** The ID or name of the organization */
  id: string;
  /** The ID of the membership to load */
  idMembership: string;
  /** Whether to include the Member object in the response */
  member?: boolean;
}
