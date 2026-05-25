import { z } from 'zod';

export const DeleteCardAttachmentSchema = z.object({
  /** The ID of the Card */
  id: z.string(),
  /** The ID of the attachment to delete */
  idAttachment: z.string(),
});

export type DeleteCardAttachment = z.input<typeof DeleteCardAttachmentSchema>;
