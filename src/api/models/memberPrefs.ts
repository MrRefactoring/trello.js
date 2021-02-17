export interface MemberPrefs {
  timezoneInfo?: {
    offsetCurrent?: number;
    timezoneCurrent?: string;
    offsetNext?: number;
    dateNext?: string;
    timezoneNext?: string;
  };
  privacy?: {
    fullName?: string;
    avatar?: string;
  };
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
    enabled?: boolean;
    needsNewBackups?: boolean;
  };
}
