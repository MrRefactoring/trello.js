import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdatePluginSchema = z.object({
  /** The ID or name of the organization */
  id: TrelloIDSchema,
});

export type UpdatePlugin = z.input<typeof UpdatePluginSchema>;
