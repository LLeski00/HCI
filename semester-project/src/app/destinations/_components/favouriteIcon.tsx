"use client";

import { User } from "@/types/user";
import { FC, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

interface FavouriteIconProps {
    initialIsFavourite: boolean;
    user: User;
}

const FavouriteIcon: FC<FavouriteIconProps> = ({
    initialIsFavourite,
    user,
}) => {
    const [isFavourite, setIsFavourite] = useState<boolean>(initialIsFavourite);

    const handleHeartClick = async () => {
        setIsFavourite(!isFavourite);
    };

    return (
        <>
            {isFavourite ? (
                <GoHeart onClick={handleHeartClick} />
            ) : (
                <GoHeartFill onClick={handleHeartClick} />
            )}
        </>
    );
};

export default FavouriteIcon;
