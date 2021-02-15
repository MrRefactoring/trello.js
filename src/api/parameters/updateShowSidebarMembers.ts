export interface UpdateShowSidebarMembers {
  /** The id of the board to update */
  id: Record<string, any>;
  /** Determines whether to show members of the board in the sidebar. */
  value: boolean;
}
