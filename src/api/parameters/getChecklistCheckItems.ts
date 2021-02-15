export interface GetChecklistCheckItems {
  /** ID of a checklist. */
  id: string;
  /** One of: `all`, `none`. */
  filter?: string;
  /** One of: `all`, `name`, `nameData`, `pos`, `state`, `type`. */
  fields?: string;
}
