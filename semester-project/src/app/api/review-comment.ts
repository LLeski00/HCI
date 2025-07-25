"use server";
import { db } from "@/db/drizzle";
import { eq, desc } from "drizzle-orm";
import { reviewComments } from "@/db/schemas/review-comment";
import { Comment, CommentReq } from "@/types/comment";
import { getUserById } from "./user";
import { revalidatePath } from "next/cache";

export async function getReviewCommentsByReviewId(
    reviewId: string
): Promise<Comment[]> {
    try {
        const fetchedComments = await db
            .select()
            .from(reviewComments)
            .where(eq(reviewComments.review_id, reviewId))
            .orderBy(desc(reviewComments.created_at));

        const commentData: Comment[] = await Promise.all(
            fetchedComments.map(async (comment) => ({
                id: comment.id,
                user: await getUserById(comment.user_id),
                text: comment.text,
                createdAt: comment.created_at,
            }))
        );

        return commentData;
    } catch (error) {
        throw new Error(
            "There was an error fetching the review comments: " + error
        );
    }
}

export async function createComment(comment: CommentReq): Promise<void> {
    try {
        await db.insert(reviewComments).values({
            id: crypto.randomUUID(),
            user_id: comment.userId,
            review_id: comment.reviewId,
            text: comment.text,
        });

        revalidatePath("/destinations/[id]");
    } catch (error) {
        throw new Error("There was an error creating the comment: " + error);
    }
}
