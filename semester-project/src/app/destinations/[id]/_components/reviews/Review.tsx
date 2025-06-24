import { Review as ReviewType } from "@/types/review";
import { FC } from "react";

interface ReviewProps {
    review: ReviewType;
}

const Review: FC<ReviewProps> = ({ review }) => {
    return (
        <div className="review">
            <p>Rating: {review.rating || "No rating"}</p>
            {review.text && <p>{review.text}</p>}
        </div>
    );
};

export default Review;
