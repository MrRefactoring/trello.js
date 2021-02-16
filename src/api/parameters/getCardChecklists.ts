export interface GetCardChecklists {
  /** The ID of the Card */
  id: string;
  /** `all` or `none` */
  checkItems?: string;
  /** `all` or a comma-separated list of: `name,nameData,pos,state,type` */
  checkItemFields?: string;
  /** `all` or `none` */
  filter?: string;
  /** `all` or a comma-separated list of: `idBoard,idCard,name,pos` */
  fields?: string;
}
