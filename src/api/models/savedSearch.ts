import { TrelloID } from './trelloID';

export interface SavedSearch {
  id?: TrelloID;
  name?: string;
  query?: string;
  pos?: string | number;
}
