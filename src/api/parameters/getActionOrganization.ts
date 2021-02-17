export interface GetActionOrganization {
  /** The ID of the action */
  id: string;
  /** `all` or a comma-separated list of organization fields */
  fields?: 'all' | string[];
}
