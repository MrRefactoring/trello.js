export interface GetBoardListsFilter {
  /** The ID of the board */
  id: Record<string, any>;
  /** One of `all`, `closed`, `none`, `open` */
  filter: Record<string, any>;
}
