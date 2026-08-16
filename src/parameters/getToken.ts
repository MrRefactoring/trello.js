import { z } from 'zod';
import { openEnum } from '#/core';

export const GetTokenSchema = z.object({
  token: z.string(),
  /** `all` or a comma-separated list of `dateCreated`, `dateExpires`, `idMember`, `identifier`, `permissions` */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      openEnum(['identifier', 'idMember', 'dateCreated', 'dateExpires', 'permissions']),
      z.array(openEnum(['identifier', 'idMember', 'dateCreated', 'dateExpires', 'permissions'])),
    ])
    .optional(),
  /** Determines whether to include webhooks. */
  webhooks: z.boolean().optional(),
});

export type GetToken = z.input<typeof GetTokenSchema>;
