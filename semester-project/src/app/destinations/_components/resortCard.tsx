import Link from "next/link";
import { FaPersonSkiing } from "react-icons/fa6";
import { GiTwoCoins } from "react-icons/gi";
import { TbAerialLift } from "react-icons/tb";
import { IoIosStar } from "react-icons/io";
import { getTotalDistance } from "@/utils/getDistance";
import { ResortInfo } from "../types/resort";

export default function ResortCard ({resort}:{resort: ResortInfo}) {
    if(!resort)
        return null;
    
    const totalSlopeDistance = getTotalDistance(resort.easySlopes ?? '0', resort.intermediateSlopes ?? '0', resort.difficultSlopes ?? '0');

    return (
        <div key={resort.id} className="resort-container">
            <Link href={`/destinations/${resort.id}`}>

            <div className="resort-image-container">
                <img src={resort.images?.[0] || "/images/1.jpg"} alt="Resort" />
                <div className="icon-content">
                    <IoIosStar className="filled-star" />
                    <p>{resort.review}</p>
                </div>
            </div>

                <div className="resort-details">

                    <div className="resort-title-content">
                        <h4>{resort.name || ""}<span>({resort.country || ""})</span></h4>
                    </div>

                    <div className="resort-info">

                        <div className="resort-info-item">
                            <FaPersonSkiing />
                            <span>{totalSlopeDistance} km</span>
                        </div>
                        <div className="resort-info-item">
                            <TbAerialLift />
                            <span>{resort.skiLift || 0}</span>
                        </div>
                        <div className="resort-info-item">
                            <GiTwoCoins />
                            <span>{resort.adultPrice || "Price not available"} €</span>
                        </div>

                    </div>

                    {/*<div className="details-button">
                        <button>Details</button>
                    </div>*/}
                </div>
          
            </Link>
        </div>
    );
};
