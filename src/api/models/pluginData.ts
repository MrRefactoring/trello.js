import { TrelloID } from './trelloID';

export interface PluginData {
  id?: TrelloID;
  idPlugin?: TrelloID;
  scope?: string;
  idModel?: TrelloID;
  value?: string;
  access?: string;
}
