"use server";

import { redirect } from "~/navigationHelpers";
import { authUseCases } from "~/authUseCases";

export const verifyEmail = async (verifyEmailCodeParams: {sessionId: string, candidateCode: string}) => {
  await authUseCases.verifyEmail(verifyEmailCodeParams);
  redirect("/");
};
