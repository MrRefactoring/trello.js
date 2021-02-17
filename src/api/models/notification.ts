import { Card } from './card';
import { Board } from './board';
import { TrelloID } from './trelloID';

export interface Notification {
  id?: string;
  unread?: boolean;
  type?: string;
  date?: string;
  dateRead?: string;
  data?: string;
  card?: Card;
  board?: Board;
  idMemberCreator?: TrelloID;
  idAction?: TrelloID;
  reactions?: unknown[];
}
