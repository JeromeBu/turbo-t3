"use client";

import { usePathname } from "next/navigation";
import type React from "react";

import { NavLink } from "~/app/_components/NavLink";
import type { AppRoutes } from "~/generated-routes";

export function AuthNavigation() {
  return (
    <div className="flex items-center justify-center gap-6 text-sm">
      <NavLinkIfNotCurrent href="/auth/login">Login</NavLinkIfNotCurrent>
      <NavLinkIfNotCurrent href="/auth/signup">Sign Up</NavLinkIfNotCurrent>
      <NavLinkIfNotCurrent href="/auth/forget-password">Forget Password ?</NavLinkIfNotCurrent>
    </div>
  );
}

const NavLinkIfNotCurrent = (props: {
  href: AppRoutes;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isCurrent = pathname === props.href;

  return isCurrent ? null : <NavLink href={props.href}>{props.children}</NavLink>;
};
