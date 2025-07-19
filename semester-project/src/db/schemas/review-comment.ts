import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const reviewComments = pgTable("review-comments", {
    id: uuid("id").primaryKey(),
    user_id: uuid("user_id").notNull(),
    review_id: uuid("review_id").notNull(),
    text: text("text").notNull(),
    created_at: timestamp("created_at").notNull().defaultNow(),
});
