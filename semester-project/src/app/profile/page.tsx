"use client";

import { useAuth } from "@/context/AuthContext";
import EditProfile from "./_components/edit-profile/EditProfile";
import { Navbar } from "@/components/navbar/navbar";
import { useEffect, useState } from "react";
import { getFavouriteResortsByUserId } from "../api/favourite-resort";
import ResortCard from "@/components/resort-card/ResortCard";
import { ResortInfoWithoutCoordinates } from "@/types/resort";

export default function Profile() {
    const { user } = useAuth();
    const [userFavorites, setUserFavorites] = useState<ResortInfoWithoutCoordinates[]>([]);
    useEffect(() => {
        async function nesto() {
            if (user?.id) {
                const fav = await getFavouriteResortsByUserId(user.id);
                setUserFavorites(fav);
            }
        }
        nesto();
    }, [user]);

    return (
        <div>
            <Navbar />
            <EditProfile />

            <div>
                <h2>Favorite resorts</h2>
                {userFavorites.map(resort => (
                    <ResortCard
                        resort={resort}
                        isFavourite={true}
                        user={user} />
                )

                )}
            </div>
        </div>
    );
}