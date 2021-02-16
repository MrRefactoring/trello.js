export interface AddOrganizationMember {
  /** The ID or name of the organization */
  id: Record<string, any>;
  /** The ID or username of the member to update */
  idMember: Record<string, any>;
  /** One of: `admin`, `normal` */
  type: string;
}
