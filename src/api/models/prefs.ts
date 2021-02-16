import { TrelloID } from './trelloID';

export interface Prefs {
  permissionLevel?: string;
  hideVotes?: boolean;
  voting?: string;
  comments?: string;
  invitations?: string[];
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: string;
  calendarFeedEnabled?: boolean;
  background?: TrelloID;
  backgroundImage?: string;
  backgroundImageScaled?: string;
}
