import { z } from 'zod';

export const GetCardAttachmentsSchema = z.object({
  /**
   * `all` or a comma-separated list of attachment
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z.union([z.string(), z.array(z.string())]).optional(),
  /** Use `cover` to restrict to just the cover attachment */
  filter: z.string().optional(),
  /** The ID of the Card */
  id: z.unknown(),
});

export type GetCardAttachments = z.input<typeof GetCardAttachmentsSchema>;
