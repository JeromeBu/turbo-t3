"use client";

import { z } from "zod";

import { Button } from "@acme/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  useForm,
} from "@acme/ui/form";
import { Input } from "@acme/ui/input";
import { emailSchema } from "@acme/validators";

import { triggerResetPassword } from "~/app/auth/_server-actions/triggerResetPassword";

export default function ForgetPasswordPage() {
  const form = useForm({
    schema: z.object({
      email: emailSchema,
    }),
    defaultValues: {
      email: "",
    },
  });

  const action: () => Promise<void> = form.handleSubmit(triggerResetPassword);

  return (
    <>
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[3rem]">
        Forgot Password
      </h1>
      <p className="text-sm text-muted-foreground">
        Please enter your email address and we will send you a link to reset
        your password.
      </p>

      <Form {...form}>
        <form className="flex w-full max-w-2xl flex-col gap-4" action={action}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>Send Reset Link</Button>
        </form>
      </Form>
    </>
  );
}
