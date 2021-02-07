import { TrelloID } from './trelloID';

export interface Export {
  id?: TrelloID;
  status?: {
    attempts?: number;
    finished?: boolean;
    stage?: string;
  };
  startedAt?: string;
  size?: string;
  exportUrl?: string;
}
