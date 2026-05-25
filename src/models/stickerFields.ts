import { z } from 'zod';

export const StickerFieldsSchema = z.enum([
  'id',
  'top',
  'left',
  'zIndex',
  'rotate',
  'image',
  'imageUrl',
  'imageScaled',
]);

export type StickerFields = z.infer<typeof StickerFieldsSchema>;
