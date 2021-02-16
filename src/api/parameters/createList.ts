export interface CreateList {
  /** Name for the list */
  name: string;
  /** The long ID of the board the list should be created on */
  idBoard: Record<string, any>;
  /** ID of the List to copy into the new List */
  idListSource?: Record<string, any>;
  /** Position of the list. `top`, `bottom`, or a positive floating point number */
  pos?: Record<string, any>;
}
