export interface PutListsId {
  /** The ID of the list */
  id: string;
  /** New name for the list */
  name?: string;
  /** Whether the list should be closed (archived) */
  closed?: boolean;
  /** ID of a board the list should be moved to */
  idBoard?: Record<string, any>;
  /** New position for the list: `top`, `bottom`, or a positive floating point number */
  pos?: Record<string, any>;
  /** Whether the active member is subscribed to this list */
  subscribed?: boolean;
}
