"use server";
import { db } from "@/db/drizzle";
import { coordinates } from "@/db/schemas/coordinates";
import { resorts } from "@/db/schemas/ski-resorts";
import { PlannerFormData } from "@/types/planner";
import { ResortInfo } from "@/types/resort";
import { calculateTotalCost } from "@/utils";
import { asc, eq } from "drizzle-orm";

type PagingInfo = {
    _start?: number;
    _limit?: number;
};

const PAGE_SIZE = Number(process.env.PAGE_SIZE);
const RESORT_SELECT = {
    id: resorts.id,
    name: resorts.name,
    country: resorts.country,
    description: resorts.description,
    elevation: resorts.elevation,
    easySlopes: resorts.easySlopes,
    intermediateSlopes: resorts.intermediateSlopes,
    difficultSlopes: resorts.difficultSlopes,
    skiLift: resorts.skiLift,
    adultPrice: resorts.adultPrice,
    youthPrice: resorts.youthPrice,
    review: resorts.review,
    images: resorts.images,
    coordinates: {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
    },
};

async function getAllResorts() {
    const data = await db
        .select(RESORT_SELECT)
        .from(resorts)
        .leftJoin(coordinates, eq(resorts.coordinatesId, coordinates.id))
        .orderBy(asc(resorts.images));

    return data as ResortInfo[];
}

async function getResorts({
    _start = 0,
    _limit = PAGE_SIZE,
}: PagingInfo): Promise<ResortInfo[]> {
    const data = await db
        .select(RESORT_SELECT)
        .from(resorts)
        .leftJoin(coordinates, eq(resorts.coordinatesId, coordinates.id))
        .orderBy(asc(resorts.images))
        .limit(_limit)
        .offset(_start);
    return data as ResortInfo[];
}

async function getResortById(id: string): Promise<ResortInfo | null> {
    const data = await db
        .select(RESORT_SELECT)
        .from(resorts)
        .leftJoin(coordinates, eq(resorts.coordinatesId, coordinates.id))
        .where(eq(resorts.id, id))
        .limit(1);
    return data ? (data[0] as ResortInfo) : null;
}

async function getResortsByCountry(
    country: string
): Promise<ResortInfo[] | null> {
    const data = await db
        .select(RESORT_SELECT)
        .from(resorts)
        .leftJoin(coordinates, eq(resorts.coordinatesId, coordinates.id))
        .where(eq(resorts.country, country));
    return data.length > 0 ? (data as ResortInfo[]) : null;
}

async function getResortsInsideBudget(
    formData: PlannerFormData
): Promise<ResortInfo[]> {
    const data = await db
        .select(RESORT_SELECT)
        .from(resorts)
        .leftJoin(coordinates, eq(resorts.coordinatesId, coordinates.id));

    return data.filter((resort) => {
        if (!resort.coordinates || !resort.adultPrice) return false;

        const totalCost = calculateTotalCost(
            resort.coordinates,
            resort.adultPrice,
            formData
        );

        return totalCost <= formData.budget;
    }) as ResortInfo[];
}

export {
    getAllResorts,
    getResorts,
    getResortById,
    getResortsByCountry,
    getResortsInsideBudget,
};
