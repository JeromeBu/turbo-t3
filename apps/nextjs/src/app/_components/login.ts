"use server";

import { redirect } from "next/navigation";

import { api } from "~/trpc/server";

export const login = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) return;

  await api.auth.login({
    email: email as string,
    password: password as string,
  });
  redirect("/");
};

