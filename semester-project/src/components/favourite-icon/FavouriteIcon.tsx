"use client";

import { handleFavouriteResort } from "@/app/api/favourite-resort";
import { FC, useEffect, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import styles from './favourite-icon.module.css';
import toast from "react-hot-toast";

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

        const newState = !isFavourite;
        setIsFavourite(newState);

        handleFavouriteResort({ userId, resortId });
        newState ? toast.success("Resort liked!") : toast.success("Resort unliked!");
    };

    return (
        <>
            {isFavourite ? (
                <GoHeartFill onClick={handleHeartClick}
                    className={styles.heartIcon} />
            ) : (
                <GoHeart onClick={handleHeartClick}
                    className={styles.heartIcon} />
            )}
        </>
    );
};

export default FavouriteIcon;
