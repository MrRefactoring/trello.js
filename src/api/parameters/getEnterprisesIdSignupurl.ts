export interface GetEnterprisesIdSignupurl {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** ID of the enterprise to retrieve. */
  id: Record<string, any>;
  authenticate?: boolean;
  confirmationAccepted?: boolean;
  /** Any valid URL. */
  returnUrl?: string;
  /** Designates whether the user has seen/consented to the Trello ToS prior to being redirected to the enterprise signup page/their IdP. */
  tosAccepted?: boolean;
}
