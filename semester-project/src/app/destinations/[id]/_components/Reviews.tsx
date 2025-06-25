import { getReviewsByResortId } from "@/api/rewiew";
import { ResortInfo } from "@/app/destinations/types/resort";
import { Review as ReviewType } from "@/types/review";
import { FC } from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

interface ReviewsProps {
    resort: ResortInfo;
}

const Reviews: FC<ReviewsProps> = async ({ resort }) => {
    const reviews: ReviewType[] = await getReviewsByResortId(resort.id);

    function isReviewed(): boolean {
        const currentUserId = "currentUserId"; // TODO: Replace with actual user ID after implementing user authentication
        return reviews.some((review) => review.userId === currentUserId);
    }

    return (
        <div className="reviews">
            <h2>Reviews</h2>
            {!isReviewed() && <ReviewForm resort={resort} />}
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
