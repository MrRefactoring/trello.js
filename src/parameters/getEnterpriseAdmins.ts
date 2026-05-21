import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetEnterpriseAdminsSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: TrelloIDSchema,
  /** Any valid value that the [nested member field resource]() accepts. */
  fields: z.string().optional(),
});

export type GetEnterpriseAdmins = z.input<typeof GetEnterpriseAdminsSchema>;
