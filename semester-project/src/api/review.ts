"use server";
import { db } from "@/db/drizzle";
import { reviews } from "@/db/schemas/review";
import { ReviewInfo, ReviewReq } from "@/types/review";
import { eq } from "drizzle-orm";
import { getUserById } from "./user";
import { getReviewReactionsByReviewId } from "../app/api/review-reaction";
import { revalidatePath } from "next/cache";

export async function getReviewsByResortId(
    resortId: string
): Promise<ReviewInfo[]> {
    const fetchedReviews = await db
        .select()
        .from(reviews)
        .where(eq(reviews.resort_id, resortId));

    const reviewData: ReviewInfo[] = await Promise.all(
        fetchedReviews.map(async (review) => {
            const user = await getUserById(review.user_id);
            if (!user) {
                throw new Error(`User with id ${review.user_id} not found`);
            }
            return {
                id: review.id,
                user: user,
                resortId: review.resort_id,
                rating: review.rating,
                text: review.text,
                reactions: await getReviewReactionsByReviewId(review.id),
                createdAt: review.created_at,
            };
        })
    );

    return reviewData;
}

export async function createReview(newReview: ReviewReq): Promise<void> {
    await db.insert(reviews).values({
        id: crypto.randomUUID(),
        user_id: newReview.userId,
        resort_id: newReview.resortId,
        rating: newReview.rating,
        text: newReview.text,
    });

    revalidatePath("/destinations/[id]");
}
