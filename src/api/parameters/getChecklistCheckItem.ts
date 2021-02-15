export interface GetChecklistCheckItem {
  /** ID of a checklist. */
  id: string;
  /** ID of the check item to retrieve. */
  idCheckItem: string;
  /** One of: `all`, `name`, `nameData`, `pos`, `state`, `type`. */
  fields?: string;
}
