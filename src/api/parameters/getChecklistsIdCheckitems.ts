export interface GetChecklistsIdCheckitems {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** One of: `all`, `none`. */
  filter?: string;
  /** One of: `all`, `name`, `nameData`, `pos`, `state`, `type`. */
  fields?: string;
}
