export interface GetMemberCustomEmoji {
  /** The ID or username of the member */
  id: Record<string, any>;
  /** The ID of the custom emoji */
  idEmoji: Record<string, any>;
  /** `all` or a comma-separated list of `name`, `url` */
  fields?: string;
}
