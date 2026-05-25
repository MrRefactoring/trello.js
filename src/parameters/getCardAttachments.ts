import { z } from 'zod';

export const GetCardAttachmentsSchema = z.object({
  /**
   * `all` or a comma-separated list of attachment
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
        'id',
        'bytes',
        'date',
        'edgeColor',
        'idMember',
        'isUpload',
        'mimeType',
        'name',
        'previews',
        'url',
        'pos',
      ]),
      z.array(
        z.enum([
          'id',
          'bytes',
          'date',
          'edgeColor',
          'idMember',
          'isUpload',
          'mimeType',
          'name',
          'previews',
          'url',
          'pos',
        ]),
      ),
    ])
    .optional(),
  /** Use `cover` to restrict to just the cover attachment */
  filter: z.string().optional(),
  /** The ID of the Card */
  id: z.string(),
});

export type GetCardAttachments = z.input<typeof GetCardAttachmentsSchema>;
