export interface UpdateOrganization {
  /** The ID or name of the Organization */
  id: string;
  /** A new name for the organization. At least 3 lowercase letters, underscores, and numbers. Must be unique */
  name?: string;
  /** A new displayName for the organization. Must be at least 1 character long and not begin or end with a space. */
  displayName?: string;
  /** A new description for the organization */
  desc?: string;
  /** A URL starting with `http://`, `https://`, or `null` */
  website?: string;
  /** The Google Apps domain to link this org to. */
  associatedDomain?: string;
  /** Whether non-team members can be added to boards inside the team */
  externalMembersDisabled?: boolean;
  /** `1` or `2` */
  googleAppsVersion?: number;
  /** Who on the team can make team visible boards. One of `admin`, `none`, `org` */
  org?: string;
  /** Who can make private boards. One of: `admin`, `none`, `org` */
  private?: string;
  /** Who on the team can make public boards. One of: `admin`, `none`, `org` */
  public?: string;
  /** An email address with optional wildcard characters. (E.g. `subdomain.*.trello.com`) */
  orgInviteRestrict?: string;
  /** Whether the team page is publicly visible. One of: `private`, `public` */
  permissionLevel?: string;
}
