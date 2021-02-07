export interface PutCardsIdCheckitemIdcheckitem {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The new name for the checklist item */
  name?: string;
  /** One of: `complete`, `incomplete` */
  state?: string;
  /** The ID of the checklist this item is in */
  idChecklist?: Record<string, any>;
  /** `top`, `bottom`, or a positive float */
  pos?: Record<string, any>;
}
