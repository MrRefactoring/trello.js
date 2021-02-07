export interface PutCheclistsId {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** Name of the new checklist being created. Should be length of 1 to 16384. */
  name?: string;
  /** Determines the position of the checklist on the card. One of: `top`, `bottom`, or a positive number. */
  pos?: Record<string, any>;
}
