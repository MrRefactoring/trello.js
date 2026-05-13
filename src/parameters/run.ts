import { z } from 'zod';

export const RunSchema = z.object({
  /**
   * A list of API routes. Maximum of 10 routes allowed. The routes should begin with a forward slash and should not
   * include the API version number - e.g. "urls=/members/trello,/cards/[cardId]"
   */
  urls: z.string(),
});

export type Run = z.input<typeof RunSchema>;
