import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const reviews = pgTable("reviews", {
    id: uuid("id").primaryKey(),
    user_id: uuid("user_id").notNull(),
    resort_id: uuid("resort_id").notNull(),
    rating: integer("rating"),
    text: text("text"),
});
