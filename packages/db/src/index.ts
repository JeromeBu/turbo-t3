import { Pool } from "pg";
import type { Database } from "./kysely.database";
import { Kysely, PostgresDialect } from "kysely";

export const pool = new Pool({connectionString: process.env.POSTGRES_URL});

export const dialect = new PostgresDialect({
	pool
})

export const db = new Kysely<Database>({
	dialect
});

export type KyselyDb = Kysely<Database>;

export type TableName = keyof Database;


