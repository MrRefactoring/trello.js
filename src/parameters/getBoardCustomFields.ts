import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetBoardCustomFieldsSchema = z.object({
  /** The ID of the board */
  id: TrelloIDSchema,
});

export type GetBoardCustomFields = z.input<typeof GetBoardCustomFieldsSchema>;
