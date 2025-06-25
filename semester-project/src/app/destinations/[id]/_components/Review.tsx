import { Review as ReviewType } from "@/types/review";
import { FC } from "react";
import { IoIosStar } from "react-icons/io";

interface ReviewProps {
    review: ReviewType;
}

const Review: FC<ReviewProps> = ({ review }) => {
    return (
        <div className="review">
            <div className="rating">
                <IoIosStar className="filled-star" />
                <p>Rating: {review.rating || "No rating"}</p>
            </div>
            {review.text && <p>{review.text}</p>}
        </div>
    );
};

export default Review;
