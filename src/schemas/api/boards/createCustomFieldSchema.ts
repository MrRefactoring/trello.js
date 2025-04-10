import { z } from 'zod';
import { TrelloIdSchema } from '~/schemas/common/trelloIdSchema';
import { CustomFieldType } from '~/schemas/common';
import { PrimaryColorSchema } from '~/schemas/common/color';

const BaseCreateCustomFieldSchema = z.strictObject({
  boardId: TrelloIdSchema,
  /**
   * The name of the Custom Field
   */
  name: z.string(),
  pos: z.union([z.string(), z.number()]).optional(),
  /**
   * Whether this Custom Field should be shown on the front of Cards
   *
   * @default true
   */
  cardFront: z.boolean().optional(),
});

export const CreateCustomFieldSchema = z.discriminatedUnion('type', [
  BaseCreateCustomFieldSchema.extend({
    type: z.literal('list'),
    options: z.array(
      z.object({
        value: z.object({
          text: z.string(),
        }).strict(),
        /**
         * todo message
         *
         * @default none
         */
        color: PrimaryColorSchema.optional(),
        pos: z.union([z.string(), z.number()]).optional(),
      }).strict()
    ).optional(),
  }),
  BaseCreateCustomFieldSchema.extend({
    type: CustomFieldType.exclude(['list']),
  }),
]);

export type CreateCustomField = z.infer<typeof CreateCustomFieldSchema>;
