export interface GetEnterprisesIdAdmins {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** ID of the enterprise to retrieve. */
  id: Record<string, any>;
  /** Any valid value that the [nested member field resource]() accepts. */
  fields?: string;
}
