import { TrelloID } from './trelloID';
import { Limits } from './limits';

export interface TrelloList {
  id?: TrelloID;
  /** The name of the list */
  name?: string;
  closed?: boolean;
  pos?: number;
  softLimit?: string;
  idBoard?: string;
  subscribed?: boolean;
  limits?: Limits;
}
