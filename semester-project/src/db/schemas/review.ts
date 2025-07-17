import { integer, pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";

export const reviews = pgTable("reviews", {
    id: uuid("id").primaryKey(),
    user_id: uuid("user_id").notNull(),
    resort_id: uuid("resort_id").notNull(),
    rating: integer("rating").notNull(),
    text: text("text"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});
