import type { Generated } from "kysely";

export interface Database {
	posts: PostsTable;
	users: UsersTable;
	sessions: SessionsTable;
	email_verification_codes: EmailVerificationCodesTable;
	reset_password_tokens: ResetPasswordTokensTable;
}

interface UsersTable {
	id: string;
	email: string;
	emailVerifiedAt: Date | null;
	passwordHash: string;
}

interface SessionsTable {
	id: string;
	user_id: string;
	expires_at: Date;
}

interface EmailVerificationCodesTable {
	id: Generated<number>;
	code: string;
	userId: string;
	email: string;
	expiresAt: Date;
}

interface ResetPasswordTokensTable {
	userId: string;
	tokenHash: string;
	expiresAt: Date;
}

interface PostsTable {
	id: string;
	title: string;
	content: string;
	created_at: Generated<Date>;
	updatedAt: Date | null;
}