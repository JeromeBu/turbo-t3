"use server";

import { authUseCases } from "~/authUseCases";

export const resendVerificationCode = () => authUseCases.resendVerificationEmail();
