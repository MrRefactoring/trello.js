export interface PutWebhooksId {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** A string with a length from `0` to `16384`. */
  description?: string;
  /** A valid URL that is reachable with a `HEAD` and `POST` request. */
  callbackURL?: string;
  /** ID of the model to be monitored */
  idModel?: Record<string, any>;
  /** Determines whether the webhook is active and sending `POST` requests. */
  active?: boolean;
}
