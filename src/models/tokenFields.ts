import { z } from 'zod';

export const TokenFieldsSchema = z.enum(['identifier', 'idMember', 'dateCreated', 'dateExpires', 'permissions']);

export type TokenFields = z.infer<typeof TokenFieldsSchema>;
