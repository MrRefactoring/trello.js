export interface GetBoardIdPlugins {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID of the board */
  id: Record<string, any>;
  /** One of: `enabled` or `available` */
  filter?: string;
}
