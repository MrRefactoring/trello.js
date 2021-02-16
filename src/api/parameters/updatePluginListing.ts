export interface UpdatePluginListing {
  /** The ID of the Power-Up whose listing is being updated. */
  idPlugin: string;
  /** The ID of the existing listing for the Power-Up that is being updated. */
  idListing: string;
  /** The description to show for the given locale */
  description?: string;
  /** The locale that this listing should be displayed for. */
  locale?: string;
  /** The overview to show for the given locale. */
  overview?: string;
  /** The name to use for the given locale. */
  name?: string;
}
