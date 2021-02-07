export interface PutCardsIdCheckitemIdcheckitem {
  /** The ID of the Card */
  id: string;
  /** The ID of the checkitem */
  idCheckItem: string;
  /** The new name for the checklist item */
  name?: string;
  /** One of: `complete`, `incomplete` */
  state?: string;
  /** The ID of the checklist this item is in */
  idChecklist?: Record<string, any>;
  /** `top`, `bottom`, or a positive float */
  pos?: Record<string, any>;
}
