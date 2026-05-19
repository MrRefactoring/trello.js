import { z } from 'zod';

export const GetActionOrganizationSchema = z.object({
  /** The ID of the action */
  id: z.unknown(),
  /** `all` or a comma-separated list of organization fields */
  fields: z.unknown().optional(),
});

export type GetActionOrganization = z.input<typeof GetActionOrganizationSchema>;
