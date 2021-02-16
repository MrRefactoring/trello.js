export interface UpdateChecklist {
  /** ID of a checklist. */
  id: string;
  /** Name of the new checklist being created. Should be length of 1 to 16384. */
  name?: string;
  /** Determines the position of the checklist on the card. One of: `top`, `bottom`, or a positive number. */
  pos?: 'top' | 'bottom' | number;
}
