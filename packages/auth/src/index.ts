import type { AuthDependencies } from "./ports/AuthDependencies";
import { createPgAuthRepository } from "./adapters/PgAuthRepository";
import { createChangePassword } from "./useCases/createChangePassword";
import { createLogin } from "./useCases/createLogin";
import { createLogout } from "./useCases/createLogout";
import { createResetPassword } from "./useCases/createResetPassword";
import { createSignUp } from "./useCases/createSignUp";
import { createValidateRequest } from "./useCases/createValidateRequest";
import { createVerifyEmail } from "./useCases/createVerifyEmail";

export { createLucia } from "./config/createLucia";

export const createAuthUseCases = (authDeps: AuthDependencies) => ({
  signUp: createSignUp(authDeps),
  login: createLogin(authDeps),
  logout: createLogout(authDeps.lucia),
  validateRequest: createValidateRequest(authDeps.lucia),
  verifyEmail: createVerifyEmail(authDeps),
  resetPassword: createResetPassword(authDeps),
  changePassword: createChangePassword(authDeps),
});

export { createPgAuthRepository };

export type { Session, User, Cookie } from "lucia";
export { verifyRequestOrigin } from "lucia";
