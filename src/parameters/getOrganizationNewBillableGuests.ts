import { z } from 'zod';

export const GetOrganizationNewBillableGuestsSchema = z.object({
  /** The ID or name of the organization */
  id: z.unknown(),
  /** The ID of the board to check for new billable guests. */
  idBoard: z.unknown(),
});

export type GetOrganizationNewBillableGuests = z.input<typeof GetOrganizationNewBillableGuestsSchema>;
