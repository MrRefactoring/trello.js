import { z } from 'zod';
import { apiObject } from '#/core';

export const GetEnterpriseSignUpUrlSchema = apiObject({
  signupUrl: z.string().optional(),
});

export type GetEnterpriseSignUpUrl = z.infer<typeof GetEnterpriseSignUpUrlSchema>;
