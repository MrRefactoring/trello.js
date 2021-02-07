export interface GetCardsIdAttachments {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** `all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields: string;
  /** Use `cover` to restrict to just the cover attachment */
  filter: string;
}
