export interface CreateMemberSavedSearch {
  /** The ID or username of the member */
  id: string;
  /** The name for the saved search */
  name: string;
  /** The search query */
  query: string;
  /** The position of the saved search. `top`, `bottom`, or a positive float. */
  pos: 'top' | 'bottom' | number;
}
