export interface GetMemberBoardBackground {
  /** The ID or username of the member */
  id: string;
  /** The ID of the board background */
  idBackground: string;
  /** `all` or a comma-separated list of: `brightness`, `fullSizeUrl`, `scaled`, `tile` */
  fields?: string;
}
