import { TrelloID } from './trelloID';

export interface EnterpriseAuditLog {
  idAction?: TrelloID;
  type?: string;
  date?: string;
  memberCreator?: {
    id?: TrelloID;
    username?: string;
    fullName?: string;
  };
  organization?: {
    enterpriseJoinRequest?: {
      idEnterprise?: TrelloID;
      idMember?: TrelloID;
      date?: string;
    };
    id?: TrelloID;
    name?: string;
  };
  member?: {
    id?: TrelloID;
    username?: string;
    fullName?: string;
  };
}
