import type { z } from 'zod';
import { openEnum } from '#/core';

export const NotificationFieldsSchema = openEnum([
  'id',
  'unread',
  'type',
  'date',
  'dateRead',
  'data',
  'card',
  'board',
  'idMemberCreator',
  'idAction',
  'reactions',
]);

export type NotificationFields = z.infer<typeof NotificationFieldsSchema>;
