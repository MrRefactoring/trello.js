import { TrelloID } from './trelloID';
import { Limits } from './limits';
import { Color } from './color';

export interface Card {
  id?: TrelloID;
  address?: string;
  badges?: {
    attachmentsByType?: {
      trello?: {
        board?: number;
        card?: number;
      };
    };
    location?: boolean;
    votes?: number;
    viewingMemberVoted?: boolean;
    subscribed?: boolean;
    fogbugz?: string;
    checkItems?: number;
    checkItemsChecked?: number;
    comments?: number;
    attachments?: number;
    description?: boolean;
    due?: string;
    dueComplete?: boolean;
  };
  checkItemStates?: unknown[];
  closed?: boolean;
  coordinates?: string;
  creationMethod?: string;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
    emoji?: {};
  };
  due?: string;
  dueReminder?: string;
  email?: string;
  idBoard?: TrelloID;
  idChecklists?: unknown[];
  idLabels?: unknown[];
  idList?: TrelloID;
  idMembers?: unknown[];
  idMembersVoted?: unknown[];
  idShort?: number;
  idAttachmentCover?: TrelloID;
  labels?: unknown[];
  limits?: Limits;
  locationName?: string;
  manualCoverAttachment?: boolean;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
    idAttachment?: TrelloID;
    color?: Color;
    idUploadedBackground?: boolean;
    size?: string;
    brightness?: string;
    isTemplate?: boolean;
  };
}
