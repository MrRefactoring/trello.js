import { z } from 'zod';

export const GetOrganizationTagsSchema = z.object({
  /** The ID or name of the Organization */
  id: z.union([z.string(), z.unknown()]),
});

export type GetOrganizationTags = z.input<typeof GetOrganizationTagsSchema>;
