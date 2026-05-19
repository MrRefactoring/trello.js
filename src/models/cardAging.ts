import { z } from 'zod';

export const CardAgingSchema = z.enum(['pirate', 'regular']);

export type CardAging = z.infer<typeof CardAgingSchema>;
