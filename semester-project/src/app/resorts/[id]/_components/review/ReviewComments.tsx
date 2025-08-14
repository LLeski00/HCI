"use client";

import { FC, useState } from "react";
import ReviewCommentList from "./review-comments-list/ReviewCommentList";
import { createComment } from "@/app/api/review-comment";
import { CommentReq, Comment } from "@/types/comment";
import { useAuth } from "@/context/AuthContext";
import styles from './review.module.css';

interface ReviewCommentsProps {
    reviewId: string;
}

const ReviewComments: FC<ReviewCommentsProps> = ({ reviewId }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [newComment, setNewComment] = useState<Comment>();
    const { user } = useAuth();

    async function handleSubmitComment(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData: FormData = new FormData(form);
        const text: string = formData.get("comment") as string;
        const newComment: CommentReq = {
            userId: user!.id,
            reviewId,
            text,
        };
        const createdComment: Comment = await createComment(newComment);
        setNewComment(createdComment);
        form.reset();
    }

    return (
        <div>
            {isExpanded && <ReviewCommentList
                reviewId={reviewId}
                newComment={newComment} />}
            <button onClick={() => setIsExpanded((prev) => !prev)}
                className={styles.moreButton}>
                {isExpanded ? "Hide Comments" : "Show Comments"}
            </button>
            {user && (
                <div className={styles.leaveReview}>
                    <h4>Leave a comment:</h4>
                    <form onSubmit={handleSubmitComment}
                        className={styles.commentForm}>
                        <textarea
                            name="comment"
                            placeholder="Write your comment here..."
                            required
                            className={styles.commentTextarea}
                        ></textarea>
                        <button type="submit">Post</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ReviewComments;
