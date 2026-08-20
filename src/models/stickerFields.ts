import type { z } from 'zod';
import { openEnum } from '#/core';

export const StickerFieldsSchema = openEnum([
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
