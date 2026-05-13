import { z } from 'zod';

export const GetListSchema = z.object({
  /** `all` or a comma separated list of List field names. */
  fields: z.string().optional(),
  /** The ID of the list */
  id: z.string(),
});

export type GetList = z.input<typeof GetListSchema>;
