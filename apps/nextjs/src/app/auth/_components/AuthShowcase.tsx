import { Button } from "@acme/ui/button";

import { getCurrentUser } from "~/app/auth/_server-actions/getCurrentUser";
import { logout } from "~/app/auth/_server-actions/logout";
import { redirect } from "~/navigationHelpers";

export async function AuthShowcase() {
  const user = await getCurrentUser();

  if (!user) {
    // redirect programmatically to sign up page
    redirect("/auth/login");
    return;
  }

  if (user.emailVerifiedAt === null) {
    // redirect programmatically to verify email page
    redirect(`/auth/verify-email?email=${user.email}`);
    return;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        <span>Logged in as {user.email}</span>
      </p>

      <form action={logout}>
        <Button size="lg" type="submit">
          Sign out
        </Button>
      </form>
    </div>
  );
}
