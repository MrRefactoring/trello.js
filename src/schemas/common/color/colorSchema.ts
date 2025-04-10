import { z } from 'zod';
import { PrimaryColorSchema } from './primaryColorSchema';
import { VariantColorSchema } from './variantColorSchema';

export const ColorSchema = z.union([
  PrimaryColorSchema,
  VariantColorSchema,
]);

export type Color = z.infer<typeof ColorSchema>;
