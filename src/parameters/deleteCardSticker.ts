import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteCardStickerSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
  /** The ID of the sticker */
  idSticker: TrelloIDSchema,
});

export type DeleteCardSticker = z.input<typeof DeleteCardStickerSchema>;
