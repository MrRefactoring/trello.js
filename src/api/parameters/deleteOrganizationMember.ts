export interface DeleteOrganizationMember {
  /** The ID or name of the organization */
  id: string;
  /** The ID of the Member to remove from the team */
  idMember: string;
}
