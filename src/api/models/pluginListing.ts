import { TrelloID } from './trelloID';

export interface PluginListing {
  id?: TrelloID;
  name?: string;
  locale?: string;
  description?: string;
  overview?: string;
}
