"use server";

import { authUseCases } from "~/authUseCases";

export const triggerResetPassword = async (params: { email: string }) => {
  await authUseCases.resetPassword(params);
};
