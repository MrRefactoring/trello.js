export interface PostLabels {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** Name for the label */
  name: string;
  /** The color for the label. */
  color: Record<string, any>;
  /** The ID of the Board to create the Label on. */
  idBoard: string;
}
