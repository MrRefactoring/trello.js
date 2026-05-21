import { z } from 'zod';

export const UpdateListSchema = z.object({
  /** New name for the list */
  name: z.string().optional(),
  /** Whether the list should be closed (archived) */
  closed: z.boolean().optional(),
  /** ID of a board the list should be moved to */
  idBoard: z.string().optional(),
  /** New position for the list: `top`, `bottom`, or a positive floating point number */
  pos: z.union([z.number(), z.enum(['top', 'bottom'])]).optional(),
  /** Whether the active member is subscribed to this list */
  subscribed: z.boolean().optional(),
  /** The ID of the list */
  id: z.string(),
});

export type UpdateList = z.input<typeof UpdateListSchema>;
