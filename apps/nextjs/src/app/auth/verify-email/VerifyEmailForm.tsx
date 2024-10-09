"use client";

import type { Session } from "easy-lucia";
import { z } from "zod";

import { Button } from "@acme/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage, useForm } from "@acme/ui/form";
import { Input } from "@acme/ui/input";

import { verifyEmail } from "~/app/auth/_server-actions/verifyEmail";

export const VerifyEmailForm = ({ session }: { session: Session }) => {
  const form = useForm({
    schema: z.object({
      emailVerificationCode: z.string().length(8),
    }),
    defaultValues: {
      emailVerificationCode: "",
    },
  });

  const action: () => Promise<void> = form.handleSubmit(async (data) => {
    await verifyEmail({
      candidateCode: data.emailVerificationCode,
      sessionId: session.id,
    });
  });

  return (
    <Form {...form}>
      <form className="flex w-full max-w-2xl flex-col gap-4" action={action}>
        <FormField
          control={form.control}
          name="emailVerificationCode"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Votre code à 8 chiffres" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Verify email</Button>
      </form>
    </Form>
  );
};
