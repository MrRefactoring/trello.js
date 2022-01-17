export interface GetTokenMember {
  token: string;
  /**
   * `all` or a comma-separated list of valid fields for [Member
   * Object](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/).
   */
  fields?: 'all' | string[];
}
