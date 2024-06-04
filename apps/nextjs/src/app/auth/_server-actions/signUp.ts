"use server";

import { redirect } from "~/navigationHelpers";

import type { EmailAndPassword } from "@acme/validators";

import { authUseCases } from "~/authUseCases";


export const signUp = async (emailAndPassword: EmailAndPassword) => {
  await authUseCases.signUp(emailAndPassword)
  redirect("/");
};
