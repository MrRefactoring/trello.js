export interface GetCardCompletedChecklists {
  /** The ID of the Card */
  id: string;
  /** `all` or a comma-separated list of: `idCheckItem`, `state` */
  fields?: string;
}
