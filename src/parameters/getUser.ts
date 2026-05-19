import { z } from 'zod';

export const GetUserSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: z.unknown(),
  /**
   * When true, returns members who possess a license for the corresponding Trello Enterprise; when false, returns
   * members who do not. If unspecified, both licensed and unlicensed members will be returned.
   */
  licensed: z.boolean().optional(),
  /**
   * When true, returns members who have been deactivated for the corresponding Trello Enterprise; when false, returns
   * members who have not. If unspecified, both active and deactivated members will be returned.
   */
  deactivated: z.boolean().optional(),
  /**
   * When true, returns members who are guests on one or more boards in the corresponding Trello Enterprise (but do
   * not possess a license); when false, returns members who are not. If unspecified, both guests and non-guests will
   * be returned.
   */
  collaborator: z.boolean().optional(),
  /**
   * When true, returns members who are managed by the corresponding Trello Enterprise; when false, returns members
   * who are not. If unspecified, both managed and unmanaged members will be returned.
   */
  managed: z.boolean().optional(),
  /**
   * When true, returns members who are administrators of the corresponding Trello Enterprise; when false, returns
   * members who are not. If unspecified, both admin and non-admin members will be returned.
   */
  admin: z.boolean().optional(),
  /** Returns only Trello users active since this date (inclusive). */
  activeSince: z.string().optional(),
  /** Returns only Trello users active since this date (inclusive). */
  inactiveSince: z.string().optional(),
  /** Returns members with email address or full name that start with the search value. */
  search: z.string().optional(),
  /** Cursor to return next set of results, use cursor returned in the response to query the next batch. */
  cursor: z.string().optional(),
});

export type GetUser = z.input<typeof GetUserSchema>;
