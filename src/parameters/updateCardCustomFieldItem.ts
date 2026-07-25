import { z } from 'zod';

export const UpdateCardCustomFieldItemSchema = z.object({
  /** ID of the card that the Custom Field value should be set/updated for */
  idCard: z.string(),
  /** ID of the Custom Field on the card. */
  idCustomField: z.string(),
  body: z
    .union([
      z.object({
        /**
         * An object containing the key and value to set for the card's Custom Field value. The key used to set the
         * value should match the type of Custom Field defined.
         */
        value: z
          .object({
            text: z.string().optional(),
            checked: z.boolean().optional(),
            date: z.union([z.string(), z.date()]).optional(),
            number: z.string().optional(),
          })
          .optional(),
      }),
      z.object({
        /** The ID of the option for the list type Custom Field */
        idValue: z.string().optional(),
      }),
    ])
    .optional(),
});

export type UpdateCardCustomFieldItem = z.input<typeof UpdateCardCustomFieldItemSchema>;
