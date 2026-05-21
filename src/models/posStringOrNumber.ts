import { z } from 'zod';

export const posStringOrNumberSchema = z.union([z.enum(['top', 'bottom']), z.number()]);

export type posStringOrNumber = z.infer<typeof posStringOrNumberSchema>;
