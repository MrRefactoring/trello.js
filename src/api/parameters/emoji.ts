export interface Emoji {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The locale to return emoji descriptions and names in. Defaults to the logged in member's locale. */
  locale?: string;
  /** `true` to return spritesheet URLs in the response */
  spritesheets?: boolean;
}
