import { z } from 'zod';

export const GetMemberFieldSchema = z.object({
  /** The ID or username of the member */
  id: z.unknown(),
  /** One of the member [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
  field: z.unknown(),
});

export type GetMemberField = z.input<typeof GetMemberFieldSchema>;
