import { z } from 'zod';
import { TrelloIDSchema } from '../models';
import { MemberFieldsSchema } from '../models';

export const GetMemberFieldSchema = z.object({
  /** The ID or username of the member */
  id: TrelloIDSchema,
  /** One of the member [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
  field: MemberFieldsSchema,
});

export type GetMemberField = z.input<typeof GetMemberFieldSchema>;
