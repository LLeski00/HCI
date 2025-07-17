import { User as SupabaseAuthUser } from "@supabase/auth-js";

export type User = {
        id: string;
        email: string;
        name: string;
        profile_image?: string | null;
};

export type UserState = {
        user: SupabaseAuthUser;
        profile: User;
};
