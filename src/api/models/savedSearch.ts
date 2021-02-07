import { TrelloID } from './trelloID';
import { posStringOrNumber } from './posStringOrNumber';

export interface SavedSearch {
  id?: TrelloID;
  name?: string;
  query?: string;
  pos?: posStringOrNumber;
}
