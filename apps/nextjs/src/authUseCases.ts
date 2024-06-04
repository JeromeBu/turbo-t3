import type { AuthEmailSenders } from "easy-lucia/types";
import type {  Cookie } from "easy-lucia";
import { cookies } from "next/headers";
import { createAuthUseCases, createLuciaAndAuthRepository } from "easy-lucia";
import nodemailer from "nodemailer";

import { db } from "@acme/db";

type Email = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

type CreateEmail<P> = (params: P) => Email;

const createEmails = (
  { smtpUrl, from }: { smtpUrl: string; from: string },
  emails: {
    [K in keyof AuthEmailSenders]: CreateEmail<
      Parameters<AuthEmailSenders[K]>[0]
    >;
  },
): AuthEmailSenders => {
  const transporter = nodemailer.createTransport(smtpUrl);

  return {
    sendVerificationCode: async (params) => {
      await transporter.sendMail({
        from,
        ...emails.sendVerificationCode(params),
      });
    },
    sendPasswordResetLink: async ({ email, verificationLink }) => {
      await transporter.sendMail({
        from,
        ...emails.sendPasswordResetLink({ email, verificationLink }),
      });
    },
  };
};

const sendVerificationCodeEmail = (
  code: string,
) => `You have signed up with this email.

            Here is the code to validate your email : ${code}.
            
            The code will expire in 2 hours.`;

const sendPasswordResetLinkEmail = (
  verificationLink: string,
) => `You have requested a password reset.

            Here is the link to reset your password : ${verificationLink}.
            
            The link will expire in 2 hours.`;

const env = {
  SMTP_URL: process.env.SMTP_URL!,
  SMTP_FROM: process.env.SMTP_FROM!,
  NODE_ENV: process.env.NODE_ENV!,
};

export const authUseCases = createAuthUseCases({
  cookieAccessor: {
    set: (cookie) =>
      cookies().set(cookie.name, cookie.value, cookie.attributes),
    get: (name) => cookies().get(name) as Cookie,
  },
  resetPasswordBaseUrl: "http://localhost:3000/reset-password",
  ...createLuciaAndAuthRepository({
    kind: "kysely",
    kyselyDb: db,
    secure: false,
  }),
  emails: createEmails(
    { smtpUrl: env.SMTP_URL, from: env.SMTP_FROM },
    {
      sendVerificationCode: ({ code, email }) => ({
        to: email,
        subject: "Verify your email address",
        text: sendVerificationCodeEmail(code),
        html: sendVerificationCodeEmail(code),
      }),
      sendPasswordResetLink: ({ email, verificationLink }) => ({
        to: email,
        subject: "Reset your password",
        text: sendPasswordResetLinkEmail(verificationLink),
        html: sendPasswordResetLinkEmail(verificationLink),
      }),
    },
  ),
});
