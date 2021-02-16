export interface CreateList {
  /** Name for the list */
  name: string;
  /** The long ID of the board the list should be created on */
  idBoard: string;
  /** ID of the List to copy into the new List */
  idListSource?: string;
  /** Position of the list. `top`, `bottom`, or a positive floating point number */
  pos?: 'top' | 'bottom' | number;
}
