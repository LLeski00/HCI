"use client";

import { FC } from "react";
import FavouriteIcon from "../../_components/favouriteIcon";
import { User } from "@/types/user";

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
