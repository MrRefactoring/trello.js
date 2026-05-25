import { z } from 'zod';

export const UpdateCardSchema = z.object({
  /** The new name for the card */
  name: z.string().optional(),
  /** The new description for the card */
  desc: z.string().optional(),
  /** Whether the card should be archived (closed: true) */
  closed: z.boolean().optional(),
  /** Comma-separated list of member IDs */
  idMembers: z.string().optional(),
  /** The ID of the image attachment the card should use as its cover, or null for none */
  idAttachmentCover: z.string().optional(),
  /** The ID of the list the card should be in */
  idList: z.string().optional(),
  /** Comma-separated list of label IDs */
  idLabels: z.string().optional(),
  /** The ID of the board the card should be on */
  idBoard: z.string().optional(),
  /** The position of the card in its list. `top`, `bottom`, or a positive float */
  pos: z.union([z.enum(['top', 'bottom']), z.number()]).optional(),
  /** When the card is due, or `null` */
  due: z.string().optional(),
  /** The start date of a card, or `null` */
  start: z.string().optional(),
  /** Whether the status of the card is complete */
  dueComplete: z.boolean().optional(),
  /** Whether the member is should be subscribed to the card */
  subscribed: z.boolean().optional(),
  /** For use with/by the Map View */
  address: z.string().optional(),
  /** For use with/by the Map View */
  locationName: z.string().optional(),
  /** For use with/by the Map View. Should be latitude,longitude */
  coordinates: z.string().optional(),
  /**
   * Updates the card's cover | Option | Values | About | |--------|--------|-------| | color | `pink`, `yellow`,
   * `lime`, `blue`, `black`, `orange`, `red`, `purple`, `sky`, `green` | Makes the cover a solid color . | |
   * brightness
   *
   * | `dark`, `light` | Determines whether the text on the cover should be dark or light. | url | An unsplash URL:
   *
   * https://images.unsplash.com | Used if making an image the cover. Only Unsplash URLs work. | idAttachment | ID of an
   * attachment on the card | Used if setting an attached image as the cover. | | size | `normal`, `full` | Determines
   * whether to show the card name on the cover, or below it. |
   *
   * `brightness` can be sent alongside any of the other parameters, but all of the other parameters are mutually
   * exclusive; you can not have the cover be a `color` and an `idAttachment` at the same time.
   *
   * On the brightness options, setting it to light will make the text on the card cover dark:
   * [](https://developer.atlassian.com/cloud/trello/images/rest/cards/cover-brightness-dark.png)
   *
   * And vice versa, setting it to dark will make the text on the card cover light:
   * [](https://developer.atlassian.com/cloud/trello/images/rest/cards/cover-brightness-light.png)
   */
  cover: z
    .object({
      /**
       * An object containing information regarding the card's cover `brightness` can be sent alongside any of the other
       * parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a color and
       * an `idAttachment` at the same time.
       */
      value: z
        .object({
          /** One of: `pink, yellow, lime, blue, black, orange, red, purple, sky, green` */
          color: z
            .enum(['pink', 'yellow', 'lime', 'blue', 'black', 'orange', 'red', 'purple', 'sky', 'green'])
            .optional(),
          /**
           * Determines whether the text on the cover should be dark or light. Setting it to `light` will make the text
           * on the card cover dark. And vice versa, setting it to dark will make the text on the card cover light
           */
          brightness: z.enum(['dark', 'light']).optional(),
          /** Used if making an image the cover. Only Unsplash URLs (https://images.unsplash.com/) work. */
          url: z.string().optional(),
        })
        .optional(),
    })
    .optional(),
  /** The ID of the Card */
  id: z.string(),
});

export type UpdateCard = z.input<typeof UpdateCardSchema>;
