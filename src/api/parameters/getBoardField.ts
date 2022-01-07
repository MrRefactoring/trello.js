export interface GetBoardField {
  /** The ID of the board. */
  id: string;
  /**
   * The field you'd like to receive. Valid values: closed, dateLastActivity, dateLastView, desc, descData,
   * idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs,
   * shortLink, shortUrl, starred, subscribed, url.
   */
  field: string;
}
