export interface CreateChecklistCheckItems {
  /** ID of a checklist. */
  id: string;
  /** The name of the new check item on the checklist. Should be a string of length 1 to 16384. */
  name: string;
  /** The position of the check item in the checklist. One of: `top`, `bottom`, or a positive number. */
  pos?: string;
  /** Determines whether the check item is already checked when created. */
  checked?: boolean;
}
