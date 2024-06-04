import type { Generated } from "kysely";
import type { AuthDb } from "easy-lucia/kysely-adapters/index";

export interface Database extends AuthDb {
	posts: PostsTable;
}

interface PostsTable {
	id: string;
	title: string;
	content: string;
	created_at: Generated<Date>;
	updatedAt: Date | null;
}