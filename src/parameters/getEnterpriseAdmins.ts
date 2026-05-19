import { z } from 'zod';

export const GetEnterpriseAdminsSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: z.unknown(),
  /** Any valid value that the [nested member field resource]() accepts. */
  fields: z.string().optional(),
});

export type GetEnterpriseAdmins = z.input<typeof GetEnterpriseAdminsSchema>;
