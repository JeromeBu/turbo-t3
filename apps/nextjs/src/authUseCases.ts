import type { Cookie } from "easy-lucia";
import { createAuthUseCases, createLuciaAndAuthRepository } from "easy-lucia";
import type { AuthEmailSenders } from "easy-lucia/types";
import { cookies } from "next/headers";
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
    [K in keyof AuthEmailSenders]: CreateEmail<Parameters<AuthEmailSenders[K]>[0]>;
  },
): AuthEmailSenders => {
  const transporter = nodemailer.createTransport(smtpUrl);

  return {
    sendSignedUpSuccessfully: async (params) => {
      await transporter.sendMail({
        from,
        ...emails.sendSignedUpSuccessfully(params),
      });
    },
    sendVerificationCodeAgain: async (params) => {
      await transporter.sendMail({
        from,
        ...emails.sendVerificationCodeAgain(params),
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

const makeSignUpSuccessfullyEmailBody = (code: string) => `You have signed up with this email.

            Here is the code to validate your email : ${code}.
            
            The code will expire in 2 hours.`;

const makeEmailVerificationCodeAgainEmailBody = (
  code: string,
) => `Here is the code to validate your email : ${code}.
 The code will expire in 2 hours.`;

const makePasswordResetLinkEmailBody = (verificationLink: string) => `You have requested a password reset.

            Here is the link to reset your password : ${verificationLink}.
            
            The link will expire in 2 hours.`;

const env = {
  // biome-ignore lint/style/noNonNullAssertion:
  SMTP_URL: process.env.SMTP_URL!,
  // biome-ignore lint/style/noNonNullAssertion:
  SMTP_FROM: process.env.SMTP_FROM!,
  // biome-ignore lint/style/noNonNullAssertion:
  NODE_ENV: process.env.NODE_ENV!,
};

export const authUseCases = createAuthUseCases({
  cookieAccessor: {
    set: (cookie) => cookies().set(cookie.name, cookie.value, cookie.attributes),
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
      sendSignedUpSuccessfully: ({ code, email }) => ({
        to: email,
        subject: "Thank you for signing up",
        text: makeSignUpSuccessfullyEmailBody(code),
        html: makeSignUpSuccessfullyEmailBody(code),
      }),
      sendVerificationCodeAgain: ({ code, email }) => ({
        to: email,
        subject: "Verify your email address",
        text: makeEmailVerificationCodeAgainEmailBody(code),
        html: makeEmailVerificationCodeAgainEmailBody(code),
      }),
      sendPasswordResetLink: ({ email, verificationLink }) => ({
        to: email,
        subject: "Reset your password",
        text: makePasswordResetLinkEmailBody(verificationLink),
        html: makePasswordResetLinkEmailBody(verificationLink),
      }),
    },
  ),
});
