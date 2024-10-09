"use server";

import { authUseCases } from "~/authUseCases";

export const getCurrentUser = async () => {
  const { user } = await authUseCases.validateRequest();
  return user;
};

export const getCurrentUserAndSession = () => authUseCases.validateRequest();
