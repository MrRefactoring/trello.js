export interface PutLabelsIdField {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The id of the label */
  id: string;
  /** The field on the Label to update. */
  field: string;
  /** The new value for the field. */
  value: Record<string, any>;
}
