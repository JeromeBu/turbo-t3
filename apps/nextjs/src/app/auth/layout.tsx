import { AuthNavigation } from "~/app/auth/_components/AuthNavigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        {children}
      </div>
      <div className="p-4">
        <AuthNavigation />
      </div>
    </main>
  );
}
