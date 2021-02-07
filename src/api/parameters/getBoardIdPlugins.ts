export interface GetBoardIdPlugins {
  /** The ID of the board */
  id: Record<string, any>;
  /** One of: `enabled` or `available` */
  filter?: string;
}
