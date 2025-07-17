import { getReviewCommentsByReviewId } from "@/app/api/review-comment";
import { Comment } from "@/types/comment";
import { FC } from "react";

interface ReviewCommentListProps {
    reviewId: string;
}

const ReviewCommentList: FC<ReviewCommentListProps> = async ({ reviewId }) => {
    const comments: Comment[] = await getReviewCommentsByReviewId(reviewId);

    return (
        <div className="comment-list">
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        <p>
                            <strong>{comment.user.name}</strong>:
                        </p>
                        <p>{comment.text}</p>
                        <p className="comment-date">
                            {new Date(comment.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                ))
            ) : (
                <p>No comments available for this review.</p>
            )}
        </div>
    );
};

export default ReviewCommentList;
