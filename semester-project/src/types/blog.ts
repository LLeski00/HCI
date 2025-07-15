import { ResortInfo } from "@/app/destinations/types/resort";
import { User } from "./user";

export type Blog = {
    id: string;
    userId: string;
    resortId: string;
    text: string;
};

export type BlogInfo = {
    id: string;
    user: User;
    resort: ResortInfo | null;
    text: string;
};

export type BlogReq = {
    userId: string;
    resortId: string;
    text: string;
};
