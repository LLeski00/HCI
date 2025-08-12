"use client";

import { FC, useState } from "react";
import { ReviewInfo, ReviewReq } from "@/types/review";
import { createReview, getLatestReviewByUserId } from "@/api/review";
import styles from "./ReviewForm.module.css";
import { ResortInfo } from "@/types/resort";
import { useAuth } from "@/context/AuthContext";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Button } from "@/components/button/Button";
import toast from "react-hot-toast";

interface ReviewFormProps {
    resort: ResortInfo;
    reviews: ReviewInfo[];
    handleNewReview: (review: ReviewInfo) => void;
}

const ReviewForm: FC<ReviewFormProps> = ({ resort, reviews, handleNewReview }) => {
    const { user } = useAuth();
    const [rating, setRating] = useState<number>(0);
    const [showPopUp, setShowPopUp] = useState<boolean>(false);

    function isReviewed(): boolean {
        return reviews.some((review) => review.user.id === user!.id);
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!user) {
            setShowPopUp(true);
            return;
        }
        const form = event.currentTarget;
        const formData = new FormData(event.currentTarget);
        const text = formData.get("text");

        if (!rating) return toast.error("Please select your rating!");
        if (!text) return toast.error("Please fill the form!");

        const newReview: ReviewReq = {
            userId: user!.id,
            resortId: resort.id,
            rating,
            text: text ? String(text) : "",
        };

        try {
            await createReview(newReview);
            const latestReview = await getLatestReviewByUserId(newReview.userId);
            toast.success("Successfully posted review!");

            handleNewReview(latestReview!);
            form.reset();
            setRating(0);
        } catch (error) {
            toast.error("Failed to post review.");
        }
    }

    return (
        <>
            <>
                {/*!isReviewed() && (*/}
                <form
                    className={styles.reviewForm}
                    onSubmit={handleSubmit}
                >
                    <h2>Leave a Review</h2>


                    <label className={styles.ratingLabel}> Add your rating:
                        <div className={styles.ratingContent}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    onClick={() => setRating(star)}
                                    className={styles.star}
                                >
                                    {star <= rating ? <FaStar /> : <FaRegStar />}
                                </span>
                            ))}
                        </div>
                    </label>

                    <label className={styles.textLabel}>
                        Write your review:
                        <textarea name="text" />
                    </label>
                    <Button text="Sumbit review" type="submit" />
                </form>
                {/*)}*/}
            </>
        </>
    );
};

export default ReviewForm;
