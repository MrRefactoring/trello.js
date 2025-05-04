import { z } from 'zod';
import { CustomFieldSchema } from '~/schemas/common/customField/customFieldSchema';

export const CustomFieldsSchema = z.array(CustomFieldSchema);

export type CustomFields = z.infer<typeof CustomFieldsSchema>;
