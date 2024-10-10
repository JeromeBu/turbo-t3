import { type RedirectType, redirect as nextRedirect } from "next/navigation";

import type { AppRoutes } from "~/generated-routes";

export const redirect = (url: AppRoutes, type?: RedirectType | undefined) =>
  nextRedirect(url, type);
