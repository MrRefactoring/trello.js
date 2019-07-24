export namespace ActionOptions {
  export interface IGetAction {
    id: string;
    display?: boolean;
    entities?: boolean;
    fields?: string[];
    member?: boolean;
    memberFields?: string[];
    memberCreator?: boolean;
    memberCreatorFields: string[];
  }

  export interface IGetActionField {
    id: string;
    field: string;
  }

  export interface IGetActionBoard {
    id: string;
    fields?: string[];
  }
}
