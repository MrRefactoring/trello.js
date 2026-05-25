import { z } from 'zod';

export const CreateEnterpriseTokenSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: z.string(),
  /** One of: `1hour`, `1day`, `30days`, `never` */
  expiration: z.union([z.string(), z.enum(['1hour', '1day', '30days', 'never'])]).optional(),
});

export type CreateEnterpriseToken = z.input<typeof CreateEnterpriseTokenSchema>;
