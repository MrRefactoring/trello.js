import { z } from 'zod';
import { LabelSchema } from '../models';

export const GetBoardLabelsSchema = z.object({
  /** The ID of the Board. */
  id: z.string(),
  /** The fields to be returned for the Labels. */
  fields: LabelSchema.optional(),
  /** The number of Labels to be returned. */
  limit: z.number().optional(),
});

export type GetBoardLabels = z.input<typeof GetBoardLabelsSchema>;
