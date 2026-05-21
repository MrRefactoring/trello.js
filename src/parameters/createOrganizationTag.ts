import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const CreateOrganizationTagSchema = z.object({
  /** The ID or name of the Organization */
  id: z.union([z.string(), TrelloIDSchema]),
});

export type CreateOrganizationTag = z.input<typeof CreateOrganizationTagSchema>;
