import { z } from 'zod';

export const APITokenSchema = z.string();

export type APIToken = z.infer<typeof APITokenSchema>;
