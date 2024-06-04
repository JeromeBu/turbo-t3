import { z } from "zod";

export const createPostSchema = z.object({
  id: z.string().min(1).max(32),
  title: z.string().max(256),
  content: z.string().max(256),
});

export const emailSchema = z.string().email();

export const emailAndPasswordSchema = z.object({
  email: emailSchema,
  password: z.string().min(7),
});

export type EmailAndPassword = z.infer<typeof emailAndPasswordSchema>;

export type Cookies = () => {
  get: (name: string) => { value: string } | undefined;
  set: (name: string, value: string, attributes?: Record<string, any>) => void,
}