"use client";

import { ReviewInfo } from "@/types/review";
import { FC, useState } from "react";
import { IoIosStar } from "react-icons/io";
import ReviewComments from "./ReviewComments";
import { Reaction } from "@/types/reaction";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { useAuth } from "@/context/AuthContext";

interface ReviewProps {
    review: ReviewInfo;
}

interface ReactionCount {
    likes: number;
    dislikes: number;
}

const Review: FC<ReviewProps> = ({ review }) => {
    const snippet: string = review.text ? review.text.slice(0, 50) + "..." : "";
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [userReaction, setUserReaction] = useState<Reaction | null>(null);
    const reactions: ReactionCount = getReactionCount();
    const { user } = useAuth();

    function handleReaction(reaction: Reaction) {
        if (userReaction === reaction) setUserReaction(null);
        else setUserReaction(reaction);
    }

    function getReactionCount(): ReactionCount {
        return (review.reactions ?? []).reduce(
            (acc, r) => {
                if (r.reaction === Reaction.Like) acc.likes++;
                else if (r.reaction === Reaction.Dislike) acc.dislikes++;

                if (r.userId === user?.id) setUserReaction(r.reaction);

                return acc;
            },
            { likes: 0, dislikes: 0 }
        );
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
                <p>
                    {userReaction === Reaction.Like
                        ? reactions.likes + 1
                        : reactions.likes}
                </p>
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
                <p>
                    {userReaction === Reaction.Dislike
                        ? reactions.dislikes + 1
                        : reactions.dislikes}
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
