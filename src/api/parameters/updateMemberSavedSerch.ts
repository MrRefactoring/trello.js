export interface UpdateMemberSavedSerch {
  /** The ID or username of the member */
  id: string;
  /** The ID of the saved search to delete */
  idSearch: string;
  /** The new name for the saved search */
  name?: string;
  /** The new search query */
  query?: string;
  /** New position for saves search. `top`, `bottom`, or a positive float. */
  pos?: string;
}
