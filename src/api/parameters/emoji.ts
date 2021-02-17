export interface Emoji {
  /** The locale to return emoji descriptions and names in. Defaults to the logged in member's locale. */
  locale?: string;
  /** `true` to return spritesheet URLs in the response */
  spriteSheets?: boolean;
}
