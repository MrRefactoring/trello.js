export interface GetEnterpriseSignupUrl {
  /** ID of the enterprise to retrieve. */
  id: string;
  authenticate?: boolean;
  confirmationAccepted?: boolean;
  /** Any valid URL. */
  returnUrl?: string;
  /**
   * Designates whether the user has seen/consented to the Trello ToS prior to being redirected to the enterprise signup
   * page/their IdP.
   */
  tosAccepted?: boolean;
}
