export interface CreatePowerUp {
  /** The id of the board to update */
  id: string;
  /** The Power-Up to be enabled on the board. One of: `calendar`, `cardAging`, `recap`, `voting`. */
  value: string;
}
