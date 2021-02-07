export interface GetActionsIdCard {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID of the action */
  id: Record<string, any>;
  /** `all` or a comma-separated list of card fields */
  fields?: Record<string, any>;
}
