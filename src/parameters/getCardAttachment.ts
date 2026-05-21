import { z } from 'zod';

export const GetCardAttachmentSchema = z.object({
  /** The Attachment fields to be included in the response. */
  fields: z.array(z.unknown()).optional(),
  /** The ID of the Card */
  id: z.string(),
  /** The ID of the Attachment */
  idAttachment: z.string(),
});

export type GetCardAttachment = z.input<typeof GetCardAttachmentSchema>;
