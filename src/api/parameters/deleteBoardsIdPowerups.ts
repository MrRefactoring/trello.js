export interface DeleteBoardsIdPowerups {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The id of the board to update */
  id: Record<string, any>;
  /** The Power-Up to be enabled on the board. One of: `calendar`, `cardAging`, `recap`, `voting`. */
  powerUp: string;
}
