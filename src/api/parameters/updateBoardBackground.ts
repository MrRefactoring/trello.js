export interface UpdateBoardBackground {
  /** The ID or username of the member */
  id: string;
  /** The ID of the board background */
  idBackground: string;
  /** One of: `dark`, `light`, `unknown` */
  brightness?: string;
  /** Whether the background should be tiled */
  tile?: boolean;
}
