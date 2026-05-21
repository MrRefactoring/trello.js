import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const CreateCardStickerSchema = z.object({
  /**
   * For custom stickers, the id of the sticker. For default stickers, the string identifier (like 'taco-cool', see
   * below)
   */
  image: z.string(),
  /** The top position of the sticker, from -60 to 100 */
  top: z.number(),
  /** The left position of the sticker, from -60 to 100 */
  left: z.number(),
  /** The z-index of the sticker */
  zIndex: z.number(),
  /** The rotation of the sticker */
  rotate: z.number().optional(),
  /** The ID of the Card */
  id: TrelloIDSchema,
});

export type CreateCardSticker = z.input<typeof CreateCardStickerSchema>;
