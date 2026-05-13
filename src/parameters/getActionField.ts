import { z } from 'zod';

export const GetActionFieldSchema = z.object({
  /** The ID of the Action */
  id: z.unknown(),
  /** An action field */
  field: z.unknown(),
});

export type GetActionField = z.input<typeof GetActionFieldSchema>;
