import { LimitsObject } from './limitsObject';
import { MemberPrefs } from './memberPrefs';

export interface Member {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
    emoji?: {};
  };
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string;
  idPremOrgsAdmin?: string[];
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
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
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
    _id?: string;
  };
  oneTimeMessagesDismissed?: string[];
  prefs?: MemberPrefs;
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[];
}
