import { pgTable, doublePrecision, uuid } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const coordinates = pgTable("coordinates", {
        id: uuid("id")
                .default(sql`gen_random_uuid()`)
                .primaryKey(),
        latitude: doublePrecision("latitude").notNull(),
        longitude: doublePrecision("longitude").notNull(),
});
