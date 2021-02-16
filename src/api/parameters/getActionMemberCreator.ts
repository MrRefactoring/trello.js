export interface GetActionMemberCreator {
  /** The ID of the Action */
  id: string;
  /** `all` or a comma-separated list of member fields */
  fields?: 'all' | string[];
}
