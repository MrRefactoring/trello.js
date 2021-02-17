export interface CreateEnterpriseToken {
  /** ID of the enterprise to retrieve. */
  id: string;
  /** One of: `1hour`, `1day`, `30days`, `never` */
  expiration?: string;
}
