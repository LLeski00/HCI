"use client";

import { getReviewCommentsByReviewId } from "@/app/api/review-comment";
import Loading from "@/components/loading/Loading";
import { Comment } from "@/types/comment";
import { FC, useEffect, useState } from "react";
import styles from './review-comment-list.module.css';
import UserHeader from "@/components/user/userHeader";

interface ReviewCommentListProps {
    reviewId: string;
}

const ReviewCommentList: FC<ReviewCommentListProps> = ({ reviewId }) => {
    const [comments, setComments] = useState<Comment[] | null>(null);

    useEffect(() => {
        async function fetchComments() {
            const fetchedComments = await getReviewCommentsByReviewId(reviewId);
            setComments(fetchedComments);
        }
        fetchComments();
    }, [reviewId]);

    return (
        <div className={styles.commentsSection}>
            {comments ? (
                comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className={styles.commentContent}>

                            <UserHeader user={comment.user} />

                            <div>
                                <p className={styles.commentText}>{comment.text}</p>
                                <p className={styles.date}>
                                    {new Date(
                                        comment.createdAt
                                    ).toLocaleDateString()}
                                </p>
                            </div>

                        </div>
                    ))
                ) : (
                    <p>No comments available for this review.</p>
                )
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default ReviewCommentList;
