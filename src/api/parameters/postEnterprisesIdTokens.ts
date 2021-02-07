export interface PostEnterprisesIdTokens {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** ID of the enterprise to retrieve. */
  id: string;
  /** One of: `1hour`, `1day`, `30days`, `never` */
  expiration?: string;
}
