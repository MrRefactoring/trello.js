export interface CreateCard {
  /** The name for the card */
  name?: string;
  /** The description for the card */
  desc?: string;
  /** The position of the new card. `top`, `bottom`, or a positive float */
  pos?: 'top' | 'bottom' | number;
  /** A due date for the card */
  due?: string;
  dueComplete?: boolean;
  /** The ID of the list the card should be created in */
  idList: string;
  /** Comma-separated list of member IDs to add to the card */
  idMembers?: string[];
  /** Comma-separated list of label IDs to add to the card */
  idLabels?: string[];
  /** A URL starting with `http://` or `https://` */
  urlSource?: string;
  fileSource?: string;
  /** The mimeType of the attachment. Max length 256 */
  mimeType?: string;
  /** The ID of a card to copy into the new card */
  idCardSource?: string;
  /**
   * If using `idCardSource` you can specify which properties to copy over. `all` or comma-separated list of:
   *
   * - Attachments
   * - Checklists
   * - CustomFields
   * - Comments
   * - Due
   * - Labels
   * - Members
   * - Start
   * - Stickers
   */
  keepFromSource?:
  | 'all'
  | 'attachments'
  | 'checklists'
  | 'customFields'
  | 'comments'
  | 'due'
  | 'labels'
  | 'members'
  | 'start'
  | 'stickers'
  | (
    | 'attachments'
    | 'checklists'
    | 'customFields'
    | 'comments'
    | 'due'
    | 'labels'
    | 'members'
    | 'start'
    | 'stickers'
  )[]
  | string
  | string[];
  /** For use with/by the Map View */
  address?: string;
  /** For use with/by the Map View */
  locationName?: string;
  /** For use with/by the Map View. Should take the form latitude,longitude */
  coordinates?: string;
}
