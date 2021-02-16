export interface CreateCardChecklist {
  /** The ID of the Card */
  id: string;
  /** The name of the checklist */
  name?: string;
  /** The ID of a source checklist to copy into the new one */
  idChecklistSource?: string;
  /** The position of the checklist on the card. One of: `top`, `bottom`, or a positive number. */
  pos?: string;
}
