export interface GetCardsIdStickers {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID of the Card */
  id: Record<string, any>;
  /** `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: string;
}
