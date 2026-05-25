import { z } from 'zod';

export const CreateCardAttachmentSchema = z.object({
  /** The name of the attachment. Max length 256. */
  name: z.string().optional(),
  /** The file to attach, as multipart/form-data */
  file: z.string().optional(),
  /** The mimeType of the attachment. Max length 256 */
  mimeType: z.string().optional(),
  /** A URL to attach. Must start with `http://` or `https://` */
  url: z.string().optional(),
  /** Determines whether to use the new attachment as a cover for the Card. */
  setCover: z.boolean().optional(),
  /** The ID of the Card */
  id: z.string(),
});

export type CreateCardAttachment = z.input<typeof CreateCardAttachmentSchema>;
