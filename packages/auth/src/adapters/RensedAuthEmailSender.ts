import {AuthEmailSenders} from "../ports/AuthDependencies";

  /* eslint-disable @typescript-eslint/require-await */

export const createRensedAuthEmailSender = () : AuthEmailSenders=> ({
  sendPasswordResetLink: async (params) => {
    console.log(">>> sendPasswordResetLink with params : ", params);
  },
  sendVerificationCode: async (params) => {
    console.log(">>> sendVerificationCode with params : ", params);
  },
})