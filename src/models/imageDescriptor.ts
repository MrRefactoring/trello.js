import { z } from 'zod';
import { apiObject } from '#/core';

export const ImageDescriptorSchema = apiObject({
  width: z.number().optional(),
  height: z.number().optional(),
  url: z.string().optional(),
  id: z.string().nullish(),
  _id: z.string().nullish(),
  bytes: z.number().nullish(),
  scaled: z.boolean().optional(),
});

export type ImageDescriptor = z.infer<typeof ImageDescriptorSchema>;
