"use server";
import { db } from "@/db/drizzle";
import { reviews } from "@/db/schemas/review";
import { Review, ReviewReq } from "@/types/review";
import { eq } from "drizzle-orm";

export async function getReviewsByResortId(
    resortId: string
): Promise<Review[]> {
    const dbData = await db
        .select()
        .from(reviews)
        .where(eq(reviews.resort_id, resortId));

    const data: Review[] = dbData.map((review) => ({
        id: review.id,
        userId: review.user_id,
        resortId: review.resort_id,
        rating: review.rating,
        text: review.text,
    }));

    return data;
}

/*export async function createReview(newReview: ReviewReq): Promise<void> {
    await db.insert(reviews).values({
        id: crypto.randomUUID(),
        user_id: newReview.userId,
        resort_id: newReview.resortId,
        rating: newReview.rating,
        text: newReview.text,
    });
}*/
