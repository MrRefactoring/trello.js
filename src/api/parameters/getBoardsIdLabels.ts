export interface GetBoardsIdLabels {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID of the Board. */
  id: Record<string, any>;
  /** The fields to be returned for the Labels. */
  fields?: Record<string, any>;
  /** The number of Labels to be returned. */
  limit?: number;
}
