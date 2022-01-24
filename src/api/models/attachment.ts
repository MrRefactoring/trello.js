import { Color } from './color';
import { Limits } from './limits';
import { TrelloID } from './trelloID';

export interface Attachment {
  id: TrelloID;
  bytes: number | null;
  date: string;
  edgeColor: Color | null;
  idMember: TrelloID;
  isUpload: boolean;
  mimeType: string;
  name: string;
  previews: string[];
  url: string;
  pos: number;
  fileName: string | null;
  limits: Limits;
}
