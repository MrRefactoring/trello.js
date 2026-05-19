import { z } from 'zod';

export const DismissMemberOneTimeMessageSchema = z.object({
  /** The ID or username of the member */
  id: z.unknown(),
  /** The message to dismiss */
  value: z.unknown(),
});

export type DismissMemberOneTimeMessage = z.input<typeof DismissMemberOneTimeMessageSchema>;
