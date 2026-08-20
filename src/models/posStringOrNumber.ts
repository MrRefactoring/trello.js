import { z } from 'zod';
import { openEnum } from '#/core';

export const posStringOrNumberSchema = z.union([openEnum(['top', 'bottom']), z.number()]);

export type posStringOrNumber = z.infer<typeof posStringOrNumberSchema>;
