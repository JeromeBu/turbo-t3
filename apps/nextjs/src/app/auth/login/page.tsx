import { redirect } from "~/navigationHelpers";
import { NavLink } from "~/app/_components/NavLink";
import { EmailPasswordForm } from "~/app/auth/_components/EmailPasswordForm";
import { getCurrentUser } from "~/app/auth/_server-actions/getCurrentUser";
import { login } from "~/app/auth/_server-actions/login";


export default async function LoginPage() {
  const user = await getCurrentUser();
  if (user) return redirect("/");

  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[3rem]">
          Login
        </h1>
        <EmailPasswordForm submitButtonLabel={"Login"} submitAction={login} />
        <NavLink href="/auth/signup">or Sign Up</NavLink>
      </div>
    </main>
  );
}
