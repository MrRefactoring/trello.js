import { z } from 'zod';

export const GetEnterprisePendingOrganizationsSchema = z.object({
  /** ID of the enterprise to retrieve */
  id: z.unknown(),
  /** Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace */
  activeSince: z.string().optional(),
  /** Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace */
  inactiveSince: z.string().optional(),
});

export type GetEnterprisePendingOrganizations = z.input<typeof GetEnterprisePendingOrganizationsSchema>;
