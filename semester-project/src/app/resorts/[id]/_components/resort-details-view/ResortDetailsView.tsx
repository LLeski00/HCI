"use client";

import HeroSection from "@/components/hero/hero";
import { ResortInfo } from "@/types/resort";
import { FC } from "react";
import FavouriteResortSection from "../FavouriteResortSection";
import TearEffect from "@/components/tearEffect/tearEffect";
import { FaMountain, FaPersonSkiing } from "react-icons/fa6";
import { TbAerialLift } from "react-icons/tb";
import { GiTwoCoins } from "react-icons/gi";
import Carousel from "@/components/carousel/Carousel";
import Loading from "@/components/loading/Loading";
import Reviews from "../review/Reviews";
import { useAuth } from "@/context/AuthContext";
import { useFavourites } from "@/hooks/useFavourites";
import "../resort.css";

interface ResortDetailsViewProps {
    resort: ResortInfo;
}

const ResortDetailsView: FC<ResortDetailsViewProps> = ({
    resort,
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
                titleBottom={resort.name || ""}
                description={resort.country || ""}
                backgroundImage={resort.images?.[0] || "/images/2.jpg"}
            />

            <main>
                <FavouriteResortSection
                    resortId={resort.id}
                    favouriteIds={favouriteIds}
                    user={user}
                />

                <div className="info-description">
                    <p>{resort.description || ""}</p>
                </div>

                <TearEffect darkBackground={true} />
                <div className="info-container">
                    <div className="info-content">
                        <div className="info-item">
                            <FaMountain />
                            <h3>Elevation</h3>
                            <div className="item-content">
                                <p>
                                    {resort.elevation ||
                                        "No elevation info"}
                                </p>
                            </div>
                        </div>
                        <div className="info-item">
                            <TbAerialLift className="lift" />
                            <h3>Ski lifts</h3>
                            <div className="item-content">
                                <p>Total lifts: {resort.skiLift || 0}</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaPersonSkiing />
                            <h3>Slope length</h3>
                            <div className="item-content table">
                                <p>
                                    easy slopes: {resort.easySlopes || 0}{" "}
                                    km
                                </p>
                                <p>
                                    intermediate slopes:{" "}
                                    {resort.intermediateSlopes || 0} km
                                </p>
                                <p>
                                    difficult slopes:{" "}
                                    {resort.difficultSlopes || 0} km
                                </p>
                            </div>
                        </div>
                        <div className="info-item">
                            <GiTwoCoins />
                            <h3>Price</h3>
                            <div className="item-content table">
                                <p>
                                    Adults:{" "}
                                    {resort.adultPrice ||
                                        "Price not available"}{" "}
                                    €
                                </p>
                                <p>
                                    Children:{" "}
                                    {resort.youthPrice ||
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
                    <Carousel
                        data={resort}
                        mode="images" />
                </div>
                <TearEffect darkBackground={true} />
                <Reviews resort={resort} />
            </main>
        </>
    );
};

export default ResortDetailsView;
