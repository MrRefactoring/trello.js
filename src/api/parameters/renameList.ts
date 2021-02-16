export interface RenameList {
  /** The ID of the list */
  id: string;
  /** The field on the List to be updated */
  field: string;
  /** The new value for the field */
  value?: string;
}
