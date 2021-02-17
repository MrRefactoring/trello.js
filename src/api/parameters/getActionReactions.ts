export interface GetActionReactions {
  /** The ID of the action */
  idAction: string;
  /** Whether to load the member as a nested resource. See [Members Nested Resource](#members-nested-resource) */
  member?: boolean;
  /** Whether to load the emoji as a nested resource. */
  emoji?: boolean;
}
