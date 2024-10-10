import type { Kysely } from "kysely";
import { sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("posts")
    .addColumn("id", "text", (c) => c.primaryKey())
    .addColumn("title", "text", (c) => c.notNull())
    .addColumn("content", "text", (c) => c.notNull())
    .addColumn("created_at", "timestamptz", (c) => c.notNull().defaultTo(sql`now()`))
    .addColumn("updatedAt", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("posts").execute();
}
