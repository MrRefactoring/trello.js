export interface CreateMemberCustomEmoji {
  /** The ID or username of the member */
  id: string;
  file: string;
  /** Name for the emoji. 2 - 64 characters */
  name: string;
}
