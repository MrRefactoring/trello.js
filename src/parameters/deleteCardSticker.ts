import { z } from 'zod';

export const DeleteCardStickerSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
  /** The ID of the sticker */
  idSticker: z.unknown(),
});

export type DeleteCardSticker = z.input<typeof DeleteCardStickerSchema>;
