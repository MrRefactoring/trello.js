import { z } from 'zod';

export const DeleteMemberCustomStickerSchema = z.object({
  /** The ID or username of the member */
  id: z.unknown(),
  /** The ID of the uploaded sticker */
  idSticker: z.unknown(),
});

export type DeleteMemberCustomSticker = z.input<typeof DeleteMemberCustomStickerSchema>;
