import { Color } from './color';

export interface Attachment {
  id?: string;
  bytes?: string;
  date?: string;
  edgeColor?: Color;
  idMember?: string;
  isUpload?: boolean;
  mimeType?: string;
  name?: string;
  previews?: string[];
  url?: string;
  pos?: number;
}
