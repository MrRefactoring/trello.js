import { z } from 'zod';
import { openEnum } from '#/core';

export const GetActionFieldSchema = z.object({
  /** The ID of the Action */
  id: z.string(),
  /** An action field */
  field: openEnum(['id', 'idMemberCreator', 'data', 'type', 'date', 'limits', 'display', 'memberCreator']),
});

export type GetActionField = z.input<typeof GetActionFieldSchema>;
