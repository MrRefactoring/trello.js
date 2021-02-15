export interface UpdateCardCustomField {
  /** ID of the card that the Custom Field value should be set/updated for */
  idCard: Record<string, any>;
  /** ID of the Custom Field on the card. */
  idCustomField: Record<string, any>;
}
