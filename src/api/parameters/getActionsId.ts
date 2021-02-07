export interface GetActionsId {
  /** The ID of the Action */
  id: string;
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
