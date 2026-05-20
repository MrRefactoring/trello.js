import { z } from 'zod';
import { apiObject } from '#/core';
import { TrelloIDSchema } from '#/models/trelloID';
import { ColorSchema } from '#/models/color';
import { LimitsSchema } from '#/models/limits';

export const AttachmentSchema = apiObject({
  id: TrelloIDSchema,
  bytes: z.string().nullish(),
  date: z.coerce.date().optional(),
  edgeColor: ColorSchema.nullish(),
  idMember: TrelloIDSchema.optional(),
  isUpload: z.boolean().optional(),
  mimeType: z.string().optional(),
  name: z.string().optional(),
  previews: z.array(z.string()).optional(),
  url: z.string().optional(),
  pos: z.number().optional(),
  fileName: z.string().nullish(),
  isMalicious: z.boolean().optional(),
  limits: LimitsSchema.optional(),
  sourceView: z.unknown().optional(),
});

export type Attachment = z.infer<typeof AttachmentSchema>;
