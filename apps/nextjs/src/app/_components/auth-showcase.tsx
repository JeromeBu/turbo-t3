import { redirect } from 'next/navigation'

import { Button } from "@acme/ui/button";

import { api } from "~/trpc/server";

export async function AuthShowcase() {
  const { user } = await api.auth.getSessionAndUser();

  if (!user) {
    // redirect programmatically to sign up page
    redirect("/sign-up");
    return
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        <span>Logged in as {user.email}</span>
      </p>

      <form>
        <Button
          size="lg"
          formAction={async () => {
            "use server";
            await api.auth.logout();
          }}
        >
          Sign out
        </Button>
      </form>
    </div>
  );
}
