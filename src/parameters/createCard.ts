import { z } from 'zod';

export const CreateCardSchema = z.object({
  /** The name for the card */
  name: z.string().optional(),
  /** The description for the card */
  desc: z.string().optional(),
  /** The position of the new card. `top`, `bottom`, or a positive float */
  pos: z.union([z.enum(['top', 'bottom']), z.number()]).optional(),
  /** A due date for the card */
  due: z.string().optional(),
  /** The start date of a card, or `null` */
  start: z.string().optional(),
  /** Whether the status of the card is complete */
  dueComplete: z.boolean().optional(),
  /** The ID of the list the card should be created in */
  idList: z.string(),
  /** Comma-separated list of member IDs to add to the card */
  idMembers: z.array(z.string()).optional(),
  /** Comma-separated list of label IDs to add to the card */
  idLabels: z.array(z.string()).optional(),
  /** A URL starting with `http://` or `https://`. The URL will be attached to the card upon creation. */
  urlSource: z.string().optional(),
  fileSource: z.string().optional(),
  /** The mimeType of the attachment. Max length 256 */
  mimeType: z.string().optional(),
  /** The ID of a card to copy into the new card */
  idCardSource: z.string().optional(),
  /**
   * If using `idCardSource` you can specify which properties to copy over. `all` or comma-separated list of:
   * `attachments,checklists,customFields,comments,due,start,labels,members,start,stickers`
   */
  keepFromSource: z
    .enum([
      'all',
      'attachments',
      'checklists',
      'comments',
      'customFields',
      'due',
      'start',
      'labels',
      'members',
      'start',
      'stickers',
    ])
    .optional(),
  /** For use with/by the Map View */
  address: z.string().optional(),
  /** For use with/by the Map View */
  locationName: z.string().optional(),
  /** For use with/by the Map View. Should take the form latitude,longitude */
  coordinates: z.string().optional(),
  /**
   * For displaying cards in different ways based on the card name. Board cards must have a name that is a link to a
   * Trello board. Mirror cards must have a name that is a link to a Trello card.
   */
  cardRole: z.enum(['separator', 'board', 'mirror', 'link']).optional(),
});

export type CreateCard = z.input<typeof CreateCardSchema>;
