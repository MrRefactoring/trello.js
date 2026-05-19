import { z } from 'zod';

export const GetMemberCustomStickerSchema = z.object({
  /** `all` or a comma-separated list of `scaled`, `url` */
  fields: z.enum(['scaled', 'url', 'all']).optional(),
  /** The ID or username of the member */
  id: z.unknown(),
  /** The ID of the uploaded sticker */
  idSticker: z.unknown(),
});

export type GetMemberCustomSticker = z.input<typeof GetMemberCustomStickerSchema>;
