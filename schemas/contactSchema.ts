// schemas/contactSchema.ts
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Full Name is required.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  subject: z.string().min(1, { message: 'Subject is required.' }),
  message: z.string().min(1, { message: 'Message is required.' }).max(1000, { message: 'Message cannot exceed 1000 characters.' }),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;

export type ApiResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string>; // For validation errors
};