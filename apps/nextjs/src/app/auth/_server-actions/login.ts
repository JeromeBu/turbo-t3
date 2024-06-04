"use server";

import { redirect } from "~/navigationHelpers";

import type { EmailAndPassword } from "@acme/validators";

import { authUseCases } from "~/authUseCases";

export const login = async (emailAndPassword: EmailAndPassword) => {
  await authUseCases.login(emailAndPassword);
  redirect("/");
};
