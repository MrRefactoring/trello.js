import { z } from 'zod';

export const UpdateEnterpriseJoinRequestsSchema = z.object({
  /** ID of the Enterprise to retrieve. */
  id: z.string(),
  /** An array of IDs of an Organization resource. */
  idOrganizations: z.array(z.string()),
});

export type UpdateEnterpriseJoinRequests = z.input<typeof UpdateEnterpriseJoinRequestsSchema>;
