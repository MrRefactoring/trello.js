export interface MoveAllCardsInList {
  /** The ID of the list */
  id: string;
  /** The ID of the board the cards should be moved to */
  idBoard: string;
  /** The ID of the list that the cards should be moved to */
  idList: string;
}
