import { z } from 'zod';

export const CustomEmojiFieldsSchema = z.enum(['id', 'name', 'url']);

export type CustomEmojiFields = z.infer<typeof CustomEmojiFieldsSchema>;
