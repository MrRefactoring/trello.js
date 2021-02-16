export interface UpdateCardChecklistItem {
  /** The ID of the Card */
  idCard: string;
  /** The ID of the checklist item to update */
  idCheckItem: string;
  /** `top`, `bottom`, or a positive float */
  pos?: 'top' | 'bottom' | number;
  /** The ID of the item to update. */
  idChecklist: string;
}
