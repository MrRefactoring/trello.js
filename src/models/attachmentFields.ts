import { z } from 'zod';

export const AttachmentFieldsSchema = z.enum([
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
