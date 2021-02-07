export interface GetBoardsIdBoardstars {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  boardId: string;
  /** Valid values: mine, none */
  filter: string;
}
