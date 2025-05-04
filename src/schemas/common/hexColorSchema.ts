import { z } from 'zod';

export const hexColorSchema = z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
  message: 'Invalid hex color code',
});
