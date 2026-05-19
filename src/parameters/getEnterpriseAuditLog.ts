import { z } from 'zod';

export const GetEnterpriseAuditLogSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: z.unknown(),
});

export type GetEnterpriseAuditLog = z.input<typeof GetEnterpriseAuditLogSchema>;
