"use client";

import { useState } from "react";

import { Button } from "@acme/ui/button";

import { resendVerificationCode } from "~/app/auth/_server-actions/resendVerificationCode";

export const ResendVerificationLink = () => {
  const [sent, setSent] = useState(false);
  return (
    <form action={resendVerificationCode}>
      {sent ? (
        <p>Verification code sent by email !</p>
      ) : (
        <Button variant="secondary" type="submit" onClick={() => setSent(true)}>
          Resend verification email
        </Button>
      )}
    </form>
  );
};
