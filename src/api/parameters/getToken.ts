export interface GetToken {
  token: string;
  /** `all` or a comma-separated list of `dateCreated`, `dateExpires`, `idMember`, `identifier`, `permissions` */
  fields?: 'all' | string[];
  /** Determines whether to include webhooks. */
  webhooks?: boolean;
}
