import { integer, varchar, pgTable } from "drizzle-orm/pg-core";

export const ratings = pgTable("ratings", {
    id: integer("id").primaryKey(),
    user_id: integer("user_id").notNull(),
    resort_id: integer("resort_id").notNull(),
    score: integer("score"),
    text: varchar("text"),
});
