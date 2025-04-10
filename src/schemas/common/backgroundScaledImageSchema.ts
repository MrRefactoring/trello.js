import { z } from 'zod';

export const backgroundScaledImageSchema = z.object({
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  url: z.string().url()
});

export type BackgroundScaledImage = z.infer<typeof backgroundScaledImageSchema>;
