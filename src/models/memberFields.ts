import { z } from 'zod';

export const MemberFieldsSchema = z.enum(['id']);

export type MemberFields = z.infer<typeof MemberFieldsSchema>;
