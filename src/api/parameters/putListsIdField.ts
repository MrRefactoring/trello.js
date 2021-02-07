export interface PutListsIdField {
  /** The ID of the list */
  id: Record<string, any>;
  /** The field on the List to be updated */
  field: string;
  /** The new value for the field */
  value?: Record<string, any>;
}
