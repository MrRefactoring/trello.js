export interface GetBoardLabels {
  /** The ID of the Board. */
  id: Record<string, any>;
  /** The fields to be returned for the Labels. */
  fields?: Record<string, any>;
  /** The number of Labels to be returned. */
  limit?: number;
}
