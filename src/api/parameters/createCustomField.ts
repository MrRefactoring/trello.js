export interface CreateCustomField {
  /** The ID of the model for which the Custom Field is being defined. This should always be the ID of a board. */
  idModel?: string;
  /** The type of model that the Custom Field is being defined on. This should always be `board`. */
  modelType?: string;
  /** The name of the Custom Field */
  name?: string;
  /** The type of Custom Field to create. */
  type?: string;
  /** If the type is `checkbox` */
  options?: string;
  pos?: 'top' | 'bottom' | number;

  display?: {
    /** Whether this Custom Field should be shown on the front of Cards. */
    cardFront?: boolean;
  }

  /**
   * @deprecated Use `display.cardFront`.
   *
   * Whether this Custom Field should be shown on the front of Cards.
   */
  displayCardFront?: boolean;
}
