import { TrelloID } from './trelloID';

export interface CheckItem {
  idChecklist?: TrelloID;
  state?: string;
  id?: TrelloID;
  name?: string;
  nameData?: string;
  pos?: string;
}
