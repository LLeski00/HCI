"use client";

import { FC, useEffect, useState } from "react";
import FavouriteIcon from "../../_components/favouriteIcon";
import { useAuth } from "@/context/AuthContext";
import { getFavouriteResortIdsByUserId } from "@/app/api/favourite-resort";

interface FavouriteResortSectionProps {
    resortId: string;
}

const FavouriteResortSection: FC<FavouriteResortSectionProps> = ({
    resortId,
}) => {
    const { user } = useAuth();
    const [favouriteIds, setFavouriteIds] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchFavouriteResorts = async () => {
            if (user) {
                const resortIds = await getFavouriteResortIdsByUserId(user.id);
                setFavouriteIds(resortIds);
            }
            setIsLoading(false);
        };
        fetchFavouriteResorts();
    }, [user]);

    if (isLoading || !user) {
        return null;
    }

    return (
        <div className="favourite">
            <p>Add resort to favourites</p>
            <FavouriteIcon
                userId={user.id}
                resortId={resortId}
                initialIsFavourite={favouriteIds.includes(resortId)}
            />
        </div>
    );
};

export default FavouriteResortSection;
