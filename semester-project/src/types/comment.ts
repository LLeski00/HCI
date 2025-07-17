import { User } from "./user";

export type Comment = {
    user: User;
    text: string;
    createdAt: Date;
};
