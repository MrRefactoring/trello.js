export interface PostBoardsIdLists {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The name of the list to be created. 1 to 16384 characters long. */
  name: string;
  /** Determines the position of the list. Valid values: `top`, `bottom`, or a positive number. */
  pos?: string;
}
