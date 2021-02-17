export interface UpdateChecklistField {
  /** ID of a checklist. */
  id: string;
  /** Field to update. */
  field: string;
  /** The value to change the checklist name to. Should be a string of length 1 to 16384. */
  value: string;
}
