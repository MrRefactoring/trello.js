import type { z } from 'zod';
import { openEnum } from '#/core';

export const ChecklistFieldsSchema = openEnum(['id', 'name', 'idBoard', 'idCard', 'pos']);

export type ChecklistFields = z.infer<typeof ChecklistFieldsSchema>;
