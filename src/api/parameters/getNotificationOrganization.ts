export interface GetNotificationOrganization {
  /** The ID of the notification */
  id: Record<string, any>;
  /** `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: Record<string, any>;
}
