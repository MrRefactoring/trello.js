import { TrelloID } from './trelloID';
import { TokenPermission } from './tokenPermission';

export interface Token {
  id?: TrelloID;
  identifier?: string;
  idMember?: TrelloID;
  dateCreated?: string;
  dateExpires?: string;
  permissions?: TokenPermission[];
}
