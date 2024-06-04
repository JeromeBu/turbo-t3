"use server";

import { redirect } from "next/navigation";

import { api } from "~/trpc/server";

export const signUp = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) return;

  await api.auth.signUp({
    email: email as string,
    password: password as string,
  });
  redirect("/");
};

