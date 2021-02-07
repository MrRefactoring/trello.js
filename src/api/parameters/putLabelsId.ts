export interface PutLabelsId {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The new name for the label */
  name?: string;
  /** The new color for the label. See: [fields](/cloud/trello/guides/rest-api/object-definitions/) for color options */
  color?: Record<string, any>;
}
