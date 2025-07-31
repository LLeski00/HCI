"use client";

import { FC, useState } from "react";
import ReviewCommentList from "./ReviewCommentList";
import { createComment } from "@/app/api/review-comment";
import { CommentReq } from "@/types/comment";
import { useAuth } from "@/context/AuthContext";

interface ReviewCommentsProps {
    reviewId: string;
}

const ReviewComments: FC<ReviewCommentsProps> = ({ reviewId }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
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
        await createComment(newComment);
        form.reset();
    }

    return (
        <div className="comments">
            {isExpanded && <ReviewCommentList reviewId={reviewId} />}
            <button onClick={() => setIsExpanded((prev) => !prev)}>
                {isExpanded ? "Hide Comments" : "Show Comments"}
            </button>
            {user && (
                <>
                    <h3>Leave a comment:</h3>
                    <form onSubmit={handleSubmitComment}>
                        <textarea
                            name="comment"
                            placeholder="Write your comment here..."
                            required
                        ></textarea>
                        <button type="submit">Post</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default ReviewComments;
