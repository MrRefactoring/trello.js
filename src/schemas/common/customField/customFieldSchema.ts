import { z } from 'zod';
import { TrelloIdSchema } from '../trelloIdSchema';
import { ColorSchema } from '~/schemas/common/color/colorSchema';
import { CustomFieldType } from '~/schemas/common/customField/customFieldType';
import { PrimaryColorSchema } from '~/schemas/common/color';

const BaseCustomFieldSchema = z.object({
  id: TrelloIdSchema,
  idModel: z.string(),
  modelType: z.enum(['card', 'board', 'member']),
  fieldGroup:  z.string(),
  name: z.string(),
  pos: z.number(),
  isSuggestedField: z.boolean(),
  display: z.object({
    cardFront: z.boolean(),
  }).strict(),
  limits: z.object({
    customFieldOptions: z.object({
      perField: z.object({
        status: z.enum(['ok']),
        disableAt: z.number(),
        warnAt: z.number(),
      }).strict(),
    }).strict()
  }).strict().optional(), // todo optional only for getAll
}).strict();

export const CustomFieldSchema = z.discriminatedUnion('type', [
  BaseCustomFieldSchema.extend({
    type: z.literal('list'),
    options: z.array(z.strictObject({
      id: TrelloIdSchema,
      idCustomField: TrelloIdSchema,
      value: z.strictObject({
        text: z.string(),
      }),
      color: PrimaryColorSchema,
      pos: z.number(),
    }))
  }),
  BaseCustomFieldSchema.extend({
    type: CustomFieldType.exclude(['list']),
  }),
]);

export type CustomField = z.infer<typeof CustomFieldSchema>;
