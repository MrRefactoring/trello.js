export interface MoveAllCardsInList {
  /** The ID of the list */
  id: Record<string, any>;
  /** The ID of the board the cards should be moved to */
  idBoard: Record<string, any>;
  /** The ID of the list that the cards should be moved to */
  idList: Record<string, any>;
}
