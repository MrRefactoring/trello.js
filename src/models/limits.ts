import type { z } from 'zod';
import { apiObject } from '#/core';
import { LimitValueSchema } from '#/models/limitValue';

export const LimitsSchema = apiObject({
  attachments: apiObject({
    perBoard: LimitValueSchema.optional(),
    perCard: LimitValueSchema.optional(),
  }).optional(),
  boards: apiObject({
    totalMembersPerBoard: LimitValueSchema.optional(),
    totalAccessRequestsPerBoard: LimitValueSchema.optional(),
    totalPerMember: LimitValueSchema.optional(),
  }).optional(),
  cards: apiObject({
    openPerBoard: LimitValueSchema.optional(),
    openPerList: LimitValueSchema.optional(),
    totalPerBoard: LimitValueSchema.optional(),
    totalPerList: LimitValueSchema.optional(),
  }).optional(),
  checklists: apiObject({
    perBoard: LimitValueSchema.optional(),
    perCard: LimitValueSchema.optional(),
  }).optional(),
  checkItems: apiObject({
    perChecklist: LimitValueSchema.optional(),
  }).optional(),
  customFields: apiObject({
    perBoard: LimitValueSchema.optional(),
  }).optional(),
  customFieldOptions: apiObject({
    perField: LimitValueSchema.optional(),
  }).optional(),
  labels: apiObject({
    perBoard: LimitValueSchema.optional(),
  }).optional(),
  lists: apiObject({
    openPerBoard: LimitValueSchema.optional(),
    totalPerBoard: LimitValueSchema.optional(),
  }).optional(),
  stickers: apiObject({
    perCard: LimitValueSchema.optional(),
  }).optional(),
  reactions: apiObject({
    perAction: LimitValueSchema.optional(),
    uniquePerAction: LimitValueSchema.optional(),
  }).optional(),
  orgs: apiObject({
    totalPerMember: LimitValueSchema.optional(),
    totalMembersPerOrg: LimitValueSchema.optional(),
    freeBoardsPerOrg: LimitValueSchema.optional(),
    usersPerFreeOrg: LimitValueSchema.optional(),
  }).optional(),
});

export type Limits = z.infer<typeof LimitsSchema>;
