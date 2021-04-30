export interface UpdateCustomField {
  /** ID of the Custom Field. */
  id: string;
  /** The name of the Custom Field */
  name?: string;
  pos?: 'top' | 'bottom' | number;

  display?: {
    /** Whether to display this custom field on the front of cards */
    cardFront?: boolean;
  };

  /**
   * @deprecated Use `display.cardFront`.
   *
   * Whether to display this custom field on the front of cards/
   */
  dispalyCardFront?: boolean;
}
