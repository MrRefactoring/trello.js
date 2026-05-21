import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetActionOrganizationSchema = z.object({
  /** The ID of the action */
  id: TrelloIDSchema,
  /** `all` or a comma-separated list of organization fields */
  fields: z
    .union([z.string(), z.array(z.string()), z.enum(['id', 'name']), z.array(z.enum(['id', 'name']))])
    .optional(),
});

export type GetActionOrganization = z.input<typeof GetActionOrganizationSchema>;
