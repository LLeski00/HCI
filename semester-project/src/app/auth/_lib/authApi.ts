"use client";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

async function signUp(name: string, email: string, password: string) {
        const { data: authData, error: authError } = await supabase.auth.signUp(
                {
                        email,
                        password,
                }
        );

        if (authError) {
                throw authError;
        }

        const { error: profileError } = await supabase.from("users").insert({
                id: authData?.user?.id,
                email,
                name,
                created_at: new Date().toISOString(),
        });

        console.log("user is written in database:", profileError);

        if (profileError) {
                await supabase.auth.admin.deleteUser(authData.user?.id!);
                throw profileError;
        }

        return authData;
}

async function signIn(email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
        });

        if (error) {
                throw error;
        }

        return data;
}

async function signOut() {
        const { error } = await supabase.auth.signOut();
        if (error) {
                throw error;
        }
}

export { signUp, signIn, signOut };
