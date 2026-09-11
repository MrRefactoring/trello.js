import { z } from 'zod';
import { openEnum } from '#/core';

export const GetBoardLabelsSchema = z.object({
  /** The ID of the Board. */
  id: z.string(),
  /** The fields to be returned for the Labels. */
  fields: z
    .union([
      openEnum(['id', 'idBoard', 'name', 'color', 'uses']),
      z.array(openEnum(['id', 'idBoard', 'name', 'color', 'uses'])),
    ])
    .optional(),
  /** The number of Labels to be returned. */
  limit: z.number().optional(),
});

export type GetBoardLabels = z.input<typeof GetBoardLabelsSchema>;
