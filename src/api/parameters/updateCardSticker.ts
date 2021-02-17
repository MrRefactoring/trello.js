export interface UpdateCardSticker {
  /** The ID of the Card */
  id: string;
  /** The ID of the sticker */
  idSticker: string;
  /** The top position of the sticker, from -60 to 100 */
  top: number;
  /** The left position of the sticker, from -60 to 100 */
  left: number;
  /** The z-index of the sticker */
  zIndex: number;
  /** The rotation of the sticker */
  rotate?: number;
}
