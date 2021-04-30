import { TrelloID } from './trelloID';
import { LimitsObject } from './limitsObject';
import { MemberPrefs } from './memberPrefs';

export interface Member {
  id?: TrelloID;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
    emoji?: {};
  };
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: TrelloID;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: TrelloID;
  idPremOrgsAdmin?: TrelloID[];
  initials?: string;
  memberType?: string;
  nonPublic?: {};
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: string;
  aaEmail?: string;
  aaEnrolledDate?: string;
  aaId?: string;
  avatarSource?: string;
  email?: string;
  gravatarHash?: string;
  idBoards?: TrelloID[];
  idOrganizations?: TrelloID[];
  idEnterprisesAdmin?: TrelloID[];
  limits?: LimitsObject;
  loginTypes?: string[];
  marketingOptIn?: {
    optedIn?: boolean;
    date?: string;
  };
  messagesDismissed?: {
    name?: string;
    count?: string;
    lastDismissed?: string;
    Id?: TrelloID;
  };
  oneTimeMessagesDismissed?: string[];
  prefs?: MemberPrefs;
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: TrelloID[];
}
