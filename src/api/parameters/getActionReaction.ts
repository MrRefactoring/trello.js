export interface GetActionReaction {
  /** The ID of the Action */
  idAction: string;
  /** The ID of the reaction */
  id: string;
  /** Whether to load the member as a nested resource. See [Members Nested Resource](#members-nested-resource) */
  member?: boolean;
  /** Whether to load the emoji as a nested resource. */
  emoji?: boolean;
}
