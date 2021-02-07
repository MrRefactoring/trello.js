export interface Webhooksidfield {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** ID of the webhook. */
  id: Record<string, any>;
  /** Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel` */
  field: string;
}
