import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetOrganizationPluginDataSchema = z.object({
  /** The ID or name of the organization */
  id: TrelloIDSchema,
});

export type GetOrganizationPluginData = z.input<typeof GetOrganizationPluginDataSchema>;
