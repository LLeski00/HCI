import { pgTable, uuid, pgEnum } from "drizzle-orm/pg-core";

export const reaction = pgEnum("reaction", ["like", "dislike"]);

export const reviewReactions = pgTable("review-reactions", {
    id: uuid("id").primaryKey(),
    user_id: uuid("user_id").notNull(),
    review_id: uuid("review_id").notNull(),
    reaction: reaction("reaction").notNull(),
});
