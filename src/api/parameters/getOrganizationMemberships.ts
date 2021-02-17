export interface GetOrganizationMemberships {
  /** The ID or name of the organization */
  id: string;
  /** `all` or a comma-separated list of: `active`, `admin`, `deactivated`, `me`, `normal` */
  filter?: string;
  /** Whether to include the Member objects with the Memberships */
  member?: boolean;
}
