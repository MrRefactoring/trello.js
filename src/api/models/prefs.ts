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
  background?: string;
  backgroundImage?: string;
  backgroundImageScaled?: string;
}
