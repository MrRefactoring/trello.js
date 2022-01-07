export interface UpdateCard {
  /** The ID of the Card */
  id: string;
  /** The new name for the card */
  name?: string;
  /** The new description for the card */
  desc?: string;
  /** Whether the card should be archived (closed: true) */
  closed?: boolean;
  /** Comma-separated list of member IDs */
  idMembers?: string[];
  /** The ID of the image attachment the card should use as its cover, or null for none */
  idAttachmentCover?: string;
  /** The ID of the list the card should be in */
  idList?: string;
  /** Comma-separated list of label IDs */
  idLabels?: string[];
  /** The ID of the board the card should be on */
  idBoard?: string;
  /** The position of the card in its list. `top`, `bottom`, or a positive float */
  pos?: 'top' | 'bottom' | number;
  /** When the card is due, or `null` */
  due?: string;
  /** Whether the due date should be marked complete */
  dueComplete?: boolean;
  /** Whether the member is should be subscribed to the card */
  subscribed?: boolean;
  /** For use with/by the Map Power-Up */
  address?: string;
  /** For use with/by the Map Power-Up */
  locationName?: string;
  /** For use with/by the Map Power-Up. Should be latitude,longitude */
  coordinates?: string;
  /**
   * Updates the card's cover
   *
   *     | Option | Values | About |
   *      |--------|--------|-------|
   *      | color | `pink`, `yellow`, `lime`, `blue`, `black`, `orange`, `red`, `purple`, `sky`, `green` | Makes the cover a solid color . |
   *      | brightness | `dark`, `light` | Determines whether the text on the cover should be dark or light.
   *      | url | An unsplash URL: https://images.unsplash.com | Used if making an image the cover. Only Unsplash URLs work.
   *      | idAttachment | ID of an attachment on the card | Used if setting an attached image as the cover. |
   *      | size | `normal`, `full` | Determines whether to show the card name on the cover, or below it. |
   *
   *      `brightness` can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a `color` and an `idAttachment` at the same time.
   *
   *      On the brightness options, setting it to light will make the text on the card cover dark:
   *      ![](https://developer.atlassian.com/cloud/trello/images/rest/cards/cover-brightness-dark.png)
   *
   *      And vice versa, setting it to dark will make the text on the card cover light:
   *      ![](https://developer.atlassian.com/cloud/trello/images/rest/cards/cover-brightness-light.png)
   */
  cover?: {
    /**
     * An object containing information regarding the card's cover `brightness` can be sent alongside any of the other
     * parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a color and an
     * `idAttachment` at the same time.
     */
    value?: {
      /** One of: `pink, yellow, lime, blue, black, orange, red, purple, sky, green` */
      color?: string;
      /**
       * Determines whether the text on the cover should be dark or light. Setting it to `light` will make the text on
       * the card cover dark. And vice versa, setting it to dark will make the text on the card cover light
       */
      brightness?: string;
      /** Used if making an image the cover. Only Unsplash URLs (https://images.unsplash.com/) work. */
      url?: string;
    };
  };
}
