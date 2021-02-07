export interface PutLabelsId {
  /** The ID of the Label */
  id: string;
  /** The new name for the label */
  name?: string;
  /** The new color for the label. See: [fields](/cloud/trello/guides/rest-api/object-definitions/) for color options */
  color?: Record<string, any>;
}
