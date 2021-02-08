export interface GetActionBoard {
  /** The ID of the action */
  id: Record<string, any>;
  /** `all` or a comma-separated list of board fields */
  fields?: Record<string, any>;
}
