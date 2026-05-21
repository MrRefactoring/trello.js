import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const RemoveOrganizationMemberFromAllBoardsSchema = z.object({
  /** The ID or name of the organization */
  id: TrelloIDSchema,
  /** The ID of the member to remove from the Workspace */
  idMember: TrelloIDSchema,
});

export type RemoveOrganizationMemberFromAllBoards = z.input<typeof RemoveOrganizationMemberFromAllBoardsSchema>;
