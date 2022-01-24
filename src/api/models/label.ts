import { Color } from './color';
import { TrelloID } from './trelloID';

export interface Label {
  /** The ID of the label. */
  id?: TrelloID;
  /** The ID of the board the label is on. */
  idBoard?: TrelloID;
  /** The name displayed for the label. */
  name?: string;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: Color;
}
