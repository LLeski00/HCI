import Link from "next/link";
import { FaPersonSkiing } from "react-icons/fa6";
import { GiTwoCoins } from "react-icons/gi";
import { TbAerialLift } from "react-icons/tb";
import { IoIosStar } from "react-icons/io";
import { getTotalDistance } from "@/utils/getDistance";
import { ResortInfoWithoutCoordinates } from "@/types/resort";
import { User } from "@/types/user";
import styles from './resort-card.module.css';
import FavouriteIcon from "../favourite-icon/FavouriteIcon";

interface ResortCardProps {
    resort: ResortInfoWithoutCoordinates;
    isFavourite: boolean;
    user?: User | null;
}
export default function ResortCard({
    resort,
    isFavourite,
    user,
}: ResortCardProps, {
}) {
    if (!resort) return null;

    const totalSlopeDistance = getTotalDistance(
        resort.easySlopes ?? 0,
        resort.intermediateSlopes ?? 0,
        resort.difficultSlopes ?? 0
    );

    return (
        <div key={resort.id} className={styles.resortContainer}>
            <Link href={`/resorts/${resort.id}`}>
                <div className={styles.imageContainer}>
                    <img
                        src={resort.images?.[0] || "/images/1.jpg"}
                        alt="Resort"
                    />
                    <div className={styles.iconContent}>
                        <IoIosStar className={styles.filledStar} />
                        <p>{resort.review}</p>
                    </div>

                    {user && (
                        <div className={styles.starContent}>
                            <FavouriteIcon
                                userId={user.id}
                                initialIsFavourite={isFavourite}
                                resortId={resort.id}
                            />
                        </div>
                    )}
                </div>


                <div className={styles.resortDetails}>
                    <div className={styles.titleContent}>
                        <h4>
                            {resort.name || ""}
                            <span>({resort.country || ""})</span>
                        </h4>
                    </div>

                    <div className={styles.resortInfo}>
                        <div className={styles.resortInfoItem}>
                            <FaPersonSkiing />
                            <span>{totalSlopeDistance} km</span>
                        </div>
                        <div className={styles.resortInfoItem}>
                            <TbAerialLift />
                            <span>{resort.skiLift || 0}</span>
                        </div>
                        <div className={styles.resortInfoItem}>
                            <GiTwoCoins />
                            <span>
                                {resort.adultPrice || "Price not available"} €
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
