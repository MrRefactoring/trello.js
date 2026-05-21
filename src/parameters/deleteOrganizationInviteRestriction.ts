import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteOrganizationInviteRestrictionSchema = z.object({
  /** The ID or name of the organization */
  id: TrelloIDSchema,
});

export type DeleteOrganizationInviteRestriction = z.input<typeof DeleteOrganizationInviteRestrictionSchema>;
