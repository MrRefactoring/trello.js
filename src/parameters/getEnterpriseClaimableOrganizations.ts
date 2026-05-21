import { z } from 'zod';

export const GetEnterpriseClaimableOrganizationsSchema = z.object({
  /** ID of the enterprise to retrieve */
  id: z.string(),
  /** Limits the number of workspaces to be sorted */
  limit: z.number().optional(),
  /** Specifies the sort order to return matching documents */
  cursor: z.string().optional(),
  /** Name of the enterprise to retrieve workspaces for */
  name: z.string().optional(),
  /** Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace */
  activeSince: z.string().optional(),
  /** Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace */
  inactiveSince: z.string().optional(),
});

export type GetEnterpriseClaimableOrganizations = z.input<typeof GetEnterpriseClaimableOrganizationsSchema>;
