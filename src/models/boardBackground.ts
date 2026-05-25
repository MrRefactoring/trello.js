import { z } from 'zod';
import { apiObject } from '#/core';
import { ImageDescriptorSchema } from '#/models/imageDescriptor';

export const BoardBackgroundSchema = apiObject({
  id: z.string(),
  attribution: apiObject({
    url: z.string().nullish(),
    name: z.string().nullish(),
    license: z.string().nullish(),
  }).nullish(),
  bottomColor: z.string().nullish(),
  brightness: z.string().nullish(),
  color: z.string().nullish(),
  darkColor: z.string().nullish(),
  darkFullSizeUrl: z.string().nullish(),
  emoji: z.string().nullish(),
  fullSizeUrl: z.string().nullish(),
  pack: apiObject({
    name: z.string().optional(),
  }).nullish(),
  scaled: z.array(ImageDescriptorSchema).optional(),
  tile: z.boolean().optional(),
  topColor: z.string().nullish(),
  type: z.string().nullish(),
  version: z.number().optional(),
});

export type BoardBackground = z.infer<typeof BoardBackgroundSchema>;
