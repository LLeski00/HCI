import { getFavouriteResortIdsByUserId } from "@/app/api/favourite-resort";
import { useEffect, useState } from "react";

export function useFavourites(userId: string | null) {
    const [favouriteIds, setFavouriteIds] = useState<string[] | null>(null);

    useEffect(() => {
        if (userId) {
            fetchFavouriteResorts(userId);
        } else {
            setFavouriteIds(null);
        }
    }, [userId]);

    const fetchFavouriteResorts = async (userId: string) => {
        try {
            const resortIds = await getFavouriteResortIdsByUserId(userId);
            setFavouriteIds(resortIds);
        } catch (err) {
            throw new Error("Failed to fetch favourite resorts: " + err);
        }
    };

    return { favouriteIds };
}
