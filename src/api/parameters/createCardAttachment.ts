export interface CreateCardAttachment {
  /** The ID of the Card */
  id: string;
  /** The name of the attachment. Max length 256. */
  name?: string;
  /** The file to attach, as multipart/form-data */
  file?: Buffer | ReadableStream | string | Blob | File;
  /** The mimeType of the attachment. Max length 256 */
  mimeType?: string;
  /** A URL to attach. Must start with `http://` or `https://` */
  url?: string;
  /** Determines whether to use the new attachment as a cover for the Card. */
  setCover?: boolean;
}
