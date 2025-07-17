"use server";
import { db } from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { ReactionData } from "@/types/reaction";
import { reviewReactions } from "@/db/schemas/review-reaction";

export async function getReviewReactionsByReviewId(
    reviewId: string
): Promise<ReactionData[]> {
    const fetchedReactions = await db
        .select()
        .from(reviewReactions)
        .where(eq(reviewReactions.review_id, reviewId));

    const reactionData: ReactionData[] = await Promise.all(
        fetchedReactions.map(async (review) => ({
            reaction: review.reaction as ReactionData["reaction"],
            userId: review.user_id,
        }))
    );

    return reactionData;
}
