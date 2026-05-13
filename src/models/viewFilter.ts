import { z } from 'zod';

export const ViewFilterSchema = z.enum(['all', 'closed', 'none', 'open']);

export type ViewFilter = z.infer<typeof ViewFilterSchema>;
