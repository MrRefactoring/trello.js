export interface UpdateMemberOnBoard {
  /** The id of the board to update */
  id: Record<string, any>;
  /** The id of a membership that should be added to this board. */
  idMembership: Record<string, any>;
  /** One of: admin, normal, observer. Determines the type of member that this membership will be to this board. */
  type: string;
  /** Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username */
  member_fields?: string;
}
