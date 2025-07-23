"use server";
import { db } from "@/db/drizzle";
import { validate as isUUID } from "uuid";
import { resorts } from "@/db/schemas/ski-resorts";
import { Resort } from "@/types/resort";
import { asc, eq } from "drizzle-orm";

type PagingInfo = {
    _start?: number;
    _limit?: number;
};

const PAGE_SIZE = Number(process.env.PAGE_SIZE);

async function getAllResorts() {
    const data = await db.select().from(resorts).orderBy(asc(resorts.images));

    return data as Resort[];
}

async function getResorts({
    _start = 0,
    _limit = PAGE_SIZE,
}: PagingInfo): Promise<Resort[]> {
    const data = await db
        .select()
        .from(resorts)
        .orderBy(asc(resorts.images))
        .limit(_limit)
        .offset(_start);
    return data as Resort[];
}

async function getResortById(id: string): Promise<Resort | null> {
    if (!isUUID(id)) {
        return null;
    }

    const data = await db
        .select()
        .from(resorts)
        .where(eq(resorts.id, id))
        .limit(1);
    return data ? (data[0] as Resort) : null;
}

async function getResortsByCountry(country: string): Promise<Resort[] | null> {
    const data = await db
        .select()
        .from(resorts)
        .where(eq(resorts.country, country));
    return data.length > 0 ? (data as Resort[]) : null;
}

export { getAllResorts, getResorts, getResortById, getResortsByCountry };
