import { z } from 'zod';

export const ChannelSchema = z.enum(['email']);

export type Channel = z.infer<typeof ChannelSchema>;
