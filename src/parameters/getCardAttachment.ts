import { z } from 'zod';
import { AttachmentFieldsSchema } from '../models';

export const GetCardAttachmentSchema = z.object({
  /** The Attachment fields to be included in the response. */
  fields: z.array(AttachmentFieldsSchema).optional(),
  /** The ID of the Card */
  id: z.string(),
  /** The ID of the Attachment */
  idAttachment: z.string(),
});

export type GetCardAttachment = z.input<typeof GetCardAttachmentSchema>;
