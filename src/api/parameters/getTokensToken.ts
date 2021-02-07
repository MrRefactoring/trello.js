export interface GetTokensToken {
  /** `all` or a comma-separated list of `dateCreated`, `dateExpires`, `idMember`, `identifier`, `permissions` */
  fields?: Record<string, any>;
  /** Determines whether to include webhooks. */
  webhooks?: boolean;
}
