import { db } from "@/db/drizzle";
import { resorts } from "@/db/schemas/ski-resorts";

type PagingInfo = {
    _start?: number;
    _limit?: number;
};

const PAGE_SIZE = Number(process.env.PAGE_SIZE);

async function getAllResorts() {
    const data = await db
        .select()    
        .from(resorts)
        .orderBy(resorts.name);

    return data;
}

async function getResorts({
    _start = 0,
    _limit = PAGE_SIZE,
}: PagingInfo): Promise<any[]> {
    const data = await db
        .select()
        .from(resorts)
        .limit(_limit) 
        .offset(_start)    
        .orderBy(resorts.name); 
    return data;
}

export { getAllResorts, getResorts };