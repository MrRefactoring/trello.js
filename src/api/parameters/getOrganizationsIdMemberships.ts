export interface GetOrganizationsIdMemberships {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID or name of the organization */
  id: Record<string, any>;
  /** `all` or a comma-separated list of: `active`, `admin`, `deactivated`, `me`, `normal` */
  filter?: string;
  /** Whether to include the Member objects with the Memberships */
  member?: boolean;
}
