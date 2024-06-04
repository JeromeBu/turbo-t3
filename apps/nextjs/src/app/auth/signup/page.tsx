import { NavLink } from "~/app/_components/NavLink";
import { EmailPasswordForm } from "~/app/auth/_components/EmailPasswordForm";
import { getCurrentUser } from "~/app/auth/_server-actions/getCurrentUser";
import { signUp } from "~/app/auth/_server-actions/signUp";
import { redirect } from "~/navigationHelpers";

export default async function SignUpPage() {
  const user = await getCurrentUser();
  if (user) return redirect("/auth/login");

  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[3rem]">
          Sign Up
        </h1>
        <EmailPasswordForm
          submitButtonLabel={"Sign Up"}
          submitAction={signUp}
        />
        <NavLink href="/auth/login">or Login</NavLink>
      </div>
    </main>
  );
}
