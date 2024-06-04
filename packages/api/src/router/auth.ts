import type { TRPCRouterRecord } from "@trpc/server";

import type { Cookie } from "@acme/auth";
import type { Cookies } from "@acme/validators";
import { emailAndPasswordSchema } from "@acme/validators";

import { protectedProcedure, publicProcedure } from "../trpc";

const redirectResponseWithCookieInHeaders = (
  sessionCookie: Cookie,
  cookies: Cookies,
) => {
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return new Response(null, {
    status: 302,
    headers: { Location: "/" },
  });
};

export const authRouter = {
  signUp: publicProcedure
    .input(emailAndPasswordSchema)
    .mutation(async ({ ctx, input }) => {
      const sessionCookie = await ctx.authUseCases.signUp(input);
      return redirectResponseWithCookieInHeaders(sessionCookie, ctx.cookies);
    }),
  login: publicProcedure
    .input(emailAndPasswordSchema)
    .mutation(async ({ ctx, input }) => {
      const sessionCookie = await ctx.authUseCases.login(input);
      return redirectResponseWithCookieInHeaders(sessionCookie, ctx.cookies);
    }),
  logout: protectedProcedure.mutation(async ({ ctx }) => {
    const blankCookie = await ctx.authUseCases.logout(ctx.cookies);
    return redirectResponseWithCookieInHeaders(blankCookie, ctx.cookies);
  }),
  getSessionAndUser: publicProcedure.query(({ ctx }) => ({
    session: ctx.session,
    user: ctx.user,
  })),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can see this secret message!";
  }),
} satisfies TRPCRouterRecord;
