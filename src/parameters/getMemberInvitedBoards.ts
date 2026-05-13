import { z } from 'zod';

export const GetMemberInvitedBoardsSchema = z.object({
  /** The ID or username of the member */
  id: z.unknown(),
  /** `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields: z.unknown().optional(),
});

export type GetMemberInvitedBoards = z.input<typeof GetMemberInvitedBoardsSchema>;
