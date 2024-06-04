import Link from "next/link";
import type { AppRoutes } from "~/generated-routes";

interface NavLinkProps {
  href: AppRoutes;
  children: React.ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => (
  <Link href={href}>{children}</Link>
);
