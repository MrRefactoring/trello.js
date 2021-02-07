export interface GetMembersIdTokens {
  /** The ID or username of the member */
  id: Record<string, any>;
  /** Whether to include webhooks */
  webhooks?: boolean;
}
