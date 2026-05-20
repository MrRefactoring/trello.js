import { z } from 'zod';

export const UpdateMemberSchema = z.object({
  /** The ID or username of the member */
  id: z.unknown(),
  /** New name for the member. Cannot begin or end with a space. */
  fullName: z.string().optional(),
  /** New initials for the member. 1-4 characters long. */
  initials: z.string().max(4, 'initials must be at most 4 characters').optional(),
  /**
   * New username for the member. At least 3 characters long, only lowercase letters, underscores, and numbers. Must be
   * unique.
   */
  username: z.string().optional(),
  bio: z.string().optional(),
  /** One of: `gravatar`, `none`, `upload` */
  avatarSource: z.enum(['gravatar', 'none', 'upload']).optional(),
  'prefs/colorBlind': z.boolean().optional(),
  'prefs/locale': z.string().optional(),
  /** `-1` for disabled, `1`, or `60` */
  'prefs/minutesBetweenSummaries': z.number().optional(),
});

export type UpdateMember = z.input<typeof UpdateMemberSchema>;
