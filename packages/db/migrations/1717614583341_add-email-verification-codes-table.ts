import type { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable("users")
    .addColumn("emailVerifiedAt", "timestamptz")
    .execute();

  await db.schema
    .createTable("email_verification_codes")
    .addColumn("id", "serial", (c) => c.primaryKey())
    .addColumn("code", "text", (c) => c.notNull())
    .addColumn("user_id", "text", (c) => c.unique().references("users.id"))
    .addColumn("email", "text", (c) => c.notNull())
    .addColumn("expiresAt", "timestamptz", (c) => c.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("email_verification_codes").execute();
  await db.schema
    .alterTable("users")
    .dropColumn("emailVerifiedAt")
    .execute();
}
