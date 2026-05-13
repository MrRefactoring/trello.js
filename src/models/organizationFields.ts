import { z } from 'zod';

export const OrganizationFieldsSchema = z.enum(['id', 'name']);

export type OrganizationFields = z.infer<typeof OrganizationFieldsSchema>;
