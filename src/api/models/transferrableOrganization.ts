import { TrelloID } from './trelloID';

export interface TransferrableOrganization {
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
}
