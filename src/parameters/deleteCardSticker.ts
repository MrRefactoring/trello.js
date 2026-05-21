import { z } from 'zod';

export const DeleteCardStickerSchema = z.object({
  /** The ID of the Card */
  id: z.string(),
  /** The ID of the sticker */
  idSticker: z.string(),
});

export type DeleteCardSticker = z.input<typeof DeleteCardStickerSchema>;
