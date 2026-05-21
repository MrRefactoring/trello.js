import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetCardFieldSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
  /** The desired field. */
  field: z.union([
    z.string(),
    z.enum([
      'id',
      'address',
      'badges',
      'checkItemStates',
      'closed',
      'coordinates',
      'creationMethod',
      'dueComplete',
      'dateLastActivity',
      'desc',
      'descData',
      'due',
      'dueReminder',
      'idBoard',
      'idChecklists',
      'idLabels',
      'idList',
      'idMembers',
      'idMembersVoted',
      'idShort',
      'idAttachmentCover',
      'labels',
      'limits',
      'locationName',
      'manualCoverAttachment',
      'name',
      'pos',
      'shortLink',
      'shortUrl',
      'subscribed',
      'url',
      'cover',
      'isTemplate',
    ]),
  ]),
});

export type GetCardField = z.input<typeof GetCardFieldSchema>;
