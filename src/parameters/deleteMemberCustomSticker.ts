import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteMemberCustomStickerSchema = z.object({
  /** The ID or username of the member */
  id: TrelloIDSchema,
  /** The ID of the uploaded sticker */
  idSticker: TrelloIDSchema,
});

export type DeleteMemberCustomSticker = z.input<typeof DeleteMemberCustomStickerSchema>;
