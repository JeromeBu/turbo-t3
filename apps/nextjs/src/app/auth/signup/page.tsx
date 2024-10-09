import { EmailPasswordForm } from "~/app/auth/_components/EmailPasswordForm";
import { getCurrentUser } from "~/app/auth/_server-actions/getCurrentUser";
import { signUp } from "~/app/auth/_server-actions/signUp";
import { redirect } from "~/navigationHelpers";

export default async function SignUpPage() {
  const user = await getCurrentUser();
  if (user) return redirect("/auth/login");

  return (
    <>
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[3rem]">Sign Up</h1>
      <EmailPasswordForm submitButtonLabel={"Sign Up"} submitAction={signUp} />
    </>
  );
}
