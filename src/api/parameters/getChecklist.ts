export interface GetChecklist {
  /** ID of a checklist. */
  id: string;
  /**
   * Valid values: `all`, `closed`, `none`, `open`, `visible`. Cards is a nested resource. The additional query params
   * available are documented at [Cards Nested Resource](ref:cards-nested-resource).
   */
  cards?: string;
  /** The check items on the list to return. One of: `all`, `none`. */
  checkItems?: string;
  /**
   * The fields on the checkItem to return if checkItems are being returned. `all` or a comma-separated list of: `name`,
   * `nameData`, `pos`, `state`, `type`
   */
  checkItemFields?: string;
  /**
   * `all` or a comma-separated list of checklist
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: string;
}
