import { integer, varchar, pgTable } from "drizzle-orm/pg-core";

export const reviews = pgTable("reviews", {
    id: integer("id").primaryKey(),
    user_id: integer("user_id").notNull(),
    resort_id: integer("resort_id").notNull(),
    rating: integer("rating"),
    text: varchar("text"),
});
