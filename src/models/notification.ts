import { z } from 'zod';
import { apiObject, openEnum } from '#/core';
import { CardSchema } from '#/models/card';
import { BoardSchema } from '#/models/board';
import { ReactionSchema } from '#/models/reaction';

export const NotificationSchema = apiObject({
  id: z.string(),
  unread: z.boolean().optional(),
  type: openEnum(['cardDueSoon']).optional(),
  date: z.coerce.date().optional(),
  dateRead: z.coerce.date().optional(),
  data: z.string().optional(),
  card: CardSchema.optional(),
  board: BoardSchema.optional(),
  idMemberCreator: z.string().nullish(),
  idAction: z.string().nullish(),
  reactions: z.array(ReactionSchema).optional(),
});

export type Notification = z.infer<typeof NotificationSchema>;
