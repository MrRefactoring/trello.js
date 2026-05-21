import { z } from 'zod';

export const GetTokenSchema = z.object({
  token: z.string(),
  /** `all` or a comma-separated list of `dateCreated`, `dateExpires`, `idMember`, `identifier`, `permissions` */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum(['identifier', 'idMember', 'dateCreated', 'dateExpires', 'permissions']),
      z.array(z.enum(['identifier', 'idMember', 'dateCreated', 'dateExpires', 'permissions'])),
    ])
    .optional(),
  /** Determines whether to include webhooks. */
  webhooks: z.boolean().optional(),
});

export type GetToken = z.input<typeof GetTokenSchema>;
