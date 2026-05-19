import { z } from 'zod';
import { apiObject } from '#/core/apiObject';
import { ImageDescriptorSchema } from '#/models/imageDescriptor';
import { LimitsSchema } from '#/models/limits';

export const CardStickerSchema = apiObject({
  id: z.string(),
  top: z.number().optional(),
  left: z.number().optional(),
  zIndex: z.number().optional(),
  rotate: z.number().optional(),
  image: z.string().optional(),
  imageUrl: z.string().optional(),
  imageScaled: z.array(ImageDescriptorSchema).optional(),
  limits: LimitsSchema.optional(),
});

export type CardSticker = z.infer<typeof CardStickerSchema>;
