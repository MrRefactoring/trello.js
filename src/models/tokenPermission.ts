import { z } from 'zod';
import { apiObject, openEnum } from '#/core';

export const TokenPermissionSchema = apiObject({
  idModel: openEnum(['*']).optional(),
  modelType: openEnum(['Board', 'Member', 'Organization', 'Enterprise']).optional(),
  read: z.boolean().optional(),
  write: z.boolean().optional(),
});

export type TokenPermission = z.infer<typeof TokenPermissionSchema>;
