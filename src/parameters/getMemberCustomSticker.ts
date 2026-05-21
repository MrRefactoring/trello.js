import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetMemberCustomStickerSchema = z.object({
  /** `all` or a comma-separated list of `scaled`, `url` */
  fields: z.enum(['scaled', 'url', 'all']).optional(),
  /** The ID or username of the member */
  id: TrelloIDSchema,
  /** The ID of the uploaded sticker */
  idSticker: TrelloIDSchema,
});

export type GetMemberCustomSticker = z.input<typeof GetMemberCustomStickerSchema>;
