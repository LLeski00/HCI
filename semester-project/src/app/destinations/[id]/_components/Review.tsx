"use client";

import { ReviewInfo } from "@/types/review";
import { FC, useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import ReviewComments from "./ReviewComments";
import { Reaction, ReactionReq } from "@/types/reaction";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { useAuth } from "@/context/AuthContext";
import {
    createReviewReaction,
    deleteReviewReaction,
} from "@/app/api/review-reaction";

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
    const { user } = useAuth();
    const reactions: ReactionCount = getReactionCount();

    useEffect(() => {
        if (user && review.reactions) {
            const userReaction = review.reactions.find(
                (r) => r.userId === user.id
            );
            setUserReaction(userReaction ? userReaction.reaction : null);
        }
    }, [review.reactions, user]);

    function handleReaction(reaction: Reaction) {
        const reactionReq: ReactionReq = {
            userId: user!.id,
            reviewId: review.id,
            reaction: reaction,
        };

        if (userReaction === reaction) {
            setUserReaction(null);
            deleteReviewReaction(reactionReq);
            return;
        }

        createReviewReaction(reactionReq);
        setUserReaction(reaction);
    }

    function getReactionCount(): ReactionCount {
        return (review.reactions ?? []).reduce(
            (acc, r) => {
                if (r.reaction === Reaction.Like) acc.likes++;
                else if (r.reaction === Reaction.Dislike) acc.dislikes++;
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
                <p>{reactions.likes}</p>
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
                <p>{reactions.dislikes}</p>
            </div>
            {isExpanded && <ReviewComments reviewId={review.id} />}
            <button onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Show less" : "Show more"}
            </button>
        </div>
    );
};

export default Review;
