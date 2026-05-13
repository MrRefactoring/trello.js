import { z } from 'zod';

export const GetBoardLabelsSchema = z.object({
  /** The ID of the Board. */
  id: z.unknown(),
  /** The fields to be returned for the Labels. */
  fields: z.unknown().optional(),
  /** The number of Labels to be returned. */
  limit: z.number().optional(),
});

export type GetBoardLabels = z.input<typeof GetBoardLabelsSchema>;
