export interface GetChecklistsIdBoard {
  /** ID of a checklist. */
  id: Record<string, any>;
  /** `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: string;
}
