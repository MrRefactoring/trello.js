export interface GetBoardCardsFilter {
  /** ID of the Board */
  id: string;
  /** Valid Values: all, closed, none, open, visible. */
  filter: string;
}
