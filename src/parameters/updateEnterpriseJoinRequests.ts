import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateEnterpriseJoinRequestsSchema = z.object({
  /** ID of the Enterprise to retrieve. */
  id: TrelloIDSchema,
  /** An array of IDs of an Organization resource. */
  idOrganizations: z.array(z.unknown()),
});

export type UpdateEnterpriseJoinRequests = z.input<typeof UpdateEnterpriseJoinRequestsSchema>;
