import type { z } from 'zod';
import { openEnum } from '#/core';

export const AttachmentFieldsSchema = openEnum([
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
]);

export type AttachmentFields = z.infer<typeof AttachmentFieldsSchema>;
