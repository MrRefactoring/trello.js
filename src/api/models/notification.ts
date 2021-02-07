import { Card } from './card';
import { Board } from './board';

export interface Notification {
  id?: string;
  unread?: boolean;
  type?: string;
  date?: string;
  dateRead?: string;
  data?: string;
  card?: Card;
  board?: Board;
  idMemberCreator?: string;
  idAction?: string;
  reactions?: any[];
}
