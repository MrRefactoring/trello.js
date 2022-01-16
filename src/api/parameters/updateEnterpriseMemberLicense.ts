export interface UpdateEnterpriseMemberLicense {
  /** ID of the Enterprise. */
  id: string;
  /** The ID of the Member */
  idMember: string;
  /** Boolean value to determine whether the user should be given an Enterprise license (true) or not (false). */
  value: boolean;
  /**
   * @deprecated Use `value` instead.
   *
   *   Boolean value to determine whether the user should be given an Enterprise license (true) or not (false).
   */
  values: boolean;
}
