import { TrelloID } from './trelloID';

export interface CustomField {
  id?: TrelloID;
  idModel?: string;
  modelType?: string;
  fieldGroup?: string;
  display?: {
    cardFront?: boolean;
    name?: string;
    pos?: string;
    options?: {
      id?: TrelloID;
      idCustomField?: TrelloID;
      value?: {
        text?: string;
      };
      color?: string;
      pos?: number;
    }[];
  };
  type?: string;
}
