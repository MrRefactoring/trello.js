export interface GetMemberCustomSticker {
  /** The ID or username of the member */
  id: string;
  /** The ID of the uploaded sticker */
  idSticker: string;
  /** `all` or a comma-separated list of `scaled`, `url` */
  fields?: string;
}
