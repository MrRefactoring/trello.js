export interface PutOrganizationsIdMembers {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID or name of the organization */
  id: Record<string, any>;
  /** An email address */
  email: string;
  /** Name for the member, at least 1 character not beginning or ending with a space */
  fullName: string;
  /** One of: `admin`, `normal` */
  type?: string;
}