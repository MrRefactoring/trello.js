export interface GetTokensToken {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  token: string;
  /** `all` or a comma-separated list of `dateCreated`, `dateExpires`, `idMember`, `identifier`, `permissions` */
  fields?: Record<string, any>;
  /** Determines whether to include webhooks. */
  webhooks?: boolean;
  body?: {};
}
