import { z } from 'zod';
import { apiObject } from '#/core';

export const ActionDataAttachmentSchema = apiObject({
  id: z.string(),
  name: z.string(),
  url: z.string().optional(),
  previewUrl: z.string().optional(),
  previewUrl2x: z.string().optional(),
});

export type ActionDataAttachment = z.infer<typeof ActionDataAttachmentSchema>;
