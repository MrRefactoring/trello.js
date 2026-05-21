import { z } from 'zod';

export const DismissMemberOneTimeMessageSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  /** The message to dismiss */
  value: z.string(),
});

export type DismissMemberOneTimeMessage = z.input<typeof DismissMemberOneTimeMessageSchema>;
