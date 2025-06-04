import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
        id: uuid("id").primaryKey(),
        email: text("email").notNull(),
        name: text("name").notNull(),
        profile_image: text("profile_image"),
        createdAt: timestamp("created_at").defaultNow(),
});
