import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteCardAttachmentSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
  /** The ID of the attachment to delete */
  idAttachment: TrelloIDSchema,
});

export type DeleteCardAttachment = z.input<typeof DeleteCardAttachmentSchema>;
