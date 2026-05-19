import { z } from 'zod';

export const GetOrganizationBoardsSchema = z.object({
  /** The ID or name of the organization */
  id: z.unknown(),
  /** `all` or a comma-separated list of: `open`, `closed`, `members`, `organization`, `public` */
  filter: z.enum(['all', 'open', 'closed', 'members', 'organization', 'public']).optional(),
  /** `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields: z.string().optional(),
});

export type GetOrganizationBoards = z.input<typeof GetOrganizationBoardsSchema>;
