import { getReviewsByResortId } from "@/api/review";
import { ReviewInfo } from "@/types/review";
import { FC } from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import { Resort } from "@/types/resort";

interface ReviewsProps {
    resort: Resort;
}

const Reviews: FC<ReviewsProps> = async ({ resort }) => {
    const reviews: ReviewInfo[] = await getReviewsByResortId(resort.id);

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
