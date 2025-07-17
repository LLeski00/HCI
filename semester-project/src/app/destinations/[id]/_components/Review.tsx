"use client";

import { ReviewInfo } from "@/types/review";
import { FC, useState } from "react";
import { IoIosStar } from "react-icons/io";
import ReviewComments from "./ReviewComments";

interface ReviewProps {
    review: ReviewInfo;
}

const Review: FC<ReviewProps> = ({ review }) => {
    const snippet: string = review.text ? review.text.slice(0, 50) + "..." : "";
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="review">
            <div className="author">
                <p>{review.user.name}</p>
            </div>
            <p>{review.createdAt.toLocaleDateString()}</p>
            <div className="rating">
                <IoIosStar className="filled-star" />
                <p>Rating: {review.rating || "No rating"}</p>
            </div>
            {review.text && <p>{isExpanded ? review.text : snippet}</p>}
            {isExpanded && <ReviewComments reviewId={review.id} />}
            <button onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Show less" : "Show more"}
            </button>
        </div>
    );
};

export default Review;
