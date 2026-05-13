import { z } from 'zod';

export const NotificationFieldsSchema = z.enum([
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
