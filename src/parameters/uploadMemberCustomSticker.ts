import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UploadMemberCustomStickerSchema = z.object({
  file: z.string(),
  /** The ID or username of the member */
  id: TrelloIDSchema,
});

export type UploadMemberCustomSticker = z.input<typeof UploadMemberCustomStickerSchema>;
