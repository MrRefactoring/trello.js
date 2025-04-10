import { BaseClient } from '~/baseClient';
import { Boards } from '~/api/boards';
import { Members } from '~/api/members';

export class TrelloClient extends BaseClient {
  boards = new Boards(this);
  members = new Members(this);
}
