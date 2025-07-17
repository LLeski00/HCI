"use client";

import { useEffect, useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createClient } from "@/lib/supabase/client";
import { UserState } from "@/types/user";
import { getUserById } from "@/api/user";

const supabase = createClient();

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserState | null>(null);

    const loadUserFromSession = async () => {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error || !session) {
            setUser(null);
            return;
        }

        const supabaseUser = session.user;
        const userProfile = await getUserById(supabaseUser.id);

        if (userProfile) {
            setUser({ user: supabaseUser, profile: userProfile });
        } else {
            setUser(null);
        }
    };

    useEffect(() => {
        loadUserFromSession();

        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (_event, session) => {
                if (session?.user) {
                    const userProfile = await getUserById(session.user.id);
                    setUser(userProfile ? { user: session.user, profile: userProfile } : null);
                } else {
                    setUser(null);
                }
            }
        );

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    const value = useMemo(() => ({ user, setUser }), [user]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
