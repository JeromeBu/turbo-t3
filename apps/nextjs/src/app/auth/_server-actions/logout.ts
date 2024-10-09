"use server";

import { authUseCases } from "~/authUseCases";
import { redirect } from "~/navigationHelpers";

export const logout = async () => {
  await authUseCases.logout();
  redirect("/");
};
