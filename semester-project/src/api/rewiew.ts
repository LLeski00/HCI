"use server";
import { db } from "@/db/drizzle";
import { reviews } from "@/db/schemas/review";
import { Review } from "@/types/review";
import { eq } from "drizzle-orm";

export async function getReviewsByResortId(
    resortId: string
): Promise<Review[] | null> {
    const data: Review[] = await db
        .select()
        .from(reviews)
        .where(eq(reviews.resort_id, resortId));

    return data;
}
