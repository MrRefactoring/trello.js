import { z } from 'zod';
import { apiObject } from '#/core';
import { TokenPermissionSchema } from '#/models/tokenPermission';

export const TokenSchema = apiObject({
  id: z.string(),
  identifier: z.string().optional(),
  idMember: z.string().optional(),
  dateCreated: z.coerce.date().optional(),
  dateExpires: z.coerce.date().nullish(),
  permissions: z.array(TokenPermissionSchema).optional(),
  appKey: z.string().optional(),
  webhooks: z.array(z.unknown()).optional(),
});

export type Token = z.infer<typeof TokenSchema>;
