import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetEnterpriseAuditLogSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: TrelloIDSchema,
});

export type GetEnterpriseAuditLog = z.input<typeof GetEnterpriseAuditLogSchema>;
