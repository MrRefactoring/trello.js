import { z } from 'zod';
import { apiObject } from '#/core';

export const BoardMyPrefsSchema = apiObject({
  showSidebar: z.boolean().optional(),
  showSidebarMembers: z.boolean().optional(),
  showSidebarBoardActions: z.boolean().optional(),
  showSidebarActivity: z.boolean().optional(),
  idEmailList: z.string().nullish(),
  emailPosition: z.string().optional(),
  showCompactMirrorCards: z.boolean().optional(),
  aiEmailEnabled: z.boolean().optional(),
  aiSlackEnabled: z.boolean().optional(),
  aiBrowserExtensionEnabled: z.boolean().optional(),
  aiMSTeamsEnabled: z.boolean().optional(),
  aiConfluenceEnabled: z.boolean().optional(),
});

export type BoardMyPrefs = z.infer<typeof BoardMyPrefsSchema>;
