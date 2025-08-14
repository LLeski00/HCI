'use server';
import { db } from '@/db/drizzle';
import { reviews } from '@/db/schemas/review';
import { ReviewInfo, ReviewReq } from '@/types/review';
import { eq, desc } from 'drizzle-orm';
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
      .where(eq(reviews.resort_id, resortId))
      .orderBy(desc(reviews.created_at));

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

export async function createReview(newReview: ReviewReq): Promise<string> {
  try {
    const id = crypto.randomUUID();

    await db.insert(reviews).values({
      id,
      user_id: newReview.userId,
      resort_id: newReview.resortId,
      rating: newReview.rating,
      text: newReview.text,
    });

    revalidatePath('/resorts/[id]');
    return id;
  } catch (error) {
    throw new Error('There was an error creating the review: ' + error);
  }
}

export async function getLatestReviewByUserId(
  userId: string
): Promise<ReviewInfo | null> {
  try {
    const fetchedReviews = await db
      .select()
      .from(reviews)
      .where(eq(reviews.user_id, userId))
      .orderBy(desc(reviews.created_at))
      .limit(1);

    if (fetchedReviews.length === 0) return null;

    const review = fetchedReviews[0];

    const reviewData: ReviewInfo = {
      id: review.id,
      user: (await getUserById(review.user_id)) ?? ({} as User),
      resortId: review.resort_id,
      rating: review.rating,
      text: review.text,
      reactions: await getReviewReactionsByReviewId(review.id),
      createdAt: review.created_at,
    };

    return reviewData;
  } catch (error) {
    throw new Error('There was an error fetching the latest review: ' + error);
  }
}
