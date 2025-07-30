"use client";

import { useAuth } from "@/context/AuthContext";
import EditProfile from "./_components/edit-profile/EditProfile";
import { Navbar } from "@/components/navbar/navbar";

export default function Profile() {
    const { user } = useAuth();

    return (
        <div>
            <Navbar />
            <EditProfile />
        </div>
    );
}