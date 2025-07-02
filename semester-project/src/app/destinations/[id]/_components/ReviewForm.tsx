"use client";

import { FC } from "react";
import { ResortInfo } from "../../types/resort";
import { ReviewReq } from "@/types/review";
import { createReview } from "@/api/review";
import styles from "./ReviewForm.module.css";

interface ReviewFormProps {
    resort: ResortInfo;
}

const ReviewForm: FC<ReviewFormProps> = ({ resort }) => {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const rating = formData.get("rating");
        const text = formData.get("text");
        const newReview: ReviewReq = {
            userId: "currentUserId", // TODO: Replace with actual user ID after implementing user authentication
            resortId: resort.id,
            rating: Number(rating),
            text: text ? String(text) : "",
        };
        createReview(newReview);
    }

    return (
        <form className={styles.reviewForm} onSubmit={handleSubmit}>
            <h2>Leave a Review</h2>
            <label className={styles.ratingLabel}>
                Rating (1-10):
                <input type="number" name="rating" min="1" max="10" required />
            </label>
            <label className={styles.textLabel}>
                Review:
                <textarea name="text" />
            </label>
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
