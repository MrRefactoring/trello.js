import { z } from 'zod';

export const GetCardFieldSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
  /** The desired field. */
  field: z.unknown(),
});

export type GetCardField = z.input<typeof GetCardFieldSchema>;
