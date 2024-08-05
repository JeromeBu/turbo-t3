import { redirect } from "~/navigationHelpers";
import { EmailPasswordForm } from "~/app/auth/_components/EmailPasswordForm";
import { getCurrentUser } from "~/app/auth/_server-actions/getCurrentUser";
import { login } from "~/app/auth/_server-actions/login";


export default async function LoginPage() {
  const user = await getCurrentUser();
  if (user) return redirect("/");

  return (
   <>
     <h1 className="text-5xl font-extrabold tracking-tight sm:text-[3rem]">
       Login
     </h1>
     <EmailPasswordForm submitButtonLabel={"Login"} submitAction={login}/>
   </>
  );
}
