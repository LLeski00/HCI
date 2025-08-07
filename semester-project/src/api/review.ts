'use server';
import { db } from '@/db/drizzle';
import { reviews } from '@/db/schemas/review';
import { ReviewInfo, ReviewReq } from '@/types/review';
import { eq } from 'drizzle-orm';
import { getUserById } from './user';
import { getReviewReactionsByReviewId } from '../app/api/review-reaction';
import { revalidatePath } from 'next/cache';
import { User } from '@/types/user';

export async function getReviewsByResortId(
  resortId: string
): Promise<ReviewInfo[]> {
  try {
    const fetchedReviews = await db
      .select()
      .from(reviews)
      .where(eq(reviews.resort_id, resortId));

    const reviewData: ReviewInfo[] = await Promise.all(
      fetchedReviews.map(async (review) => ({
        id: review.id,
        user: (await getUserById(review.user_id)) ?? ({} as User),
        resortId: review.resort_id,
        rating: review.rating,
        text: review.text,
        reactions: await getReviewReactionsByReviewId(review.id),
        createdAt: review.created_at,
      }))
    );

    return reviewData;
  } catch (error) {
    throw new Error('There was an error fetching the reviews: ' + error);
  }
}

export async function createReview(newReview: ReviewReq): Promise<void> {
  try {
    await db.insert(reviews).values({
      id: crypto.randomUUID(),
      user_id: newReview.userId,
      resort_id: newReview.resortId,
      rating: newReview.rating,
      text: newReview.text,
    });

    revalidatePath('/resorts/[id]');
  } catch (error) {
    throw new Error('There was an error creating the review: ' + error);
  }
}
