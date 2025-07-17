import { User } from "./user";

export type Comment = {
    id: string;
    user: User;
    text: string;
    createdAt: Date;
};

export type CommentReq = {
    userId: string;
    reviewId: string;
    text: string;
};
