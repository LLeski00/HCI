import { ReactionData } from "./reaction";
import { User } from "./user";

type Review = {
    id: string;
    userId: string;
    resortId: string;
    rating: number;
    text: string | null;
    createdAt: Date;
};

type ReviewInfo = {
    id: string;
    user: User;
    resortId: string;
    rating: number;
    text: string | null;
    reactions?: ReactionData[];
    createdAt: Date;
};

type ReviewReq = {
    userId: string;
    resortId: string;
    rating: number;
    text: string | null;
};

export type { Review, ReviewInfo, ReviewReq };
