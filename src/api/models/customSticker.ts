import { TrelloID } from './trelloID';

export interface CustomSticker {
  id?: TrelloID;
  url?: string;
  scaled?: {
    id?: TrelloID;
  }[];
}
