"use client";

import { FC, useState } from "react";
import ReviewCommentList from "./ReviewCommentList";
import { createComment } from "@/app/api/review-comment";
import { CommentReq } from "@/types/comment";

interface ReviewCommentsProps {
    reviewId: string;
}

const ReviewComments: FC<ReviewCommentsProps> = async ({ reviewId }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    async function handleSubmitComment(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData: FormData = new FormData(e.currentTarget);
        const text: string = formData.get("comment") as string;
        const userId: string = "currentUserId"; // Replace with actual user id
        const newComment: CommentReq = {
            userId,
            reviewId,
            text,
        };
        await createComment(newComment);
        e.currentTarget.reset();
    }

    return (
        <div className="comments">
            {isExpanded && <ReviewCommentList reviewId={reviewId} />}
            <button onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Hide Comments" : "Show Comments"}
            </button>
            <h3>Leave a comment:</h3>
            <form
                onSubmit={(e) => {
                    handleSubmitComment(e);
                }}
            >
                <textarea
                    name="comment"
                    placeholder="Write your comment here..."
                    required
                ></textarea>
                <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default ReviewComments;
