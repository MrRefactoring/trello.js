export interface AddStickerToCard {
  /** The ID of the Card */
  id: string;
  /** For custom stickers, the id of the sticker. For default stickers, the string identifier (like 'taco-cool', see below) */
  image: string;
  /** The top position of the sticker, from -60 to 100 */
  top: number;
  /** The left position of the sticker, from -60 to 100 */
  left: number;
  /** The z-index of the sticker */
  zIndex: number;
  /** The rotation of the sticker */
  rotate?: number;
}
