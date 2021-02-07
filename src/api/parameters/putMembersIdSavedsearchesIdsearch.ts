export interface PutMembersIdSavedsearchesIdsearch {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The new name for the saved search */
  name?: string;
  /** The new search query */
  query?: string;
  /** New position for saves search. `top`, `bottom`, or a positive float. */
  pos?: string;
}
