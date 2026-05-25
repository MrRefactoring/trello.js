import { z } from 'zod';
import { apiObject } from '#/core';

export const TokenPermissionSchema = apiObject({
  idModel: z.union([z.string(), z.enum(['*'])]).optional(),
  modelType: z.enum(['Board', 'Member', 'Organization', 'Enterprise']).optional(),
  read: z.boolean().optional(),
  write: z.boolean().optional(),
});

export type TokenPermission = z.infer<typeof TokenPermissionSchema>;
