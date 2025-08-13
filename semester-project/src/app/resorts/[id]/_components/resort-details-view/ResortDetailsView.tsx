"use client";

import HeroSection from "@/components/hero/Hero";
import { ResortInfo } from "@/types/resort";
import { FC } from "react";
import FavouriteResortSection from "../FavouriteResortSection";
import { FaMountain, FaPersonSkiing } from "react-icons/fa6";
import { TbAerialLift } from "react-icons/tb";
import { GiTwoCoins } from "react-icons/gi";
import Carousel from "@/components/carousel/Carousel";
import Loading from "@/components/loading/Loading";
import Reviews from "../review/Reviews";
import { useAuth } from "@/context/AuthContext";
import { useFavourites } from "@/hooks/useFavourites";
import "../resort.css";
import WeatherData from "../weather-data/WeatherData";

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

    const easy = resort.easySlopes || 0;
    const intermediate = resort.intermediateSlopes || 0;
    const difficult = resort.difficultSlopes || 0;
    const maxSlope = Math.max(easy, intermediate, difficult);

    return (
        <>
            <HeroSection
                titleTop=""
                titleBottom={resort.name || ""}
                description={resort.country || ""}
                backgroundImage={resort.images?.[0] || "/images/2.jpg"}
            />

            <main>

                <div className="info-description">
                    <p>{resort.description || ""}</p>
                </div>
                <FavouriteResortSection
                    resortId={resort.id}
                    favouriteIds={favouriteIds}
                    user={user}
                />

                {/*<TearEffect darkBackground={true} />*/}
                <section
                    className="info-container"
                    style={{ backgroundImage: `url(${resort.images?.[1] || "/images/skiResort.avif"})` }}>
                    <div className="overlay"></div>
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
                            <div className="item-content">

                                <div className="item-content">
                                    <p>easy slopes: {easy} km</p>
                                    <div
                                        className="meter-bar easy"
                                        style={{ width: `${(easy / maxSlope) * 100}%` }}></div>

                                    <p>intermediate slopes: {intermediate} km</p>
                                    <div
                                        className="meter-bar intermediate"
                                        style={{ width: `${(intermediate / maxSlope) * 100}%` }}></div>

                                    <p>difficult slopes: {difficult} km</p>
                                    <div
                                        className="meter-bar difficult"
                                        style={{ width: `${(difficult / maxSlope) * 100}%` }}></div>
                                </div>
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
                    {/*<TearEffect />*/}
                </section>

                <WeatherData lat={resort.coordinates.latitude} lon={resort.coordinates.longitude} />

                <div className="images-content">
                    <h2>Resort images</h2>
                    {resort.images && resort.images.length > 0 ? (
                        <Carousel
                            data={resort}
                            mode="images"
                        />
                    ) : (
                        <p className="noImagesText">Still no images for this resort.</p>
                    )}
                </div>

                {/*<TearEffect darkBackground={true} />*/}
                <Reviews resort={resort} />
            </main>
        </>
    );
};

export default ResortDetailsView;
