import { z } from 'zod';

export const RemoveOrganizationMemberFromAllBoardsSchema = z.object({
  /** The ID or name of the organization */
  id: z.unknown(),
  /** The ID of the member to remove from the Workspace */
  idMember: z.unknown(),
});

export type RemoveOrganizationMemberFromAllBoards = z.input<typeof RemoveOrganizationMemberFromAllBoardsSchema>;
