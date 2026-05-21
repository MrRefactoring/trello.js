import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const CreatePluginListingSchema = z.object({
  /** The ID of the Power-Up for which you are creating a new listing. */
  idPlugin: TrelloIDSchema,
  /** The description to show for the given locale */
  description: z.string().optional(),
  /** The locale that this listing should be displayed for. */
  locale: z.string().optional(),
  /** The overview to show for the given locale. */
  overview: z.string().optional(),
  /** The name to use for the given locale. */
  name: z.string().optional(),
});

export type CreatePluginListing = z.input<typeof CreatePluginListingSchema>;
