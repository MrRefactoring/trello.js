import { z } from 'zod';

export const APIKeySchema = z.string();

export type APIKey = z.infer<typeof APIKeySchema>;
