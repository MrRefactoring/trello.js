import { z } from 'zod';
import { openEnum } from '#/core';

export const GetCardStickerSchema = z.object({
  /**
   * `all` or a comma-separated list of sticker
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z
    .union([
      openEnum(['id', 'top', 'left', 'zIndex', 'rotate', 'image', 'imageUrl', 'imageScaled']),
      z.array(openEnum(['id', 'top', 'left', 'zIndex', 'rotate', 'image', 'imageUrl', 'imageScaled'])),
    ])
    .optional(),
  /** The ID of the Card */
  id: z.string(),
  /** The ID of the sticker */
  idSticker: z.string(),
});

export type GetCardSticker = z.input<typeof GetCardStickerSchema>;
