import type { z } from 'zod';
import { openEnum } from '#/core';

export const LabelFieldsSchema = openEnum(['id', 'idBoard', 'name', 'color', 'uses']);

export type LabelFields = z.infer<typeof LabelFieldsSchema>;
