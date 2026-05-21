import { z } from 'zod';
import { apiObject } from '#/core';
import { TrelloIDSchema } from '#/models/trelloID';

export const TokenPermissionSchema = apiObject({
  idModel: z.union([TrelloIDSchema, z.enum(['*'])]).optional(),
  modelType: z.enum(['Board', 'Member', 'Organization', 'Enterprise']).optional(),
  read: z.boolean().optional(),
  write: z.boolean().optional(),
});

export type TokenPermission = z.infer<typeof TokenPermissionSchema>;
