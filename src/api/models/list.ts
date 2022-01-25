import { Limits } from './limits';
import { TrelloID } from './trelloID';

export interface List {
  id: TrelloID;
  /** The name of the list */
  name: string;
  closed: boolean;
  pos: number;
  softLimit?: string;
  idBoard: string;
  subscribed?: boolean;
  limits?: Limits;
}
