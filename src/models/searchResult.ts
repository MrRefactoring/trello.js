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
  options: z.record(z.string(), z.any()).optional(),
});

export type SearchResult = z.infer<typeof SearchResultSchema>;
