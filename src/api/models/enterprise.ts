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
    attachmentRestrictions?: any[];
  };
  ssoActivationFailed?: boolean;
  idAdmins?: any[];
  enterpriseDomains?: any[];
  isRealEnterprise?: boolean;
  pluginWhitelistingEnabled?: any[];
  idOrganizations?: any[];
  products?: any[];
  licenses?: {
    maxMembers?: number;
    totalMembers?: number;
    relatedEnterprises?: any[];
  };
  domains?: any[];
  dateOrganizationPrefsLastUpdated?: string;
  idp?: {
    requestSigned?: boolean;
    certificate?: string;
    loginUrl?: string;
  };
}
