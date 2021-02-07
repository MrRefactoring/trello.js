export interface GetCardsIdAttachmentsIdattachment {
  /** The ID of the Card */
  id: string;
  /** The ID of the Attachment */
  idAttachment: string;
  /** The Attachment fields to be included in the response. */
  fields?: Record<string, any>[];
}
