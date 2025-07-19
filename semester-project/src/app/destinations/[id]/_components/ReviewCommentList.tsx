"use client";

import { getReviewCommentsByReviewId } from "@/app/api/review-comment";
import { Comment } from "@/types/comment";
import { FC, useEffect, useState } from "react";

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
        <div className="comment-list">
            {comments ? (
                comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className="comment">
                            <p>
                                <strong>{comment.user.name}</strong>:
                            </p>
                            <p>{comment.text}</p>
                            <p className="comment-date">
                                {new Date(
                                    comment.createdAt
                                ).toLocaleDateString()}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No comments available for this review.</p>
                )
            ) : (
                <p>Loading comments...</p>
            )}
        </div>
    );
};

export default ReviewCommentList;
