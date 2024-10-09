import { getCurrentUserAndSession } from "~/app/auth/_server-actions/getCurrentUser";
import { ResendVerificationLink } from "~/app/auth/verify-email/ResendVerificationLink";
import { VerifyEmailForm } from "~/app/auth/verify-email/VerifyEmailForm";
import { redirect } from "~/navigationHelpers";

export default async function VerifyEmailPage() {
  const { user, session } = await getCurrentUserAndSession();
  if (!user) return redirect("/auth/login");
  if (user.emailVerifiedAt) return <p>Your email is already verified</p>;

  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[3rem]">Verify your email</h1>

        <p>You need to verify your email address to continue.</p>
        <p>The email that needs to be verified is : {user.email}</p>

        <VerifyEmailForm session={session} />

        <p>You can also resend the verification email : </p>

        <ResendVerificationLink />
      </div>
    </main>
  );
}
