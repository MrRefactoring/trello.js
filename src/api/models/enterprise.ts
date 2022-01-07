import { TrelloID } from './trelloID';

export interface Enterprise {
  id?: TrelloID;
  name?: string;
  displayName?: string;
  logoHash?: string;
  logoUrl?: string;
  prefs?: {
    ssoOnly?: boolean;
    signup?: {
      banner?: string;
      bannerHtml?: string;
    };
    mandatoryTransferDate?: string;
    brandingColor?: string;
    autoJoinOrganizations?: boolean;
    notifications?: {};
    maxMembers?: number;
  };
  organizationPrefs?: {
    boardVisibilityRestrict?: {};
    boardDeleteRestrict?: {};
    attachmentRestrictions?: string[];
  };
  ssoActivationFailed?: boolean;
  idAdmins?: TrelloID[];
  enterpriseDomains?: string[];
  isRealEnterprise?: boolean;
  pluginWhitelistingEnabled?: TrelloID[];
  idOrganizations?: TrelloID[];
  products?: number[];
  licenses?: {
    maxMembers?: number;
    totalMembers?: number;
    relatedEnterprises?: {
      name?: string;
      displayName?: string;
      count?: number;
    }[];
  };
  domains?: string[];
  dateOrganizationPrefsLastUpdated?: string;
  idp?: {
    requestSigned?: boolean;
    certificate?: string;
    loginUrl?: string;
  };
}
