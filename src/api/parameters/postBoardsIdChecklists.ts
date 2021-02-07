export interface PostBoardsIdChecklists {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The id of the board to update */
  id: string;
  /** The name of the checklist to be created. 1 to 16384 characters long. */
  name: string;
}
