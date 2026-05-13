import { z } from 'zod';

export const UpdateCardCustomFieldsSchema = z.object({
  idCard: z.string(),
  /** An array of objects containing the custom field ID, key and value, and ID of list type option. */
  customFieldItems: z
    .array(
      z.object({
        /** The ID of the Custom Field */
        idCustomField: z.unknown().optional(),
        /**
         * An object containing the key and value to set for the card's Custom Field value. The key used to set the
         * value should match the type of Custom Field defined. This is optional if Custom Field is list type.
         */
        value: z
          .object({
            text: z.string().optional(),
            checked: z.boolean().optional(),
            date: z.string().optional(),
            number: z.string().optional(),
          })
          .optional(),
        /** The ID of the option for the list type Custom Field. This is optional if Custom Field is not list type. */
        idValue: z.unknown().optional(),
      }),
    )
    .optional(),
});

export type UpdateCardCustomFields = z.input<typeof UpdateCardCustomFieldsSchema>;
