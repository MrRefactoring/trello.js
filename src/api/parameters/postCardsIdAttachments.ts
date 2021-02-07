export interface PostCardsIdAttachments {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The name of the attachment. Max length 256. */
  name?: string;
  /** The file to attach, as multipart/form-data */
  file?: string;
  /** The mimeType of the attachment. Max length 256 */
  mimeType?: string;
  /** A URL to attach. Must start with `http://` or `https://` */
  url?: string;
  /** Determines whether to use the new attachment as a cover for the Card. */
  setCover?: boolean;
}
