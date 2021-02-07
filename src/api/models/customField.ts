export interface CustomField {
  id?: string;
  idModel?: string;
  modelType?: string;
  fieldGroup?: string;
  display?: {
    cardFront?: boolean;
    name?: string;
    pos?: string;
    options?: {
      id?: string;
      idCustomField?: string;
      value?: {
        text?: string;
      };
      color?: string;
      pos?: number;
    }[];
  };
  type?: string;
}
