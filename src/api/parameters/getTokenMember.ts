export interface GetTokenMember {
  token: string;
  /** `all` or a comma-separated list of valid fields for [Member Object](/cloud/trello/guides/rest-api/object-definitions/). */
  fields?: Record<string, any>;
}
