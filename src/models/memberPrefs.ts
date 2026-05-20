import { z } from 'zod';
import { apiObject } from '#/core';

export const MemberPrefsSchema = apiObject({
  timezoneInfo: apiObject({
    offsetCurrent: z.number().optional(),
    timezoneCurrent: z.string().optional(),
    offsetNext: z.number().optional(),
    dateNext: z.coerce.date().optional(),
    timezoneNext: z.string().optional(),
  }).optional(),
  privacy: apiObject({
    fullName: z.enum(['public', 'private', 'collaborator']).optional(),
    avatar: z.enum(['public', 'private', 'collaborator']).optional(),
  }).optional(),
  sendSummaries: z.boolean().optional(),
  minutesBetweenSummaries: z.number().optional(),
  minutesBeforeDeadlineToNotify: z.number().optional(),
  colorBlind: z.boolean().optional(),
  locale: z.string().optional(),
  timezone: z.string().optional(),
  twoFactor: apiObject({
    enabled: z.boolean().optional(),
    needsNewBackups: z.boolean().optional(),
  }).optional(),
  keyboardShortcutsEnabled: z.boolean().optional(),
});

export type MemberPrefs = z.infer<typeof MemberPrefsSchema>;
