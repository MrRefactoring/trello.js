import { z } from 'zod';

export const VariantColorSchema = z.enum([
  'green_dark',
  'yellow_dark',
  'orange_dark',
  'red_dark',
  'purple_dark',
  'blue_dark',
  'sky_dark',
  'lime_dark',
  'pink_dark',
  'black_dark',
  'green_light',
  'yellow_light',
  'orange_light',
  'red_light',
  'purple_light',
  'blue_light',
  'sky_light',
  'lime_light',
  'pink_light',
  'black_light',
]);

export type VariantColor = z.infer<typeof VariantColorSchema>;
