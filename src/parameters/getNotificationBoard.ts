import { z } from 'zod';

export const GetNotificationBoardSchema = z.object({
  /** The ID of the notification */
  id: z.unknown(),
  /** `all` or a comma-separated list of board[fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields: z.unknown().optional(),
});

export type GetNotificationBoard = z.input<typeof GetNotificationBoardSchema>;
