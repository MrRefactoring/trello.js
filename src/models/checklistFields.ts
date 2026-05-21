import { z } from 'zod';

export const ChecklistFieldsSchema = z.enum(['id', 'name', 'idBoard', 'idCard', 'pos']);

export type ChecklistFields = z.infer<typeof ChecklistFieldsSchema>;
