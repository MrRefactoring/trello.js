export interface InviteMember {
  /** The ID of the board */
  id: string;
  /** The email address of a user to add as a member of the board. */
  email: string;
  /** Valid values: admin, normal, observer. Determines what type of member the user being added should be of the board. */
  type?: string;
  /**
   * The full name of the user to as a member of the board. Must have a length of at least 1 and cannot begin nor end
   * with a space.
   */
  fullName?: string;
}
