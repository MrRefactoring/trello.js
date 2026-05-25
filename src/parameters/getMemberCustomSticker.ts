import { z } from 'zod';

export const GetMemberCustomStickerSchema = z.object({
  /** `all` or a comma-separated list of `scaled`, `url` */
  fields: z.enum(['scaled', 'url', 'all']).optional(),
  /** The ID or username of the member */
  id: z.string(),
  /** The ID of the uploaded sticker */
  idSticker: z.string(),
});

export type GetMemberCustomSticker = z.input<typeof GetMemberCustomStickerSchema>;
