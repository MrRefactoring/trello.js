import { TrelloID } from './trelloID';

export interface PendingOrganizations {
  id?: TrelloID;
  idMember?: TrelloID;
  memberRequestor?: {
    id?: TrelloID;
    fullName?: string;
  };
  date?: string;
  displayName?: string;
  membershipCount?: number;
  logoUrl?: string;
  transferability?: {
    transferrable?: boolean;
    newBillableMembers?: {
      id?: TrelloID;
      fullName?: string;
      username?: string;
      initials?: string;
      avatarHash?: string;
    }[];
    restrictedMembers?: {
      id?: TrelloID;
      fullName?: string;
      username?: string;
      initials?: string;
      avatarHash?: string;
    }[];
  };
}
