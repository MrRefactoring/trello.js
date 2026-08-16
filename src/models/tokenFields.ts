import type { z } from 'zod';
import { openEnum } from '#/core';

export const TokenFieldsSchema = openEnum(['identifier', 'idMember', 'dateCreated', 'dateExpires', 'permissions']);

export type TokenFields = z.infer<typeof TokenFieldsSchema>;
