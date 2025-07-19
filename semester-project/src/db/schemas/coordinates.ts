import { pgTable, doublePrecision, integer, uuid } from "drizzle-orm/pg-core";
import { resorts } from "./ski-resorts";
import { sql } from "drizzle-orm";

export const coordinates = pgTable("coordinates", {
        id: uuid("id")
                .default(sql`gen_random_uuid()`)
                .primaryKey(),
        resortId: uuid("resort_id")
                .references(() => resorts.id)
                .notNull(),
        latitude: doublePrecision("latitude").notNull(),
        longitude: doublePrecision("longitude").notNull(),
});
