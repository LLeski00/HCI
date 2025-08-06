"use client";

import { getReviewsByResortId } from "@/api/review";
import { ReviewInfo } from "@/types/review";
import { FC, useEffect, useState } from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import { Resort } from "@/types/resort";
import Loading from "@/components/loading/Loading";

interface ReviewsProps {
    resort: Resort;
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
        <div className="reviews">
            <h2>Reviews</h2>
            {<ReviewForm resort={resort} reviews={reviews} />}
            <div className="review-list">
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <Review key={review.id} review={review} />
                    ))
                ) : (
                    <p>There are currently no reviews for this resort.</p>
                )}
            </div>
        </div>
    );
};

export default Reviews;
