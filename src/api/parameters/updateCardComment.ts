export interface UpdateCardComment {
  /** The ID of the Card */
  id: string;
  /** The ID of the comment action to update */
  idAction: string;
  /** The new text for the comment */
  text: string;
}
