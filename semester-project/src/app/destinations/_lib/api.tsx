import { db } from "@/db/drizzle";
import { resorts } from "@/db/schemas/ski-resorts";

type PagingInfo = {
    _start?: number;
    _limit?: number;
};

export type ResortInfo = {
    id:string,
    name:string,
    country:string,
    description:string | null,
    elevation:string | null,
    easySlopes:string | null,
    intermediateSlopes:string | null,
    difficultSlopes:string | null,
    adultPrice:string | null,
    youthPrice:string | null,
    review:string | null,
 
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
}: PagingInfo): Promise<ResortInfo[]> {
    const data = await db
        .select()
        .from(resorts)
        .limit(_limit) 
        .offset(_start)    
        .orderBy(resorts.name); 
    return data;
}

export { getAllResorts, getResorts };