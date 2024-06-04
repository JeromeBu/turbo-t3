import type { TRPCRouterRecord } from "@trpc/server";
import { z } from "zod";

import { createPostSchema } from "@acme/validators";

import { protectedProcedure, publicProcedure } from "../trpc";


export const postRouter = {
  all: publicProcedure.query(({ ctx }) =>
    ctx.db
      .selectFrom("posts")
      .selectAll()
      .orderBy("id", "desc")
      .limit(10)
      .execute(),
  ),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) =>
      ctx.db
        .selectFrom("posts")
        .selectAll()
        .where("id", "=", input.id)
        .executeTakeFirst(),
    ),

  create: protectedProcedure
    .input(createPostSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .insertInto("posts")
        .values(input)
        .executeTakeFirst();
    }),

  delete: protectedProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
    await ctx.db
      .deleteFrom("posts")
      .where("id", "=", input)
      .executeTakeFirst();
  }),
} satisfies TRPCRouterRecord;
