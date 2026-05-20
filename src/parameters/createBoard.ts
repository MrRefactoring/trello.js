import { z } from 'zod';

export const CreateBoardSchema = z.object({
  /** The new name for the board. 1 to 16384 characters long. */
  name: z.string().max(16384, 'name must be at most 16384 characters'),
  /** Determines whether to use the default set of labels. */
  defaultLabels: z.boolean().optional(),
  /**
   * Determines whether to add the default set of lists to a board (To Do, Doing, Done). It is ignored if
   * `idBoardSource` is provided.
   */
  defaultLists: z.boolean().optional(),
  /** A new description for the board, 0 to 16384 characters long */
  desc: z.string().max(16384, 'desc must be at most 16384 characters').optional(),
  /** The id or name of the Workspace the board should belong to. */
  idOrganization: z.unknown().optional(),
  /** The id of a board to copy into the new board. */
  idBoardSource: z.unknown().optional(),
  /** To keep cards from the original board pass in the value `cards` */
  keepFromSource: z.enum(['cards', 'none']).optional(),
  /** The Power-Ups that should be enabled on the new board. One of: `all`, `calendar`, `cardAging`, `recap`, `voting`. */
  powerUps: z.enum(['all', 'calendar', 'cardAging', 'recap', 'voting']).optional(),
  /** The permissions level of the board. One of: `org`, `private`, `public`. */
  prefsPermissionLevel: z.enum(['org', 'private', 'public']).optional(),
  /** Who can vote on this board. One of `disabled`, `members`, `observers`, `org`, `public`. */
  prefsVoting: z.enum(['disabled', 'members', 'observers', 'org', 'public']).optional(),
  /** Who can comment on cards on this board. One of: `disabled`, `members`, `observers`, `org`, `public`. */
  prefsComments: z.enum(['disabled', 'members', 'observers', 'org', 'public']).optional(),
  /** Determines what types of members can invite users to join. One of: `admins`, `members`. */
  prefsInvitations: z.enum(['members', 'admins']).optional(),
  /** Determines whether users can join the boards themselves or whether they have to be invited. */
  prefsSelfJoin: z.boolean().optional(),
  /** Determines whether card covers are enabled. */
  prefsCardCovers: z.boolean().optional(),
  /** The id of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`. */
  prefsBackground: z.enum(['blue', 'orange', 'green', 'red', 'purple', 'pink', 'lime', 'sky', 'grey']).optional(),
  /**
   * Determines the type of card aging that should take place on the board if card aging is enabled. One of: `pirate`,
   * `regular`.
   */
  prefsCardAging: z.enum(['pirate', 'regular']).optional(),
});

export type CreateBoard = z.input<typeof CreateBoardSchema>;
