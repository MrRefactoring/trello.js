import { z } from 'zod';

export const ListFieldsSchema = z.enum(['id']);

export type ListFields = z.infer<typeof ListFieldsSchema>;
