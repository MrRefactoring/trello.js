export interface PostChecklistsIdCheckitems {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The name of the new check item on the checklist. Should be a string of length 1 to 16384. */
  name: string;
  /** The position of the check item in the checklist. One of: `top`, `bottom`, or a positive number. */
  pos?: string;
  /** Determines whether the check item is already checked when created. */
  checked?: boolean;
}
