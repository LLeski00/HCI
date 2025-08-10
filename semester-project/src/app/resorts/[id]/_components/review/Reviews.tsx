"use client";

import { getReviewsByResortId } from "@/api/review";
import { ReviewInfo } from "@/types/review";
import { FC, useEffect, useState } from "react";
import Review from "./Review";
import ReviewForm from "./review-form/ReviewForm";
import { ResortInfo } from "@/types/resort";
import Loading from "@/components/loading/Loading";
import styles from './review.module.css';

interface ReviewsProps {
    resort: ResortInfo;
}

const Reviews: FC<ReviewsProps> = ({ resort }) => {
    const [reviews, setReviews] = useState<ReviewInfo[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const fetchedReviews = await getReviewsByResortId(resort.id);
                setReviews(fetchedReviews);
            } catch (error) {
                console.error("Failed to fetch reviews:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchReviews();
    }, [resort.id]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className={styles.reviewsSection}>

            <div className={styles.titleSection}>
                <h2>Reviews</h2>
                <p>See what other people think about the resort!</p>
            </div>

            <div className={styles.reviewForm}>
                {<ReviewForm resort={resort} reviews={reviews} />}
            </div>

            <div className={styles.reviewsContent}>
                <div className={styles.reviewsList}>
                    {reviews.length > 0 ? (
                        reviews.map((review) => (
                            <Review key={review.id} review={review} />
                        ))
                    ) : (
                        <p>There are currently no reviews for this resort.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
