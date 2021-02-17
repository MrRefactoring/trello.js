import { TrelloID } from './trelloID';

export interface CustomFieldItems {
  id?: TrelloID;
  value?: {
    checked?: string;
  };
  idCustomField?: TrelloID;
  idModel?: TrelloID;
  modelType?: string;
}
