import { z } from 'zod';
import { ColorSchema } from './color/colorSchema';
import { hexColorSchema } from './hexColorSchema';
import { backgroundScaledImageSchema } from '~/schemas/common/backgroundScaledImageSchema';
import { TrelloIdSchema } from '~/schemas/common/trelloIdSchema';

export const PrefsSchema = z
  .object({
    background: z.union([ColorSchema, TrelloIdSchema]), // todo use discriminatedUnion
    backgroundBottomColor: hexColorSchema,
    backgroundBrightness: z.enum(['light', 'dark']),
    backgroundColor: hexColorSchema.nullable(),
    backgroundDarkColor: hexColorSchema.nullable(),
    backgroundDarkImage: z.string().url().nullable(),
    backgroundImage: z.string().url().nullable(),
    backgroundImageScaled: z.array(backgroundScaledImageSchema).nullable(),
    backgroundTile: z.boolean(),
    backgroundTopColor: hexColorSchema,
    calendarFeedEnabled: z.boolean(),
    canBeEnterprise: z.boolean(),
    canBeOrg: z.boolean(),
    canBePrivate: z.boolean(),
    canBePublic: z.boolean(),
    canInvite: z.boolean(),
    cardAging: z.enum(['regular']),
    cardCounts: z.boolean(),
    cardCovers: z.boolean(),
    comments: z.enum(['members']),
    hiddenPluginBoardButtons: z.array(z.unknown()),
    hideVotes: z.boolean(),
    invitations: z.enum(['members']),
    isTemplate: z.boolean(),
    permissionLevel: z.enum(['private', 'org', 'board']),
    selfJoin: z.boolean(),
    sharedSourceUrl: z.string().url().nullable(),
    showCompleteStatus: z.boolean(),
    switcherViews: z.array(
      z
        .object({
          viewType: z.enum(['Board', 'Table', 'Calendar', 'Dashboard', 'Timeline', 'Map']),
          enabled: z.boolean(),
        })
        .strict(),
    ),
    voting: z.enum(['disabled', 'members']),
    autoArchive: z.boolean().nullable(),
  })
  .strict();

export type Prefs = z.infer<typeof PrefsSchema>;
