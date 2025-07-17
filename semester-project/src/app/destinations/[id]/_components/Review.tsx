"use client";

import { ReviewInfo } from "@/types/review";
import { FC, useState } from "react";
import { IoIosStar } from "react-icons/io";
import ReviewComments from "./ReviewComments";
import { Reaction } from "@/types/reaction";

interface ReviewProps {
    review: ReviewInfo;
}

const Review: FC<ReviewProps> = ({ review }) => {
    const snippet: string = review.text ? review.text.slice(0, 50) + "..." : "";
    const [isExpanded, setIsExpanded] = useState(false);
    const { likes, dislikes } = (review.reactions ?? []).reduce(
        (acc, r) => {
            if (r.reaction === Reaction.Like) acc.likes++;
            else if (r.reaction === Reaction.Dislike) acc.dislikes++;
            return acc;
        },
        { likes: 0, dislikes: 0 }
    );

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
            <div className="reactions">
                <span className="like">{likes} 👍</span>
                <span className="dislike">👎 {dislikes}</span>
            </div>
            {isExpanded && <ReviewComments reviewId={review.id} />}
            <button onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Show less" : "Show more"}
            </button>
        </div>
    );
};

export default Review;
