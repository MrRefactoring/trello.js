export interface PutOrganizationsIdMembersIdmember {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID or name of the organization */
  id: Record<string, any>;
  /** The ID or username of the member to update */
  idMember: Record<string, any>;
  /** One of: `admin`, `normal` */
  type: string;
}
