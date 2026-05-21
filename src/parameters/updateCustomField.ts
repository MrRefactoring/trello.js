import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateCustomFieldSchema = z.object({
  /** ID of the Custom Field. */
  id: TrelloIDSchema,
  /** The name of the Custom Field */
  name: z.string().optional(),
  pos: z.union([z.string(), z.number(), z.enum(['top', 'bottom'])]).optional(),
  /** Whether to display this custom field on the front of cards */
  'display/cardFront': z.boolean().optional(),
});

export type UpdateCustomField = z.input<typeof UpdateCustomFieldSchema>;
