"use client";

import { ReviewInfo } from "@/types/review";
import { FC, useEffect, useState } from "react";
import styles from './review.module.css';
import { FaStar, FaRegStar } from "react-icons/fa";
import ReviewComments from "./ReviewComments";
import { Reaction, ReactionReq } from "@/types/reaction";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { useAuth } from "@/context/AuthContext";
import {
    createReviewReaction,
    deleteReviewReaction,
} from "@/app/api/review-reaction";
import UserHeader from "@/components/user/userHeader";
import SigninPopup from "@/components/signin-popup/SigninPopup";
import toast from "react-hot-toast";

interface ReviewProps {
    review: ReviewInfo;
}

interface ReactionCount {
    likes: number;
    dislikes: number;
}

const Review: FC<ReviewProps> = ({ review }) => {
    const snippet: string = review.text ? review.text.slice(0, 140) + "..." : "";
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [userReaction, setUserReaction] = useState<Reaction | null>(null);
    const [showSigninPopup, setShowSigninPopup] = useState<boolean>(false);
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
        if (!user) {
            setShowSigninPopup(true);
            return;
        }

        const reactionReq: ReactionReq = {
            userId: user!.id,
            reviewId: review.id,
            reaction: reaction,
        };

        if (userReaction === reaction) {
            setUserReaction(null);
            deleteReviewReaction(reactionReq);
            reaction === Reaction.Like ? toast.success("Like removed") : toast.success("Unlike removed!");

            return;
        }

        createReviewReaction(reactionReq);
        setUserReaction(reaction);
        reaction === Reaction.Like ? toast.success("Liked review!") : toast.success("Unliked review!")
    }

    function getReactionCount(): ReactionCount {
        return (review.reactions ?? []).reduce(
            (acc, r) => {
                if (user && r.userId === user.id) return acc;
                if (r.reaction === Reaction.Like) acc.likes++;
                else if (r.reaction === Reaction.Dislike) acc.dislikes++;
                return acc;
            },
            { likes: 0, dislikes: 0 }
        );
    }

    return (
        <div className={styles.reviewContainer}>

            <UserHeader user={review.user} />

            <div className={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={styles.star}>
                        {star <= review.rating ? <FaStar /> : <FaRegStar />}
                    </span>
                ))}
                <p>({review.rating})</p>
            </div>

            <div className={styles.textContent}>
                {review.text && <p className={styles.ratingText}>{isExpanded ? review.text : snippet}</p>}
                <p className={styles.date}>{review.createdAt.toLocaleDateString()}</p>
            </div>


            <div className={styles.reactionContainer}>
                <div className={styles.reactionGroup}>
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
                </div>

                <div className={styles.reactionGroup}>
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
            </div>

            {isExpanded && <ReviewComments reviewId={review.id} />}
            <button onClick={() => setIsExpanded(!isExpanded)}
                className={styles.moreButton}>
                {isExpanded ? "Show less" : "Show more"}
            </button>

            {showSigninPopup && (
                <SigninPopup
                    onClose={() => setShowSigninPopup(false)}
                />
            )}
        </div>
    );
};

export default Review;
