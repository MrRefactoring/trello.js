export interface GetCardsIdCheckitemstates {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID of the Card */
  id: Record<string, any>;
  /** `all` or a comma-separated list of: `idCheckItem`, `state` */
  fields?: string;
}
