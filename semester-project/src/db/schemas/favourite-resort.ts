import { pgTable, uuid } from "drizzle-orm/pg-core";
import { resorts } from "./ski-resorts";
import { users } from "./user";

export const favouriteResorts = pgTable("favourite-resorts", {
    id: uuid("id").primaryKey(),
    user_id: uuid("user_id")
        .notNull()
        .references(() => users.id),
    resort_id: uuid("resort_id")
        .notNull()
        .references(() => resorts.id),
});
