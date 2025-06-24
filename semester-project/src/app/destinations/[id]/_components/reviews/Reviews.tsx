import { getReviewsByResortId } from "@/api/rewiew";
import { ResortInfo } from "@/app/destinations/types/resort";
import { Review as ReviewType } from "@/types/review";
import { FC } from "react";
import Review from "./Review";

interface ReviewsProps {
    destination: ResortInfo;
}

const Reviews: FC<ReviewsProps> = async ({ destination }) => {
    const reviews: ReviewType[] | null = await getReviewsByResortId(
        destination.id
    );

    if (!reviews) {
        return <div>There was an issue with fetching the reviews.</div>;
    }

    return (
        <div className="reviews">
            <h2>Reviews</h2>
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
