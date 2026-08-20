import type { z } from 'zod';
import { openEnum } from '#/core';

export const CardAgingSchema = openEnum(['pirate', 'regular']);

export type CardAging = z.infer<typeof CardAgingSchema>;
