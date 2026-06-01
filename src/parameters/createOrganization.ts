import { z } from 'zod';

export const CreateOrganizationSchema = z.object({
  /** The name to display for the Organization */
  displayName: z.string(),
  /** The description for the organizations */
  desc: z.string().optional(),
  /**
   * A string with a length of at least 3. Only lowercase letters, underscores, and numbers are allowed. If the name
   * contains invalid characters, they will be removed. If the name conflicts with an existing name, a new name will be
   * substituted.
   */
  name: z.string().optional(),
  /** A URL starting with `http://` or `https://` */
  website: z.string().optional(),
});

export type CreateOrganization = z.input<typeof CreateOrganizationSchema>;
