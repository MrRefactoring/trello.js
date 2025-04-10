import { z } from 'zod';

export const PrimaryColorSchema = z.enum([
  'none',
  'green',
  'yellow',
  'orange',
  'red',
  'purple',
  'blue',
  'sky',
  'lime',
  'pink',
  'black',
]);

export type PrimaryColor = z.infer<typeof PrimaryColorSchema>;
