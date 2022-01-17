import { TrelloID } from './trelloID';

export interface ClaimableOrganizations {
  organizations?: {
    name?: string;
    displayName?: string;
    activeMembershipCount?: number;
    idActiveAdmins?: TrelloID[];
    products?: number[];
    id?: TrelloID;
    logoUrl?: string;
  }[];
  claimableCount?: number;
}
