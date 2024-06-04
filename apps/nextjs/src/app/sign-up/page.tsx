import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@acme/ui/button";

import { EmailPasswordForm } from "~/app/_components/EmailPasswordForm";
import { signUp } from "~/app/_components/signUp";
import { api } from "~/trpc/server";

export default async function SignUpPage() {
  const { user } = await api.auth.getSessionAndUser();

  if (user) return redirect("/");

  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[3rem]">
          Sign Up
        </h1>
        <EmailPasswordForm>
          <Button formAction={signUp}>Sign Up</Button>
        </EmailPasswordForm>
        <Link href="/login">or Login</Link>
      </div>
    </main>
  );
}
