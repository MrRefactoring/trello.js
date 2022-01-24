import { Attachment } from './attachment';
import { Color } from './color';
import { Limits } from './limits';
import { TrelloID } from './trelloID';

export interface Card {
  id: TrelloID;
  address?: string;
  attachments: Attachment[];
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
  closed: boolean;
  coordinates?: string;
  creationMethod?: string;
  dateLastActivity?: string;
  desc: string;
  descData?: {
    emoji?: {};
  };
  due?: string;
  dueReminder: string | null;
  email?: string;
  idBoard: TrelloID;
  idChecklists: unknown[];
  idLabels: unknown[];
  idList: TrelloID;
  idMembers: unknown[];
  idMembersVoted?: unknown[];
  idShort: number;
  idAttachmentCover?: TrelloID;
  labels?: unknown[];
  limits?: Limits;
  locationName?: string;
  manualCoverAttachment?: boolean;
  name: string;
  pos: number;
  shortLink: string;
  shortUrl?: string;
  subscribed: boolean;
  stickers: unknown[];
  url?: string;
  isTemplate: boolean;
  cover?: {
    idAttachment: TrelloID | null;
    color: Color | null;
    idUploadedBackground: boolean | null;
    size?: string;
    brightness?: string;
    idPlugin: string | null;
    isTemplate?: boolean;
  };

  cardRole: unknown | null;
  dueComplete: boolean;
  start: unknown | null;
}
