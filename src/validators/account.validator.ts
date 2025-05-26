import { z } from "zod";

export const accountValidator = z.object({
  firstName: z.string(),
  surname: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().min(10),
  dateOfBirth: z.string(), // ISO format recommended
});
