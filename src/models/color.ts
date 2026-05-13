import { z } from 'zod';

export const ColorSchema = z
  .enum(['yellow', 'purple', 'blue', 'red', 'green', 'orange', 'black', 'sky', 'pink', 'lime'])
  .nullable();

export type Color = z.infer<typeof ColorSchema>;
