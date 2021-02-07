import { TokenPermission } from './tokenPermission';

export interface Token {
  id?: string;
  identifier?: string;
  idMember?: string;
  dateCreated?: string;
  dateExpires?: string;
  permissions?: TokenPermission[];
}
