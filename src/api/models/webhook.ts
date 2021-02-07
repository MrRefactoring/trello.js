import { TrelloID } from './trelloID';

export interface Webhook {
  id?: TrelloID;
  description?: string;
  idModel?: TrelloID;
  callbackURL?: string;
  active?: boolean;
  consecutiveFailures?: number;
  firstConsecutiveFailDate?: string;
}
