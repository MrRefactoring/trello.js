export interface UpdateTokenWebhook {
  /** ID of the [Webhooks](ref:webhooks) to retrieve. */
  idWebhook: string;
  /** A description to be displayed when retrieving information about the webhook. */
  description?: string;
  /** The URL that the webhook should `POST` information to. */
  callbackURL?: string;
  /** ID of the object that the webhook is on. */
  idModel?: string;
  token: string;
}
