export interface DeletePowerUp {
  /** The id of the board to update */
  id: Record<string, any>;
  /** The Power-Up to be enabled on the board. One of: `calendar`, `cardAging`, `recap`, `voting`. */
  powerUp: string;
}
