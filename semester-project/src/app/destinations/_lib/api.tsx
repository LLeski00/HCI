"use server"
import { db } from "@/db/drizzle";
import { resorts } from "@/db/schemas/ski-resorts";
import { asc, eq } from "drizzle-orm";
import { ResortInfo } from "../types/resort";

type PagingInfo = {
    _start?: number;
    _limit?: number;
};

const PAGE_SIZE = Number(process.env.PAGE_SIZE);

async function getAllResorts() {
    const data = await db
        .select()    
        .from(resorts)
        .orderBy(asc(resorts.images));

    return data;
}

async function getResorts({
    _start = 0,
    _limit = PAGE_SIZE,
}: PagingInfo): Promise<ResortInfo[]> {
    const data = await db
        .select()
        .from(resorts)
        .orderBy(asc(resorts.images))
        .limit(_limit) 
        .offset(_start); 
    return data;
}

async function getResortById(id: string): Promise<ResortInfo | null> {
    const data = await db
        .select()
        .from(resorts)
        .where(eq(resorts.id, id))
        .limit(1);
    return data ? data[0] : null;
}	
async function getResortsByCountry(country: string): Promise<ResortInfo[] | null> {
    const data = await db
        .select()
        .from(resorts)
        .where(eq(resorts.country, country));
    return data.length > 0 ? data : null;
}

export { getAllResorts, getResorts, getResortById, getResortsByCountry };