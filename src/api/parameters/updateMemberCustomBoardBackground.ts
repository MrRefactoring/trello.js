export interface UpdateMemberCustomBoardBackground {
  /** The ID or username of the member */
  id: string;
  /** The ID of the custom background */
  idBackground: string;
  /** One of: `dark`, `light`, `unknown` */
  brightness?: string;
  /** Whether to tile the background */
  tile?: boolean;
}
