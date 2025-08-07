"use client";

import { useEffect, useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createClient } from "@/lib/supabase/client";
import { getUserById } from "@/api/user";
import { User } from "@/types/user";

const supabase = createClient();

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const loadUserFromSession = async () => {
        setIsLoading(true);
        const {
            data: { session },
            error: sessionError,
        } = await supabase.auth.getSession();
        if (sessionError || !session) {
            setUser(null);
            setIsLoading(false);
            return;
        }

        const supabaseUser = session.user;
        const userProfile = await getUserById(supabaseUser.id);

        setUser(userProfile ?? null);
        setIsLoading(false);
    };

    const signUp = async (name: string, email: string, password: string) => {
        const { data: signUpData, error: authError } =
            await supabase.auth.signUp({
                email,
                password,
            });

        if (authError) {
            throw authError;
        }

        const { error: insertProfileError } = await supabase
            .from("users")
            .insert({
                id: signUpData?.user?.id,
                email,
                name,
                created_at: new Date().toISOString(),
            });

        if (insertProfileError) {
            await supabase.auth.admin.deleteUser(signUpData.user?.id!);
            throw insertProfileError;
        }

        const userProfile = await getUserById(signUpData.user!.id);
        if (userProfile) {
            setUser(userProfile);
        }
    };

    const signIn = async (email: string, password: string) => {
        const { data: signInData, error: signInError } =
            await supabase.auth.signInWithPassword({
                email,
                password,
            });

        if (signInError) {
            throw signInError;
        }

        const userProfile = await getUserById(signInData.user.id);
        if (userProfile) {
            setUser(userProfile);
        }
    };

    const signOut = async () => {
        const { error: signOutError } = await supabase.auth.signOut();
        if (signOutError) {
            throw signOutError;
        }
        setUser(null);
    };

    useEffect(() => {
        loadUserFromSession();

        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (_event, session) => {
                if (session?.user) {
                    const userProfile = await getUserById(session.user.id);
                    setUser(userProfile);
                } else {
                    setUser(null);
                }
            }
        );

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    const value = useMemo(
        () => ({
            user,
            setUser,
            signUp,
            signIn,
            signOut,
            isLoading,
        }),
        [user, isLoading]
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
