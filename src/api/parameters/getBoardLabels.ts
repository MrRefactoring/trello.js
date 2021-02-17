export interface GetBoardLabels {
  /** The ID of the Board. */
  id: string;
  /** The fields to be returned for the Labels. */
  fields?: 'all' | string[];
  /** The number of Labels to be returned. */
  limit?: number;
}
