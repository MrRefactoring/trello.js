export interface UpdateMember {
  /** The ID or username of the member */
  id: string;
  /** New name for the member. Cannot begin or end with a space. */
  fullName?: string;
  /** New initials for the member. 1-4 characters long. */
  initials?: string;
  /** New username for the member. At least 3 characters long, only lowercase letters, underscores, and numbers. Must be unique. */
  username?: string;
  bio?: string;
  /** One of: `gravatar`, `none`, `upload` */
  avatarSource?: string;

  preferences?: {
    colorBlind?: boolean;
    locale?: string;
    /** `-1` for disabled, `1`, or `60` */
    minutesBetweenSummaries?: number;
  };

  /**
   * @deprecated Use `preferences.colorBlind`.
   */
  colorBlind?: boolean;

  /**
   * @deprecated `preferences.locale`.
   */
  locale?: string;

  /**
   * @deprecated Use `preferences.minutesBetweenSummaries`.
   *
   * `-1` for disabled, `1`, or `60`
   */
  minutesBetweenSummaries?: number;
}
