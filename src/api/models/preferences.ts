import { CardAging } from './cardAging';
import { ImageDescriptor } from './imageDescriptor';
import { TrelloID } from './trelloID';

export interface Preferences {
  associatedDomain?: string | null;
  attachmentRestrictions?: string | null;
  background?: TrelloID;
  backgroundBottomColor?: string;
  backgroundBrightness?: string;
  backgroundImage?: string;
  backgroundImageScaled?: ImageDescriptor[];
  backgroundTile?: boolean;
  backgroundTopColor?: string;
  calendarFeedEnabled?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canBePublic?: boolean;
  canInvite?: boolean;
  cardAging?: CardAging;
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
