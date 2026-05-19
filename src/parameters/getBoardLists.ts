import { z } from 'zod';

export const GetBoardListsSchema = z.object({
  /** Filter to apply to Cards. */
  cards: z.unknown().optional(),
  /** `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/#card-object) */
  cardFields: z.union([z.string(), z.array(z.string())]).optional(),
  /** Filter to apply to Lists */
  filter: z.unknown().optional(),
  /** `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields: z.union([z.string(), z.array(z.string())]).optional(),
  /** The ID of the board */
  id: z.unknown(),
});

export type GetBoardLists = z.input<typeof GetBoardListsSchema>;
