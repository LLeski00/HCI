export enum Reaction {
    Like = "like",
    Dislike = "dislike",
}

export type ReactionData = {
    reaction: Reaction;
    userId: string;
};

export type ReactionReq = {
    userId: string;
    reviewId: string;
    reaction: Reaction;
};
