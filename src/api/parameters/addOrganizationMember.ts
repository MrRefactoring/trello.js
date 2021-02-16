export interface AddOrganizationMember {
  /** The ID or name of the organization */
  id: string;
  /** The ID or username of the member to update */
  idMember: string;
  /** One of: `admin`, `normal` */
  type: string;
}
