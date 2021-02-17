import { TrelloID } from './trelloID';

export interface Preferences {
  associatedDomain?: string | null;
  attachmentRestrictions?: string | null;
  background?: TrelloID;
  backgroundImage?: string;
  backgroundImageScaled?: string;
  boardDeleteRestrict?: unknown[];
  boardInviteRestrict?: string;
  boardVisibilityRestrict?: unknown[];
  calendarFeedEnabled?: boolean;
  cardAging?: string;
  cardCovers?: boolean;
  comments?: string;
  externalMembersDisabled?: boolean;
  googleAppsVersion?: number;
  hideVotes?: boolean;
  invitations?: string[];
  isTemplate?: boolean;
  orgInviteRestrict?: string[];
  permissionLevel?: string;
  selfJoin?: boolean;
  voting?: string;
}
