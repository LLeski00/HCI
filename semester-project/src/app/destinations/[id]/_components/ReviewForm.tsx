"use client";

import { FC } from "react";
import { ReviewInfo, ReviewReq } from "@/types/review";
import { createReview } from "@/api/review";
import styles from "./ReviewForm.module.css";
import { ResortInfo } from "@/types/resort";
import { useAuth } from "@/context/AuthContext";

interface ReviewFormProps {
    resort: ResortInfo;
    reviews: ReviewInfo[];
}

const ReviewForm: FC<ReviewFormProps> = ({ resort, reviews }) => {
    const { user } = useAuth();

    function isReviewed(): boolean {
        return reviews.some((review) => review.user.id === user!.id);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const rating = formData.get("rating");
        const text = formData.get("text");
        const newReview: ReviewReq = {
            userId: user!.id,
            resortId: resort.id,
            rating: Number(rating),
            text: text ? String(text) : "",
        };
        createReview(newReview);
    }

    return (
        <>
            {user ? (
                <>
                    {!isReviewed() && (
                        <form
                            className={styles.reviewForm}
                            onSubmit={handleSubmit}
                        >
                            <h2>Leave a Review</h2>
                            <label className={styles.ratingLabel}>
                                Rating (1-10):
                                <input
                                    type="number"
                                    name="rating"
                                    min="1"
                                    max="10"
                                    required
                                />
                            </label>
                            <label className={styles.textLabel}>
                                Review:
                                <textarea name="text" />
                            </label>
                            <button type="submit">Submit Review</button>
                        </form>
                    )}
                </>
            ) : (
                <p>Please log in to leave a review.</p>
            )}
        </>
    );
};

export default ReviewForm;
