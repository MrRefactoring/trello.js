export interface PostOrganizations {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The name to display for the Organization */
  displayName: string;
  /** The description for the organizations */
  desc?: string;
  /** A string with a length of at least 3. Only lowercase letters, underscores, and numbers are allowed. Must be unique. */
  name?: string;
  /** A URL starting with `http://` or `https://` */
  website?: string;
}
