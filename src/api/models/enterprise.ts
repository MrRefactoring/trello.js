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
    attachmentRestrictions?: unknown[];
  };
  ssoActivationFailed?: boolean;
  idAdmins?: unknown[];
  enterpriseDomains?: unknown[];
  isRealEnterprise?: boolean;
  pluginWhitelistingEnabled?: unknown[];
  idOrganizations?: unknown[];
  products?: unknown[];
  licenses?: {
    maxMembers?: number;
    totalMembers?: number;
    relatedEnterprises?: unknown[];
  };
  domains?: unknown[];
  dateOrganizationPrefsLastUpdated?: string;
  idp?: {
    requestSigned?: boolean;
    certificate?: string;
    loginUrl?: string;
  };
}
