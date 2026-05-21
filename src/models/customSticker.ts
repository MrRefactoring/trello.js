import { z } from 'zod';
import { apiObject } from '#/core';
import { ImageDescriptorSchema } from '#/models/imageDescriptor';
import { LimitsSchema } from '#/models/limits';

export const CustomStickerSchema = apiObject({
  id: z.string(),
  url: z.string().optional(),
  scaled: z.array(ImageDescriptorSchema).optional(),
  image: z.string().nullish(),
  imageScaled: z.array(ImageDescriptorSchema).optional(),
  imageUrl: z.string().nullish(),
  left: z.number().optional(),
  limits: LimitsSchema.optional(),
  rotate: z.number().optional(),
  top: z.number().optional(),
  zIndex: z.number().optional(),
});

export type CustomSticker = z.infer<typeof CustomStickerSchema>;
