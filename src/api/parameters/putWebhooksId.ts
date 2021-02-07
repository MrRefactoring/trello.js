export interface PutWebhooksId {
  /** ID of the webhook to retrieve. */
  id: string;
  /** A string with a length from `0` to `16384`. */
  description?: string;
  /** A valid URL that is reachable with a `HEAD` and `POST` request. */
  callbackURL?: string;
  /** ID of the model to be monitored */
  idModel?: Record<string, any>;
  /** Determines whether the webhook is active and sending `POST` requests. */
  active?: boolean;
}
