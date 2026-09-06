import { z } from 'zod';
import { apiObject } from '#/core';
import { CardSchema } from '#/models/card';
import { BoardSchema } from '#/models/board';
import { MemberSchema } from '#/models/member';
import { OrganizationSchema } from '#/models/organization';

export const SearchResultSchema = apiObject({
  cards: z.array(CardSchema).optional(),
  boards: z.array(BoardSchema).optional(),
  members: z.array(MemberSchema).optional(),
  organizations: z.array(OrganizationSchema).optional(),
  options: apiObject({
    terms: z.array(
      apiObject({
        text: z.string(),
        partial: z.boolean().optional(),
      }),
    ),
    modifiers: z.array(z.unknown()),
    modelTypes: z.array(z.string()),
    partial: z.boolean(),
  }).optional(),
});

export type SearchResult = z.infer<typeof SearchResultSchema>;
