export interface CreateTokenWebhooks {
  token: string;
  /** A description to be displayed when retrieving information about the webhook. */
  description?: string;
  /** The URL that the webhook should POST information to. */
  callbackURL: string;
  /** ID of the object to create a webhook on. */
  idModel: string;
}
