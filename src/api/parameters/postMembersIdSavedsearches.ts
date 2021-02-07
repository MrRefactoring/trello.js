export interface PostMembersIdSavedsearches {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The name for the saved search */
  name: string;
  /** The search query */
  query: string;
  /** The position of the saved search. `top`, `bottom`, or a positive float. */
  pos: Record<string, any>;
}
