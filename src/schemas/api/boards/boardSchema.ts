import { z } from 'zod';
import { PrefsSchema } from '~/schemas/common/prefsSchema';
import { ColorSchema } from '~/schemas/common';

export const BoardSchema = z.object({
  id: z.string(),
  name: z.string(),
  desc: z.string(),
  descData: z.string().nullable(),
  closed: z.boolean(),
  idOrganization: z.unknown(), // todo
  idEnterprise: z.unknown(), // todo
  pinned: z.boolean(),
  url: z.string().url(),
  shortUrl: z.string().url(),
  prefs: PrefsSchema,
  labelNames: z.record(ColorSchema, z.string()),
  limits: z.object({}).strict().optional(),
}).strict();

export type Board = z.infer<typeof BoardSchema>;
