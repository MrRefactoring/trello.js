export interface GetCardChecklistItem {
  /** The ID of the Card */
  id: string;
  /** The ID of the checkitem */
  idCheckItem: string;
  /** `all` or a comma-separated list of `name,nameData,pos,state,type` */
  fields?: string;
}
