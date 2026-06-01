import { z } from 'zod';

/**
 * @deprecated Use `client.batch.run(builder)` instead. This type was never used by the generated client and will be
 *   removed in the next major version.
 */
export const PerformBatchSchema = z.object({
  /**
   * A list of API routes. Maximum of 10 routes allowed. The routes should begin with a forward slash and should not
   * include the API version number - e.g. "urls=/members/trello,/cards/[cardId]"
   */
  urls: z.string(),
});

/**
 * @deprecated Use `client.batch.run(builder)` instead. This type was never used by the generated client and will be
 *   removed in the next major version.
 */
export type PerformBatch = z.input<typeof PerformBatchSchema>;
