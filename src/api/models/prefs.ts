import { TrelloID } from './trelloID';

export interface Prefs {
  permissionLevel?: string;
  hideVotes?: boolean;
  voting?: string;
  comments?: string;
  invitations?: Record<string, any>;
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: string;
  calendarFeedEnabled?: boolean;
  background?: TrelloID;
  backgroundImage?: string;
  backgroundImageScaled?: string;
}
