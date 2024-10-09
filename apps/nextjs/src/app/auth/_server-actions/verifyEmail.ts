"use server";

import { authUseCases } from "~/authUseCases";
import { redirect } from "~/navigationHelpers";

export const verifyEmail = async (verifyEmailCodeParams: {
  sessionId: string;
  candidateCode: string;
}) => {
  await authUseCases.verifyEmail(verifyEmailCodeParams);
  redirect("/");
};
