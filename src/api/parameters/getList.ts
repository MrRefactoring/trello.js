export interface GetList {
  /** The ID of the list */
  id: string;
  /** `all` or a comma separated list of List field names. */
  fields?: string;
}
