export interface GetWebhookField {
  /** ID of the webhook. */
  id: string;
  /** Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel` */
  field: string;
}
