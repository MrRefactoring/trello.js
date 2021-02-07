export interface GetBoardsIdCardsFilter {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** ID of the Board */
  id: string;
  /** Valid Values: all, closed, none, open, visible. */
  filter: string;
}
