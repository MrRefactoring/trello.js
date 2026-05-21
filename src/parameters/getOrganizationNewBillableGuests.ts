import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetOrganizationNewBillableGuestsSchema = z.object({
  /** The ID or name of the organization */
  id: TrelloIDSchema,
  /** The ID of the board to check for new billable guests. */
  idBoard: TrelloIDSchema,
});

export type GetOrganizationNewBillableGuests = z.input<typeof GetOrganizationNewBillableGuestsSchema>;
