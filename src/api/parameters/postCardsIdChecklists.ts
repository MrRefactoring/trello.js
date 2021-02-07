export interface PostCardsIdChecklists {
  /** The ID of the Card */
  id: Record<string, any>;
  /** The name of the checklist */
  name?: string;
  /** The ID of a source checklist to copy into the new one */
  idChecklistSource?: Record<string, any>;
  /** The position of the checklist on the card. One of: `top`, `bottom`, or a positive number. */
  pos?: string;
}
