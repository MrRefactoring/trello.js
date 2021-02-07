export interface GetCardsIdChecklists {
  /** The ID of the Card */
  id: Record<string, any>;
  /** `all` or `none` */
  checkItems?: string;
  /** `all` or a comma-separated list of: `name,nameData,pos,state,type` */
  checkItem_fields?: string;
  /** `all` or `none` */
  filter?: string;
  /** `all` or a comma-separated list of: `idBoard,idCard,name,pos` */
  fields?: string;
}
