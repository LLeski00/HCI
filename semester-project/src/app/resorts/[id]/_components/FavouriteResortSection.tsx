"use client";

import { FC } from "react";
import FavouriteIcon from "../../../../components/favourite-icon/FavouriteIcon";
import { useAuth } from "@/context/AuthContext";
import { useFavourites } from "@/hooks/useFavourites";

interface FavouriteResortSectionProps {
    resortId: string;
}

const FavouriteResortSection: FC<FavouriteResortSectionProps> = ({
    resortId,
}) => {
    const { user } = useAuth();
    const { favouriteIds } = useFavourites(user?.id ?? null);

    return (
        <>
            {favouriteIds && (
                <div className="favourite">
                    <p>Add resort to favourites</p>
                    <FavouriteIcon
                        userId={user!.id}
                        resortId={resortId}
                        initialIsFavourite={favouriteIds.includes(resortId)}
                    />
                </div>
            )}
        </>
    );
};

export default FavouriteResortSection;
