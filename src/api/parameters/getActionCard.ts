export interface GetActionCard {
  /** The ID of the action */
  id: string;
  /** `all` or a comma-separated list of card fields */
  fields?: 'all' | string[];
}
