export interface PutMembersIdBoardbackgroundsIdbackground {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** One of: `dark`, `light`, `unknown` */
  brightness?: string;
  /** Whether the background should be tiled */
  tile?: boolean;
}
