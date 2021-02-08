export interface GetActionCard {
  /** The ID of the action */
  id: Record<string, any>;
  /** `all` or a comma-separated list of card fields */
  fields?: Record<string, any>;
}
