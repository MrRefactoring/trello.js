import { z } from 'zod';

export const TrelloIdSchema = z.string().regex(/^[0-9a-fA-F]{24}$/, {
  message: 'Invalid Trello ID format. Must be a 24-character hex string'
});

export type TrelloId = z.infer<typeof TrelloIdSchema>;
