export interface GetCardsIdCheckitemstates {
  /** The ID of the Card */
  id: Record<string, any>;
  /** `all` or a comma-separated list of: `idCheckItem`, `state` */
  fields?: string;
}
