export interface PutLabelsIdField {
  /** The id of the label */
  id: string;
  /** The field on the Label to update. */
  field: string;
  /** The new value for the field. */
  value: Record<string, any>;
}
