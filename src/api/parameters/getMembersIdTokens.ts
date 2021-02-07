export interface GetMembersIdTokens {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID or username of the member */
  id: Record<string, any>;
  /** Whether to include webhooks */
  webhooks?: boolean;
}
