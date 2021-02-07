export interface PutPluginsIdpluginListingsIdlisting {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID of the Power-Up whose listing is being updated. */
  idPlugin: Record<string, any>;
  /** The ID of the existing listing for the Power-Up that is being updated. */
  idListing: Record<string, any>;
  /** The description to show for the given locale */
  description?: string;
  /** The locale that this listing should be displayed for. */
  locale?: string;
  /** The overview to show for the given locale. */
  overview?: string;
  /** The name to use for the given locale. */
  name?: string;
}
