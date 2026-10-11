import { z } from 'zod';
import { openEnum } from '#/core';

export const CreateCustomFieldSchema = z.object({
  /** The ID of the model for which the Custom Field is being defined. This should always be the ID of a board. */
  idModel: z.string(),
  /** The type of model that the Custom Field is being defined on. This should always be `board`. */
  modelType: openEnum(['board']),
  /** The name of the Custom Field */
  name: z.string(),
  /** The type of Custom Field to create. */
  type: openEnum(['checkbox', 'list', 'number', 'text', 'date']),
  /** If the type is `checkbox` */
  options: z.string().optional(),
  pos: z.union([z.number(), openEnum(['top', 'bottom'])]),
  /** Whether this Custom Field should be shown on the front of Cards */
  display_cardFront: z.boolean().optional(),
});

export type CreateCustomField = z.input<typeof CreateCustomFieldSchema>;
