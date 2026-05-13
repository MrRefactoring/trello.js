import { z } from 'zod';

export const DeleteCardAttachmentSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
  /** The ID of the attachment to delete */
  idAttachment: z.unknown(),
});

export type DeleteCardAttachment = z.input<typeof DeleteCardAttachmentSchema>;
