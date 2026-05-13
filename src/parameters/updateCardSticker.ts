import { z } from 'zod';

export const UpdateCardStickerSchema = z.object({
  /** The top position of the sticker, from -60 to 100 */
  top: z.number(),
  /** The left position of the sticker, from -60 to 100 */
  left: z.number(),
  /** The z-index of the sticker */
  zIndex: z.number(),
  /** The rotation of the sticker */
  rotate: z.number().optional(),
  /** The ID of the Card */
  id: z.unknown(),
  /** The ID of the sticker */
  idSticker: z.unknown(),
});

export type UpdateCardSticker = z.input<typeof UpdateCardStickerSchema>;
