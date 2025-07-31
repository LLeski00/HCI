import { Metadata } from "next";
import HeroSection from "@/components/hero/hero";
import { getResortById } from "../_lib/api";
import { FaPersonSkiing, FaMountain } from "react-icons/fa6";
import { TbAerialLift } from "react-icons/tb";
import { GiTwoCoins } from "react-icons/gi";
import "./resort.css";
import TearEffect from "@/components/tearEffect/tearEffect";
import Carousel from "@/components/carousel/carousel";
import Reviews from "./_components/Reviews";
import FavouriteResortSection from "./_components/FavouriteResortSection";
export const metadata: Metadata = {
    title: "Destination",
};

type DestinationProps = {
    params: { id: string; name: string };
};

export default async function DestinationDestination({
    params,
}: DestinationProps) {
    const destination = await getResortById(params.id);
    if (!destination) {
        return <div>Destination not found</div>;
    }

    return (
        <>
            <HeroSection
                titleTop=""
                titleBottom={destination.name || ""}
                description={destination.country || ""}
                backgroundImage={destination.images?.[0] || "/images/2.jpg"}
            />

            <main>
                <FavouriteResortSection resortId={destination.id} />

                <div className="info-description">
                    <p>{destination.description || ""}</p>
                </div>

                <TearEffect darkBackground={true} />
                <div className="info-container">
                    <div className="info-content">
                        <div className="info-item">
                            <FaMountain />
                            <h3>Elevation</h3>
                            <div className="item-content">
                                <p>
                                    {destination.elevation ||
                                        "No elevation info"}
                                </p>
                            </div>
                        </div>
                        <div className="info-item">
                            <TbAerialLift className="lift" />
                            <h3>Ski lifts</h3>
                            <div className="item-content">
                                <p>Total lifts: {destination.skiLift || 0}</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaPersonSkiing />
                            <h3>Slope length</h3>
                            <div className="item-content table">
                                <p>
                                    easy slopes: {destination.easySlopes || 0}{" "}
                                    km
                                </p>
                                <p>
                                    intermediate slopes:{" "}
                                    {destination.intermediateSlopes || 0} km
                                </p>
                                <p>
                                    difficult slopes:{" "}
                                    {destination.difficultSlopes || 0} km
                                </p>
                            </div>
                        </div>
                        <div className="info-item">
                            <GiTwoCoins />
                            <h3>Price</h3>
                            <div className="item-content table">
                                <p>
                                    Adults:{" "}
                                    {destination.adultPrice ||
                                        "Price not available"}{" "}
                                    €
                                </p>
                                <p>
                                    Children:{" "}
                                    {destination.youthPrice ||
                                        "Price not available"}{" "}
                                    €
                                </p>
                            </div>
                        </div>
                    </div>
                    <TearEffect />
                </div>
                <div className="images-content">
                    <h2>Resort images</h2>
                    <Carousel destination={destination} />
                </div>
                <TearEffect darkBackground={true} />
                <Reviews resort={destination} />
            </main>
        </>
    );
}
