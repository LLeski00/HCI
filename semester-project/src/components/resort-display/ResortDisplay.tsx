import Link from "next/link";
import { ResortInfoWithoutCoordinates } from "@/types/resort";
import { User } from "@/types/user";
import { IoIosStar } from "react-icons/io";
import styles from './resort-display.module.css';

interface ResortCardProps {
    resort: ResortInfoWithoutCoordinates;
}
export default function ResortDisplay({
    resort
}: ResortCardProps, {
}) {
    if (!resort) return null;

    return (
        <div key={resort.id} className={styles.resortContainer}>
            <Link href={`/resorts/${resort.id}`}>

                <h3 className={styles.resortName}>
                    {resort.name || ""} <span>({resort.country || ""})</span>
                </h3>

                <div className={styles.imageContainer}>
                    <img
                        src={resort.images?.[0] || "/images/1.jpg"}
                        alt="Resort"
                    />
                    <div className={styles.iconContent}>
                        <IoIosStar className={styles.filledStar} />
                        <p>{resort.review}</p>
                    </div>
                </div>

            </Link>
        </div>
    );
}
