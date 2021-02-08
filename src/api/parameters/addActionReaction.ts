export interface AddActionReaction {
  /** The ID of the action */
  idAction: string;
  /** The primary `shortName` of the emoji to add. See [/emoji](#emoji) */
  shortName?: string;
  /** The `skinVariation` of the emoji to add. See [/emoji](#emoji) */
  skinVariation?: string;
  /** The emoji to add as a native unicode emoji. See [/emoji](#emoji) */
  native?: string;
  /** The `unified` value of the emoji to add. See [/emoji](#emoji) */
  unified?: string;
}
