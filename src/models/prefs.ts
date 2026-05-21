import { z } from 'zod';
import { apiObject } from '#/core';
import { CardAgingSchema } from '#/models/cardAging';
import { ImageDescriptorSchema } from '#/models/imageDescriptor';
import { SwitcherViewSchema } from '#/models/switcherView';

export const PrefsSchema = apiObject({
  permissionLevel: z.enum(['private', 'org', 'board', 'public', 'enterprise']).optional(),
  hideVotes: z.boolean().optional(),
  voting: z.string().optional(),
  comments: z.string().optional(),
  invitations: z.unknown().optional(),
  selfJoin: z.boolean().optional(),
  cardCovers: z.boolean().optional(),
  isTemplate: z.boolean().optional(),
  cardAging: CardAgingSchema.optional(),
  calendarFeedEnabled: z.boolean().optional(),
  background: z.string().optional(),
  backgroundImage: z.string().url().nullish(),
  backgroundImageScaled: z.array(ImageDescriptorSchema).nullish(),
  backgroundTile: z.boolean().optional(),
  backgroundBrightness: z.string().optional(),
  backgroundBottomColor: z.string().optional(),
  backgroundTopColor: z.string().optional(),
  canBePublic: z.boolean().optional(),
  canBeEnterprise: z.boolean().optional(),
  canBeOrg: z.boolean().optional(),
  canBePrivate: z.boolean().optional(),
  canInvite: z.boolean().optional(),
  autoArchive: z.string().nullish(),
  backgroundColor: z.string().nullish(),
  backgroundDarkColor: z.string().nullish(),
  backgroundDarkImage: z.string().nullish(),
  cardCounts: z.boolean().optional(),
  hiddenPluginBoardButtons: z.array(z.unknown()).optional(),
  sharedSourceUrl: z.string().nullish(),
  showCompleteStatus: z.boolean().optional(),
  switcherViews: z.array(SwitcherViewSchema).optional(),
});

export type Prefs = z.infer<typeof PrefsSchema>;
