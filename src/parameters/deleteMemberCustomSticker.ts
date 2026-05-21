import { z } from 'zod';

export const DeleteMemberCustomStickerSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  /** The ID of the uploaded sticker */
  idSticker: z.string(),
});

export type DeleteMemberCustomSticker = z.input<typeof DeleteMemberCustomStickerSchema>;
