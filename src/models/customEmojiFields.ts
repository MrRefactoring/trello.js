import type { z } from 'zod';
import { openEnum } from '#/core';

export const CustomEmojiFieldsSchema = openEnum(['id', 'name', 'url']);

export type CustomEmojiFields = z.infer<typeof CustomEmojiFieldsSchema>;
