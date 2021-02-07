export interface Webhooksidfield {
  /** ID of the webhook. */
  id: Record<string, any>;
  /** Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel` */
  field: string;
}
