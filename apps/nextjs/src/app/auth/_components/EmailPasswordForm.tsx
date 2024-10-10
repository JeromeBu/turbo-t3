"use client";

import { Button } from "@acme/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage, useForm } from "@acme/ui/form";
import { Input } from "@acme/ui/input";
import type { EmailAndPassword } from "@acme/validators";
import { emailAndPasswordSchema } from "@acme/validators";

type EmailPasswordFormProps = {
  submitButtonLabel: string;
  submitAction: (params: EmailAndPassword) => Promise<void>;
};

export const EmailPasswordForm = ({ submitButtonLabel, submitAction }: EmailPasswordFormProps) => {
  const form = useForm({
    schema: emailAndPasswordSchema,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const action: () => Promise<void> = form.handleSubmit(submitAction);

  return (
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} type="password" placeholder="Password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>{submitButtonLabel}</Button>
      </form>
    </Form>
  );
};
