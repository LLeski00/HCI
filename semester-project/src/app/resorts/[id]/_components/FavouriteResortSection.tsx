"use client";

import { FC } from "react";
import { User } from "@/types/user";
import FavouriteIcon from "@/components/favourite-icon/FavouriteIcon";

interface FavouriteResortSectionProps {
    resortId: string;
    favouriteIds: string[] | null;
    user: User | null;
}

const FavouriteResortSection: FC<FavouriteResortSectionProps> = ({
    resortId,
    favouriteIds,
    user,
}) => {
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
