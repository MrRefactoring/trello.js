export interface PostChecklists {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID of the Card that the checklist should be added to. */
  idCard: Record<string, any>;
  /** The name of the checklist. Should be a string of length 1 to 16384. */
  name?: string;
  /** The position of the checklist on the card. One of: `top`, `bottom`, or a positive number. */
  pos?: Record<string, any>;
  /** The ID of a checklist to copy into the new checklist. */
  idChecklistSource?: Record<string, any>;
}
