export interface PutCustomfieldsId {
  /** ID of the Custom Field. */
  id: string;
  /** The name of the Custom Field */
  name?: string;
  pos?: Record<string, any>;
  /** Whether to display this custom field on the front of cards */
  cardFront?: boolean;
}
