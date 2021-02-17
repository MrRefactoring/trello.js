export interface GetActionBoard {
  /** The ID of the action */
  id: string;
  /** `all` or a comma-separated list of board fields */
  fields?: 'all' | string[];
}
