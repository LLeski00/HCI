import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const blogs = pgTable("blogs", {
    id: uuid("id").primaryKey(),
    userId: uuid("user_id").notNull(),
    resortId: uuid("resort_id").notNull(),
    text: text("text").notNull(),
});
