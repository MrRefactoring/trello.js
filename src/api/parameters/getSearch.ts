export interface GetSearch {
  /** The search query with a length of 1 to 16384 characters */
  query: string;
  /** `mine` or a comma-separated list of Board IDs */
  idBoards?: 'mine' | string[];
  /** A comma-separated list of Organization IDs */
  idOrganizations?: string[];
  /** A comma-separated list of Card IDs */
  idCards?: string[];
  /** What type or types of Trello objects you want to search. all or a comma-separated list of: `actions`, `boards`, `cards`, `members`, `organizations` */
  modelTypes?: string[];
  /** all or a comma-separated list of: `closed`, `dateLastActivity`, `dateLastView`, `desc`, `descData`, `idOrganization`, `invitations`, `invited`, `labelNames`, `memberships`, `name`, `pinned`, `powerUps`, `prefs`, `shortLink`, `shortUrl`, `starred`, `subscribed`, `url` */
  boardFields?: 'all' | string[];
  /** The maximum number of boards returned. Maximum: 1000 */
  boardsLimit?: number;
  /** all or a comma-separated list of: `badges`, `checkItemStates`, `closed`, `dateLastActivity`, `desc`, `descData`, `due`, `email`, `idAttachmentCover`, `idBoard`, `idChecklists`, `idLabels`, `idList`, `idMembers`, `idMembersVoted`, `idShort`, `labels`, `manualCoverAttachment`, `name`, `pos`, `shortLink`, `shortUrl`, `subscribed`, `url` */
  cardFields?: 'all' | string[];
  /** The maximum number of cards to return. Maximum: 1000 */
  cardsLimit?: number;
  /** The page of results for cards. Maximum: 100 */
  cardsPage?: number;
  /** Whether to include the parent board with card results */
  cardBoard?: boolean;
  /** Whether to include the parent list with card results */
  cardList?: boolean;
  /** Whether to include member objects with card results */
  cardMembers?: boolean;
  /** Whether to include sticker objects with card results */
  cardStickers?: boolean;
  /** Whether to include attachment objects with card results. A boolean value (true or false) or cover for only card cover attachments. */
  cardAttachments?: string;
  /** all or a comma-separated list of billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website */
  organizationFields?: string;
  /** The maximum number of Workspaces to return. Maximum 1000 */
  organizationsLimit?: number;
  /** all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username */
  memberFields?: string;
  /** The maximum number of members to return. Maximum 1000 */
  membersLimit?: number;
  /** By default, Trello searches for each word in your query against exactly matching words within Member content. Specifying partial to be true means that we will look for content that starts with any of the words in your query.  If you are looking for a Card titled "My Development Status Report", by default you would need to search for "Development". If you have partial enabled, you will be able to search for "dev" but not "velopment". */
  partial?: boolean;
}
