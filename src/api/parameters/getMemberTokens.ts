export interface GetMemberTokens {
  /** The ID or username of the member */
  id: string;
  /** Whether to include webhooks */
  webhooks?: boolean;
}
