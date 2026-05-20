import { z } from 'zod';
import { apiObject } from '#/core';

export const customFieldItemValueSchema = apiObject({
  value: apiObject({
    text: z.string().nullish(),
    number: z.string().nullish(),
    date: z.string().nullish(),
    checked: z.string().nullish(),
    option: z.string().nullish(),
  }).optional(),
});

export type customFieldItemValue = z.infer<typeof customFieldItemValueSchema>;
