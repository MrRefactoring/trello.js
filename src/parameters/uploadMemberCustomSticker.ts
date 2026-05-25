import { z } from 'zod';

export const UploadMemberCustomStickerSchema = z.object({
  file: z.string(),
  /** The ID or username of the member */
  id: z.string(),
});

export type UploadMemberCustomSticker = z.input<typeof UploadMemberCustomStickerSchema>;
