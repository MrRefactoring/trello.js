import { z } from 'zod';

export const ColorSchema = z
  .enum([
    'yellow',
    'purple',
    'blue',
    'red',
    'green',
    'orange',
    'black',
    'sky',
    'pink',
    'lime',
    'yellow_dark',
    'purple_dark',
    'blue_dark',
    'red_dark',
    'green_dark',
    'orange_dark',
    'black_dark',
    'sky_dark',
    'pink_dark',
    'lime_dark',
    'yellow_light',
    'purple_light',
    'blue_light',
    'red_light',
    'green_light',
    'orange_light',
    'black_light',
    'sky_light',
    'pink_light',
    'lime_light',
  ])
  .nullable();

export type Color = z.infer<typeof ColorSchema>;
