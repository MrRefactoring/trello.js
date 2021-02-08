export interface GetActionMemberCreator {
  /** The ID of the Action */
  id: Record<string, any>;
  /** `all` or a comma-separated list of member fields */
  fields?: Record<string, any>;
}
