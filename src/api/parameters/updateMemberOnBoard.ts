export interface UpdateMemberOnBoard {
  /** The id of the board to update */
  id: string;
  /** The id of a membership that should be added to this board. */
  idMembership: string;
  /** One of: admin, normal, observer. Determines the type of member that this membership will be to this board. */
  type: string;
  /**
   * @deprecated Use `member.fields`.
   *
   * Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username
   */
  memberFields?: string;

  member?: {
    /**
     * Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username
     *
     * @default ['fullName', 'username']
     */
    fields?: Array<'all' | 'avatarHash' | 'bio' | 'bioData' | 'confirmed' | 'fullName' | 'idPremOrgsAdmin' | 'initials' | 'memberType' | 'products' | 'status' | 'url' | 'username'>;
  }
}
