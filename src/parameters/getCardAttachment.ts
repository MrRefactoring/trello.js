import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetCardAttachmentSchema = z.object({
  /** The Attachment fields to be included in the response. */
  fields: z.array(z.unknown()).optional(),
  /** The ID of the Card */
  id: TrelloIDSchema,
  /** The ID of the Attachment */
  idAttachment: TrelloIDSchema,
});

export type GetCardAttachment = z.input<typeof GetCardAttachmentSchema>;
