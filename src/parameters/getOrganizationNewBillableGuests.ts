import { z } from 'zod';

export const GetOrganizationNewBillableGuestsSchema = z.object({
  /** The ID or name of the organization */
  id: z.string(),
  /** The ID of the board to check for new billable guests. */
  idBoard: z.string(),
});

export type GetOrganizationNewBillableGuests = z.input<typeof GetOrganizationNewBillableGuestsSchema>;
