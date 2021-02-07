export interface GetListsId {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** `all` or a comma separated list of List field names. */
  fields?: string;
}
