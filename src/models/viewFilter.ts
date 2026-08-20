import type { z } from 'zod';
import { openEnum } from '#/core';

export const ViewFilterSchema = openEnum(['all', 'closed', 'none', 'open']);

export type ViewFilter = z.infer<typeof ViewFilterSchema>;
