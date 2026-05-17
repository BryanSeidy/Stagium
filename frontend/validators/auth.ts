import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Adresse email invalide"),
  password: z.string().min(8, "Minimum 8 caractères")
});

export const registerSchema = z.object({
  name: z.string().min(2, "Nom trop court").max(120),
  email: z.string().email("Adresse email invalide"),
  password: z.string().min(10, "Minimum 10 caractères"),
  role: z.enum(["student", "company"]),
  organization: z.string().max(160).optional()
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
