import "./rating.css";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

interface CustomRatingProps {
    rating: number;
}

export function Rating({ rating }: CustomRatingProps) {
    const clampedRating = Math.min(Math.max(rating, 0), 5);

    return (
        <div className="custom-rating">
            {Array.from({ length: 5 }, (_, index) =>
                index < clampedRating ? (
                    <IoIosStar key={index} className="filled-star" />
                ) : (
                    <IoIosStarOutline key={index} className="empty-star" />
                )
            )}
        </div>
    );
}
