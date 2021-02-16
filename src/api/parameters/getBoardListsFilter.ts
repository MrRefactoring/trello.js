export interface GetBoardListsFilter {
  /** The ID of the board */
  id: string;
  /** One of `all`, `closed`, `none`, `open` */
  filter: 'all' | 'closed' | 'none' | 'open';
}
