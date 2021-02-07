export interface PostPluginsIdpluginListing {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID of the Power-Up for which you are creating a new listing. */
  idPlugin: Record<string, any>;
  /** The description to show for the given locale */
  description?: string;
  /** The locale that this listing should be displayed for. */
  locale?: string;
  /** The overview to show for the given locale. */
  overview?: string;
  /** The name to use for the given locale. */
  name?: string;
}
