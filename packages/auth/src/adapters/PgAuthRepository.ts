import type { KyselyDb } from "@acme/db";

import type { AuthRepository } from "../ports/AuthDependencies";

export const createPgAuthRepository = (db: KyselyDb): AuthRepository => ({
  emailVerificationCode: {
    deleteAllForUser: async (userId) => {
      await db
        .deleteFrom("email_verification_codes")
        .where("userId", "=", userId)
        .executeTakeFirst();
    },
    insert: async (params) => {
      await db.insertInto("email_verification_codes").values(params).execute();
    },
    getByUserId: async (userId) =>
      db
        .selectFrom("email_verification_codes")
        .selectAll()
        .where("userId", "=", userId)
        .executeTakeFirst(),
  },
  user: {
    insert: async (params) => {
      await db.insertInto("users").values(params).execute();
    },
    findByEmail: async (email) =>
      db
        .selectFrom("users")
        .selectAll()
        .where("email", "=", email)
        .executeTakeFirst(),
    markEmailVerified: async (params) => {
      await db
        .updateTable("users")
        .set({ emailVerifiedAt: params.verifiedAt })
        .where("id", "=", params.userId)
        .executeTakeFirst();
    },
    updatePasswordHash: async ({ userId, passwordHash }) => {
      await db
        .updateTable("users")
        .set({ passwordHash })
        .where("id", "=", userId)
        .executeTakeFirst();
    },
  },
  resetPasswordToken: {
    insert: async (params) => {
      await db.insertInto("reset_password_tokens").values(params).execute();
    },
    deleteAllForUser: async (userId) => {
      await db
        .deleteFrom("reset_password_tokens")
        .where("userId", "=", userId)
        .executeTakeFirst();
    },
    deleteAllByTokenHash: async (tokenHash) => {
      await db
        .deleteFrom("reset_password_tokens")
        .where("tokenHash", "=", tokenHash)
        .executeTakeFirst();
    },
    getByTokenHash: async (tokenHash) =>
      db
        .selectFrom("reset_password_tokens")
        .selectAll()
        .where("tokenHash", "=", tokenHash)
        .executeTakeFirst(),
  },
});
