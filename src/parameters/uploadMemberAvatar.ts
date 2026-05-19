import { z } from 'zod';

export const UploadMemberAvatarSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  file: z.string(),
});

export type UploadMemberAvatar = z.input<typeof UploadMemberAvatarSchema>;
