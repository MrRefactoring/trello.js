export interface GetActionList {
  /** The ID of the action */
  id: string;
  /** `all` or a comma-separated list of list fields */
  fields?: 'all' | string[];
}
