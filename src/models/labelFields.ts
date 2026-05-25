import { z } from 'zod';

export const LabelFieldsSchema = z.enum(['id', 'idBoard', 'name', 'color', 'uses']);

export type LabelFields = z.infer<typeof LabelFieldsSchema>;
