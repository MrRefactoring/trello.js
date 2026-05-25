import { z } from 'zod';

export const GetEnterpriseSignUpUrlSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: z.string(),
  authenticate: z.boolean().optional(),
  confirmationAccepted: z.boolean().optional(),
  /** Any valid URL. */
  returnUrl: z.string().optional(),
  /**
   * Designates whether the user has seen/consented to the Trello ToS prior to being redirected to the enterprise signup
   * page/their IdP.
   */
  tosAccepted: z.boolean().optional(),
});

export type GetEnterpriseSignUpUrl = z.input<typeof GetEnterpriseSignUpUrlSchema>;
