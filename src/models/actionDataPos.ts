import { z } from 'zod';

export const ActionDataPosSchema = z.union([z.string(), z.number()]);

export type ActionDataPos = z.infer<typeof ActionDataPosSchema>;
