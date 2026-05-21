import { z } from 'zod';
import { apiObject } from '#/core';
import { ColorSchema } from '#/models/color';
import { LimitsSchema } from '#/models/limits';

export const LabelSchema = apiObject({
  /** The ID of the label. */
  id: z.string(),
  /** The ID of the board the label is on. */
  idBoard: z.string().optional(),
  /** The name displayed for the label. */
  name: z.string().max(16384, 'name must be at most 16384 characters').nullish(),
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color: ColorSchema.optional(),
  uses: z.number().optional(),
  limits: LimitsSchema.optional(),
});

export type Label = z.infer<typeof LabelSchema>;
