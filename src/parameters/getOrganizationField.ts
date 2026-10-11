import { z } from 'zod';
import { openEnum } from '#/core';

export const GetOrganizationFieldSchema = z.object({
  /** The ID or name of the organization */
  id: z.string(),
  /** An organization [field](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
  field: openEnum([
    'id',
    'billableMemberCount',
    'desc',
    'descData',
    'displayName',
    'idBoards',
    'invitations',
    'invited',
    'logoHash',
    'memberships',
    'name',
    'powerUps',
    'prefs',
    'premiumFeatures',
    'products',
    'url',
    'website',
  ]),
});

export type GetOrganizationField = z.input<typeof GetOrganizationFieldSchema>;
