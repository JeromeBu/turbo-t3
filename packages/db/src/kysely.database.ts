import type { AuthDb } from "easy-lucia/kysely-adapters/index";
import type { Generated } from "kysely";

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
