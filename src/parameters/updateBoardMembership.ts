import { z } from 'zod';
import { openEnum } from '#/core';

export const UpdateBoardMembershipSchema = z.object({
  /** The id of the board to update */
  id: z.string(),
  /** The id of a membership that should be added to this board. */
  idMembership: z.string(),
  /** One of: admin, normal, observer. Determines the type of member that this membership will be to this board. */
  type: openEnum(['admin', 'normal', 'observer']),
  /**
   * Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products,
   * status, url, username
   */
  memberFields: openEnum([
    'all',
    'avatarHash',
    'bio',
    'bioData',
    'confirmed',
    'fullName',
    'idPremOrgsAdmin',
    'initials',
    'memberType',
    'products',
    'status',
    'url',
    'username',
  ]).optional(),
});

export type UpdateBoardMembership = z.input<typeof UpdateBoardMembershipSchema>;
