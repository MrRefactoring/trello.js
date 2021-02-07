export interface GetCardsIdChecklists {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
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
