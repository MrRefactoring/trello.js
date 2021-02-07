export interface GetActionsIdactionReactionsId {
  id: string;
  idAction: string;
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** Whether to load the member as a nested resource. See [Members Nested Resource](#members-nested-resource) */
  member?: boolean;
  /** Whether to load the emoji as a nested resource. */
  emoji?: boolean;
}
