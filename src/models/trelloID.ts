import { z } from 'zod';

export const TrelloIDSchema = z.string();

export type TrelloID = z.infer<typeof TrelloIDSchema>;
