import { z } from 'zod';

export const CreateOrganizationTagSchema = z.object({
  /** The ID or name of the Organization */
  id: z.union([z.string(), z.unknown()]),
});

export type CreateOrganizationTag = z.input<typeof CreateOrganizationTagSchema>;
