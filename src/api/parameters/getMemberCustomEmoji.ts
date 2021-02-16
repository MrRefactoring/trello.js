export interface GetMemberCustomEmoji {
  /** The ID or username of the member */
  id: string;
  /** The ID of the custom emoji */
  idEmoji: string;
  /** `all` or a comma-separated list of `name`, `url` */
  fields?: string;
}
