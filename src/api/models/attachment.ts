import { TrelloID } from './trelloID';
import { Color } from './color';

export interface Attachment {
  id?: TrelloID;
  bytes?: string;
  date?: string;
  edgeColor?: Color;
  idMember?: TrelloID;
  isUpload?: boolean;
  mimeType?: string;
  name?: string;
  previews?: string[];
  url?: string;
  pos?: number;
}
