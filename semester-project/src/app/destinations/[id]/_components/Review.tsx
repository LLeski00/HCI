"use client";

import { ReviewInfo } from "@/types/review";
import { FC, useState } from "react";
import { IoIosStar } from "react-icons/io";
import ReviewComments from "./ReviewComments";
import { Reaction } from "@/types/reaction";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";

interface ReviewProps {
    review: ReviewInfo;
}

const Review: FC<ReviewProps> = ({ review }) => {
    const snippet: string = review.text ? review.text.slice(0, 50) + "..." : "";
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [userReaction, setUserReaction] = useState<Reaction | null>(null);
    const { likes, dislikes } = (review.reactions ?? []).reduce(
        (acc, r) => {
            if (r.reaction === Reaction.Like) acc.likes++;
            else if (r.reaction === Reaction.Dislike) acc.dislikes++;

            if (r.userId === "currentUserId") {
                // TODO: Replace with actual user ID after implementing user authentication
                setUserReaction(r.reaction);
            }

            return acc;
        },
        { likes: 0, dislikes: 0 }
    );

    function handleReaction(reaction: Reaction) {
        if (userReaction === reaction) setUserReaction(null);
        else setUserReaction(reaction);
    }

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
                <p>{userReaction === Reaction.Like ? likes + 1 : likes}</p>
                {userReaction === Reaction.Like ? (
                    <BiSolidLike
                        onClick={() => handleReaction(Reaction.Like)}
                    />
                ) : (
                    <BiLike onClick={() => handleReaction(Reaction.Like)} />
                )}
                {userReaction === Reaction.Dislike ? (
                    <BiSolidDislike
                        onClick={() => handleReaction(Reaction.Dislike)}
                    />
                ) : (
                    <BiDislike
                        onClick={() => handleReaction(Reaction.Dislike)}
                    />
                )}
                <BiDislike />
                <p>
                    {userReaction === Reaction.Dislike
                        ? dislikes + 1
                        : dislikes}
                </p>
            </div>
            {isExpanded && <ReviewComments reviewId={review.id} />}
            <button onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Show less" : "Show more"}
            </button>
        </div>
    );
};

export default Review;
