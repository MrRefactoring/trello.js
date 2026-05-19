import { z } from 'zod';

export const posStringOrNumberSchema = z.number();

export type posStringOrNumber = z.infer<typeof posStringOrNumberSchema>;
