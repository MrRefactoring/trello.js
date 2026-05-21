import { z } from 'zod';

export const UpdateBoardSchema = z.object({
  /** The new name for the board. 1 to 16384 characters long. */
  name: z.string().optional(),
  /** A new description for the board, 0 to 16384 characters long */
  desc: z.string().optional(),
  /** Whether the board is closed */
  closed: z.boolean().optional(),
  /** Whether the acting user is subscribed to the board */
  subscribed: z.string().optional(),
  /** The id of the Workspace the board should be moved to */
  idOrganization: z.string().optional(),
  /** One of: org, private, public */
  'prefs/permissionLevel': z.union([z.string(), z.enum(['org', 'private', 'public'])]).optional(),
  /** Whether Workspace members can join the board themselves */
  'prefs/selfJoin': z.boolean().optional(),
  /** Whether card covers should be displayed on this board */
  'prefs/cardCovers': z.boolean().optional(),
  /** Determines whether the Voting Power-Up should hide who voted on cards or not. */
  'prefs/hideVotes': z.boolean().optional(),
  /** Who can invite people to this board. One of: admins, members */
  'prefs/invitations': z.union([z.string(), z.enum(['admins', 'members'])]).optional(),
  /** Who can vote on this board. One of disabled, members, observers, org, public */
  'prefs/voting': z.union([z.string(), z.enum(['disabled', 'members', 'observers', 'org', 'public'])]).optional(),
  /** Who can comment on cards on this board. One of: disabled, members, observers, org, public */
  'prefs/comments': z.union([z.string(), z.enum(['disabled', 'members', 'observers', 'org', 'public'])]).optional(),
  /** The id of a custom background or one of: blue, orange, green, red, purple, pink, lime, sky, grey */
  'prefs/background': z
    .union([z.string(), z.enum(['blue', 'orange', 'green', 'red', 'purple', 'pink', 'lime', 'sky', 'grey'])])
    .optional(),
  /** One of: pirate, regular */
  'prefs/cardAging': z.union([z.string(), z.enum(['pirate', 'regular'])]).optional(),
  /** Determines whether the calendar feed is enabled or not. */
  'prefs/calendarFeedEnabled': z.boolean().optional(),
  id: z.string(),
});

export type UpdateBoard = z.input<typeof UpdateBoardSchema>;
