export interface UpdateCardCheckItem {
  /** The ID of the Card */
  id: string;
  /** The ID of the checkitem */
  idCheckItem: string;
  /** The new name for the checklist item */
  name?: string;
  /** One of: `complete`, `incomplete` */
  state?: string;
  /** The ID of the checklist this item is in */
  idChecklist?: string;
  /** `top`, `bottom`, or a positive float */
  pos?: 'top' | 'bottom' | number;
}
