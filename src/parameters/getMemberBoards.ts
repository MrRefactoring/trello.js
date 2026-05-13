import { z } from 'zod';

export const GetMemberBoardsSchema = z.object({
  /** The ID or username of the member */
  id: z.unknown(),
  /** `all` or a comma-separated list of: `closed`, `members`, `open`, `organization`, `public`, `starred` */
  filter: z.enum(['all', 'closed', 'members', 'open', 'organization', 'public', 'starred']).optional(),
  /** `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields: z.unknown().optional(),
  /** Which lists to include with the boards. One of: `all`, `closed`, `none`, `open` */
  lists: z.enum(['all', 'closed', 'none', 'open']).optional(),
  /** Whether to include the Organization object with the Boards */
  organization: z.boolean().optional(),
  /** `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  organizationFields: z.unknown().optional(),
});

export type GetMemberBoards = z.input<typeof GetMemberBoardsSchema>;
