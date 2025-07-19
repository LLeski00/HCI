"use server";
import { db } from "@/db/drizzle";
import { eq, and } from "drizzle-orm";
import { ReactionData, ReactionReq } from "@/types/reaction";
import { reviewReactions } from "@/db/schemas/review-reaction";
import { revalidatePath } from "next/cache";

export async function getReviewReactionsByReviewId(
    reviewId: string
): Promise<ReactionData[]> {
    const fetchedReactions = await db
        .select()
        .from(reviewReactions)
        .where(eq(reviewReactions.review_id, reviewId));

    const reactionData: ReactionData[] = await Promise.all(
        fetchedReactions.map(async (reaction) => ({
            reaction: reaction.reaction as ReactionData["reaction"],
            userId: reaction.user_id,
        }))
    );

    return reactionData;
}

export async function createReviewReaction(
    reaction: ReactionReq
): Promise<void> {
    const existingReaction = await db
        .select()
        .from(reviewReactions)
        .where(
            and(
                eq(reviewReactions.review_id, reaction.reviewId),
                eq(reviewReactions.user_id, reaction.userId)
            )
        );

    if (existingReaction.length > 0) {
        await db
            .update(reviewReactions)
            .set({ reaction: reaction.reaction as ReactionData["reaction"] })
            .where(
                and(
                    eq(reviewReactions.review_id, reaction.reviewId),
                    eq(reviewReactions.user_id, reaction.userId)
                )
            );
    } else {
        await db.insert(reviewReactions).values({
            id: crypto.randomUUID(),
            user_id: reaction.userId,
            review_id: reaction.reviewId,
            reaction: reaction.reaction as ReactionData["reaction"],
        });
    }
    revalidatePath("/destinations/[id]");
}

export async function deleteReviewReaction(
    reaction: ReactionReq
): Promise<void> {
    await db
        .delete(reviewReactions)
        .where(
            and(
                eq(reviewReactions.review_id, reaction.reviewId),
                eq(reviewReactions.user_id, reaction.userId)
            )
        );

    revalidatePath("/destinations/[id]");
}
