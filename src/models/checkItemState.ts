import { z } from 'zod';
import { apiObject } from '#/core/apiObject';

export const CheckItemStateSchema = apiObject({
  idCheckItem: z.string(),
  state: z.string(),
});

export type CheckItemState = z.infer<typeof CheckItemStateSchema>;
