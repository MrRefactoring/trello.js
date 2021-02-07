export interface PostTokensTokenWebhooks {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** A description to be displayed when retrieving information about the webhook. */
  description?: string;
  /** The URL that the webhook should POST information to. */
  callbackURL: string;
  /** ID of the object to create a webhook on. */
  idModel: Record<string, any>;
}
