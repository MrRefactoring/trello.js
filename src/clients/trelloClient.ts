import { BaseClient } from './baseClient';
import {
  Actions,
  Applications,
  Batch,
  Boards,
  Cards,
  Checklists,
  CustomFields,
  Emoji,
  Enterprises,
  Labels,
  Lists,
  Members,
  Notifications,
  Organizations,
  Plugins,
  Search,
  Tokens,
  Webhooks,
} from '../api';

export class TrelloClient extends BaseClient {
  actions = new Actions(this);
  applications = new Applications(this);
  batch = new Batch(this);
  boards = new Boards(this);
  cards = new Cards(this);
  checklists = new Checklists(this);
  customFields = new CustomFields(this);
  emoji = new Emoji(this);
  enterprises = new Enterprises(this);
  labels = new Labels(this);
  lists = new Lists(this);
  members = new Members(this);
  notifications = new Notifications(this);
  organizations = new Organizations(this);
  plugins = new Plugins(this);
  search = new Search(this);
  tokens = new Tokens(this);
  webhooks = new Webhooks(this);
}
