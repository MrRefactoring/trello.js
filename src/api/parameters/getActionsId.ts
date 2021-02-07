export interface GetActionsId {
  id: string;
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  display?: boolean;
  entities?: boolean;
  /** `all` or a comma-separated list of action [fields](/cloud/trello/guides/rest-api/object-definitions/#action-object) */
  fields?: string;
  member?: boolean;
  /** `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  member_fields?: string;
  /** Whether to include the member object for the creator of the action */
  memberCreator?: boolean;
  /** `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  memberCreator_fields?: string;
}
