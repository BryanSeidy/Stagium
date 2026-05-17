import { z } from "zod";

export const internshipSchema = z.object({
  title: z.string().min(6).max(160),
  description: z.string().min(80),
  city: z.string().min(2),
  domain: z.string().min(2),
  mode: z.enum(["remote", "hybrid", "onsite"]),
  type: z.enum(["academic", "professional", "pre-employment"]),
  stipend: z.coerce.number().nonnegative().optional(),
  tags: z.array(z.string()).min(1)
});

export type InternshipInput = z.infer<typeof internshipSchema>;
