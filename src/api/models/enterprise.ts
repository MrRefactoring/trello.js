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
    attachmentRestrictions?: Record<string, any>[];
  };
  ssoActivationFailed?: boolean;
  idAdmins?: Record<string, any>[];
  enterpriseDomains?: Record<string, any>[];
  isRealEnterprise?: boolean;
  pluginWhitelistingEnabled?: Record<string, any>[];
  idOrganizations?: Record<string, any>[];
  products?: Record<string, any>[];
  licenses?: {
    maxMembers?: number;
    totalMembers?: number;
    relatedEnterprises?: Record<string, any>[];
  };
  domains?: Record<string, any>[];
  dateOrganizationPrefsLastUpdated?: string;
  idp?: {
    requestSigned?: boolean;
    certificate?: string;
    loginUrl?: string;
  };
}
