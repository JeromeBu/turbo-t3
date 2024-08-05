"use server";

import { redirect } from "~/navigationHelpers";
import { authUseCases } from "~/authUseCases";

export const logout = async () => {
  await authUseCases.logout();
  redirect("/");
};
