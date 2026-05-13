import { z } from 'zod';

export const GetCardStickerSchema = z.object({
  /** `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields: z.union([z.string(), z.array(z.string())]).optional(),
  /** The ID of the Card */
  id: z.unknown(),
  /** The ID of the sticker */
  idSticker: z.unknown(),
});

export type GetCardSticker = z.input<typeof GetCardStickerSchema>;
