export interface CreateChecklist {
  /** The ID of the Card that the checklist should be added to. */
  idCard: string;
  /** The name of the checklist. Should be a string of length 1 to 16384. */
  name?: string;
  /** The position of the checklist on the card. One of: `top`, `bottom`, or a positive number. */
  pos?: 'top' | 'bottom' | number;
  /** The ID of a checklist to copy into the new checklist. */
  idChecklistSource?: string;
}
