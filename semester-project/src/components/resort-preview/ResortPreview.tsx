import Link from "next/link";
import { ResortInfoWithoutCoordinates } from "@/types/resort";
import { User } from "@/types/user";
import FavouriteIcon from "@/components/favourite-icon/FavouriteIcon";
import styles from './resort-preview.module.css';

interface ResortCardProps {
    resort: ResortInfoWithoutCoordinates;
    isFavourite: boolean;
    user?: User | null;
}
export default function ResortPreview({
    resort,
    isFavourite,
    user,
}: ResortCardProps, {
}) {
    if (!resort) return null;

    return (
        <div key={resort.id} className={styles.resortContainer}>
            <Link href={`/resorts/${resort.id}`}>
                <div
                    className={styles.mutedBackground}
                    style={{ backgroundImage: `url(${resort.images?.[0] || "/images/1.jpg"})` }}
                >
                    <div className={styles.overlay}>

                        {user && (
                            <div className={styles.starContent}>
                                <FavouriteIcon
                                    userId={user.id}
                                    initialIsFavourite={isFavourite}
                                    resortId={resort.id}
                                />
                            </div>
                        )}

                        <h3 className={styles.resortName}>
                            {resort.name || ""} <span>({resort.country || ""})</span>
                        </h3>
                    </div>
                </div>
            </Link>
        </div>
    );
}
