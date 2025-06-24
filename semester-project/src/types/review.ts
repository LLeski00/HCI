import { User } from "./user";

type Review = {
    id: string;
    user_id: string;
    resort_id: string;
    rating: number | null;
    text: string | null;
};

type ReviewInfo = {
    id: string;
    user: User;
    resort_id: string;
    rating: number | null;
    text: string | null;
};

export type { Review, ReviewInfo };
