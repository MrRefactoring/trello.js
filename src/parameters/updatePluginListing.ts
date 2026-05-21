import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdatePluginListingSchema = z.object({
  /** The ID of the Power-Up whose listing is being updated. */
  idPlugin: TrelloIDSchema,
  /** The ID of the existing listing for the Power-Up that is being updated. */
  idListing: TrelloIDSchema,
  /** The description to show for the given locale */
  description: z.string().optional(),
  /** The locale that this listing should be displayed for. */
  locale: z.string().optional(),
  /** The overview to show for the given locale. */
  overview: z.string().optional(),
  /** The name to use for the given locale. */
  name: z.string().optional(),
});

export type UpdatePluginListing = z.input<typeof UpdatePluginListingSchema>;
