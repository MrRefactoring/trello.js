import { z } from 'zod';

export const UpdateOrganizationSchema = z.object({
  /** A new name for the organization. At least 3 lowercase letters, underscores, and numbers. Must be unique */
  name: z.string().optional(),
  /** A new displayName for the organization. Must be at least 1 character long and not begin or end with a space. */
  displayName: z.string().optional(),
  /** A new description for the organization */
  desc: z.string().optional(),
  /** A URL starting with `http://`, `https://`, or `null` */
  website: z.string().optional(),
  /** The Google Apps domain to link this org to. */
  'prefs/associatedDomain': z.string().optional(),
  /** Whether non-workspace members can be added to boards inside the Workspace */
  'prefs/externalMembersDisabled': z.boolean().optional(),
  /** `1` or `2` */
  'prefs/googleAppsVersion': z.number().optional(),
  /** Who on the Workspace can make Workspace visible boards. One of `admin`, `none`, `org` */
  'prefs/boardVisibilityRestrict/org': z.string().optional(),
  /** Who can make private boards. One of: `admin`, `none`, `org` */
  'prefs/boardVisibilityRestrict/private': z.string().optional(),
  /** Who on the Workspace can make public boards. One of: `admin`, `none`, `org` */
  'prefs/boardVisibilityRestrict/public': z.string().optional(),
  /** An email address with optional wildcard characters. (E.g. `subdomain.*.trello.com`) */
  'prefs/orgInviteRestrict': z.string().optional(),
  /** Whether the Workspace page is publicly visible. One of: `private`, `public` */
  'prefs/permissionLevel': z.string().optional(),
  /** The ID or name of the Organization */
  id: z.unknown(),
});

export type UpdateOrganization = z.input<typeof UpdateOrganizationSchema>;
