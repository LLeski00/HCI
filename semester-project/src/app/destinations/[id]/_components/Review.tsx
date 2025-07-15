import { ReviewInfo } from "@/types/review";
import { FC } from "react";
import { IoIosStar } from "react-icons/io";

interface ReviewProps {
    review: ReviewInfo;
}

const Review: FC<ReviewProps> = ({ review }) => {
    return (
        <div className="review">
            <div className="author">
                <p>{review.user.name}</p>
            </div>
            <div className="rating">
                <IoIosStar className="filled-star" />
                <p>Rating: {review.rating || "No rating"}</p>
            </div>
            {review.text && <p>{review.text}</p>}
        </div>
    );
};

export default Review;
