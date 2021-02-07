import { Limits } from './limits';
import { Color } from './color';

export interface Card {
  id?: string;
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
  checkItemStates?: Record<string, any>[];
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
  idBoard?: string;
  idChecklists?: Record<string, any>[];
  idLabels?: Record<string, any>[];
  idList?: string;
  idMembers?: Record<string, any>[];
  idMembersVoted?: Record<string, any>[];
  idShort?: number;
  idAttachmentCover?: string;
  labels?: Record<string, any>[];
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
    idAttachment?: string;
    color?: Color;
    idUploadedBackground?: boolean;
    size?: string;
    brightness?: string;
    isTemplate?: boolean;
  };
}
