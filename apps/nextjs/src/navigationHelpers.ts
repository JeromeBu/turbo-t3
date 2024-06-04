import type {AppRoutes} from "~/generated-routes";
import { redirect as nextRedirect } from "next/navigation";

export const redirect = (url: AppRoutes) => nextRedirect(url)
