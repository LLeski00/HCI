import { getFavouriteResortIdsByUserId } from "@/app/api/favourite-resort";
import { useEffect, useState } from "react";

export function useFavourites(userId: string | null) {
    const [favouriteIds, setFavouriteIds] = useState<string[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (userId) {
            fetchFavouriteResorts(userId);
        } else {
            setFavouriteIds(null);
        }
    }, [userId]);

    const fetchFavouriteResorts = async (userId: string) => {
        setIsLoading(true);
        try {
            const resortIds = await getFavouriteResortIdsByUserId(userId);
            setFavouriteIds(resortIds);
        } catch (err) {
            console.error("Error fetching favourite resorts:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return { favouriteIds, isLoading };
}
