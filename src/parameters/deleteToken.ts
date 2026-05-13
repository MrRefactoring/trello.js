import { z } from 'zod';

export const DeleteTokenSchema = z.object({
  token: z.string(),
});

export type DeleteToken = z.input<typeof DeleteTokenSchema>;
