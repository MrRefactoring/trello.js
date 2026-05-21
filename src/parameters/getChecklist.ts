import { z } from 'zod';

export const GetChecklistSchema = z.object({
  /**
   * Valid values: `all`, `closed`, `none`, `open`, `visible`. Cards is a nested resource. The additional query params
   * available are documented at [Cards Nested
   * Resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource).
   */
  cards: z.enum(['all', 'closed', 'none', 'open', 'visible']).optional(),
  /** The check items on the list to return. One of: `all`, `none`. */
  checkItems: z.enum(['all', 'none']).optional(),
  /**
   * The fields on the checkItem to return if checkItems are being returned. `all` or a comma-separated list of: `name`,
   * `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`
   */
  checkItemFields: z
    .enum(['all', 'name', 'nameData', 'pos', 'state', 'type', 'due', 'dueReminder', 'idMember'])
    .optional(),
  /**
   * `all` or a comma-separated list of checklist
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z.union([z.string(), z.array(z.string())]).optional(),
  /** ID of a checklist. */
  id: z.string(),
});

export type GetChecklist = z.input<typeof GetChecklistSchema>;
