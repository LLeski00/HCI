"use client";

import { handleFavouriteResort } from "@/app/api/favourite-resort";
import { FC, useEffect, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

interface FavouriteIconProps {
    initialIsFavourite: boolean;
    userId: string;
    resortId: string;
}

const FavouriteIcon: FC<FavouriteIconProps> = ({
    initialIsFavourite,
    userId,
    resortId,
}) => {
    const [isFavourite, setIsFavourite] = useState<boolean>(initialIsFavourite);

    useEffect(() => {
        setIsFavourite(initialIsFavourite);
    }, [initialIsFavourite]);

    const handleHeartClick = async (event: React.MouseEvent<SVGElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setIsFavourite(!isFavourite);
        handleFavouriteResort({ userId, resortId });
    };

    return (
        <>
            {isFavourite ? (
                <GoHeartFill onClick={handleHeartClick} />
            ) : (
                <GoHeart onClick={handleHeartClick} />
            )}
        </>
    );
};

export default FavouriteIcon;
