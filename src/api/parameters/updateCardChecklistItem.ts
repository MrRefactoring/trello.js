export interface UpdateCardChecklistItem {
  /** The ID of the Card */
  idCard: Record<string, any>;
  /** The ID of the checklist item to update */
  idCheckItem: Record<string, any>;
  /** `top`, `bottom`, or a positive float */
  pos?: Record<string, any>;
  /** The ID of the item to update. */
  idChecklist: Record<string, any>;
}
