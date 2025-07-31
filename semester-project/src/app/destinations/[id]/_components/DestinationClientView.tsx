"use client";

import HeroSection from "@/components/hero/hero";
import { ResortInfo } from "@/types/resort";
import { FC } from "react";
import FavouriteResortSection from "./FavouriteResortSection";
import TearEffect from "@/components/tearEffect/tearEffect";
import { FaMountain, FaPersonSkiing } from "react-icons/fa6";
import { TbAerialLift } from "react-icons/tb";
import { GiTwoCoins } from "react-icons/gi";
import Carousel from "@/components/carousel/carousel";
import Loading from "@/components/loading/Loading";
import Reviews from "./Reviews";
import { useAuth } from "@/context/AuthContext";
import { useFavourites } from "@/hooks/useFavourites";

interface DestinationClientViewProps {
    destination: ResortInfo;
}

const DestinationClientView: FC<DestinationClientViewProps> = ({
    destination,
}) => {
    const { user } = useAuth();
    const { favouriteIds, isLoading } = useFavourites(user?.id ?? null);

    if (isLoading) {
        return <Loading />;
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
                <FavouriteResortSection
                    resortId={destination.id}
                    favouriteIds={favouriteIds}
                    user={user}
                />

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
};

export default DestinationClientView;
