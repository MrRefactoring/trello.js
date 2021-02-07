export interface PutCardsIdStickersIdsticker {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The top position of the sticker, from -60 to 100 */
  top: number;
  /** The left position of the sticker, from -60 to 100 */
  left: number;
  /** The z-index of the sticker */
  zIndex: number;
  /** The rotation of the sticker */
  rotate?: number;
}
