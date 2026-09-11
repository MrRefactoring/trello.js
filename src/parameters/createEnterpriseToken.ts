import { z } from 'zod';
import { openEnum } from '#/core';

export const CreateEnterpriseTokenSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: z.string(),
  /** One of: `1hour`, `1day`, `30days`, `never` */
  expiration: openEnum(['1hour', '1day', '30days', 'never']).optional(),
});

export type CreateEnterpriseToken = z.input<typeof CreateEnterpriseTokenSchema>;
