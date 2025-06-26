export type Blog = {
    id: string;
    userId: string;
    resortId: string;
    text: string;
};

export type BlogReq = {
    userId: string;
    resortId: string;
    text: string;
};
