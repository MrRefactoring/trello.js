import { z } from 'zod';
import { apiObject } from '#/core/apiObject';

export const TokenPermissionSchema = apiObject({
  idModel: z.union([z.unknown(), z.enum(['*'])]).optional(),
  modelType: z.enum(['Board', 'Member', 'Organization', 'Enterprise']).optional(),
  read: z.boolean().optional(),
  write: z.boolean().optional(),
});

export type TokenPermission = z.infer<typeof TokenPermissionSchema>;
