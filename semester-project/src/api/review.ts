"use server";
import { db } from "@/db/drizzle";
import { reviews } from "@/db/schemas/review";
import { ReviewInfo, ReviewReq } from "@/types/review";
import { eq } from "drizzle-orm";
import { getUserById } from "./user";

export async function getReviewsByResortId(
    resortId: string
): Promise<ReviewInfo[]> {
    const dbData = await db
        .select()
        .from(reviews)
        .where(eq(reviews.resort_id, resortId));

    const data: ReviewInfo[] = await Promise.all(
        dbData.map(async (review) => ({
            id: review.id,
            user: await getUserById(review.user_id),
            resortId: review.resort_id,
            rating: review.rating,
            text: review.text,
        }))
    );

    return data;
}

export async function createReview(newReview: ReviewReq): Promise<void> {
    await db.insert(reviews).values({
        id: crypto.randomUUID(),
        user_id: newReview.userId,
        resort_id: newReview.resortId,
        rating: newReview.rating,
        text: newReview.text,
    });
}
