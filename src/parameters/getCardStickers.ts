import { z } from 'zod';

export const GetCardStickersSchema = z.object({
  /** The ID of the Card */
  id: z.string(),
  /**
   * `all` or a comma-separated list of sticker
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum(['id', 'top', 'left', 'zIndex', 'rotate', 'image', 'imageUrl', 'imageScaled']),
      z.array(z.enum(['id', 'top', 'left', 'zIndex', 'rotate', 'image', 'imageUrl', 'imageScaled'])),
    ])
    .optional(),
});

export type GetCardStickers = z.input<typeof GetCardStickersSchema>;
