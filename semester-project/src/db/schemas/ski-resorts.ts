import {
    jsonb,
    pgTable,
    real,
    smallint,
    text,
    uuid,
} from "drizzle-orm/pg-core";

export const resorts = pgTable("resorts", {
    id: uuid("id").primaryKey(),
    name: text("name").notNull(),
    country: text("country").notNull(),
    description: text("description"),
    elevation: text("elevation"),
    easySlopes: real("easy-slopes"),
    intermediateSlopes: real("intermediate-slopes"),
    difficultSlopes: real("difficult-slopes"),
    skiLift: smallint("ski-lift"),
    adultPrice: real("adult-price"),
    youthPrice: real("youth-price"),
    review: real("review"),
    images: jsonb("images").$type<string[] | null>().default([]).array(),
});
