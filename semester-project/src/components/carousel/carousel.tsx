"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import style from "./carousel.module.css";
import { useState } from "react";
import ImageModal from "../image-modal/imageModal";
import { ResortInfo } from "@/types/resort";

export default function Carousel({ destination }: { destination: ResortInfo }) {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openFullScreen = (index: number) => {
        setCurrentIndex(index);
        setIsFullscreen(true);
    };
    const closeFullscreen = () => {
        setIsFullscreen(false);
    };

    return (
        <>
            <div className={style.carouselWrapper}>
                <button className={`swiper-button-prev ${style.swiperBottun}`}>
                    ❮
                </button>

                <div className={style.swiperContainer}>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        navigation={{
                            prevEl: ".swiper-button-prev",
                            nextEl: ".swiper-button-next",
                        }}
                    >
                        {destination.images?.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`Slide ${index}`}
                                    onClick={() => openFullScreen(index)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <button className={`swiper-button-next ${style.swiperBottun}`}>
                    ❯
                </button>
            </div>

            <ImageModal
                isOpen={isFullscreen}
                images={destination.images || []}
                currentIndex={currentIndex}
                onClose={closeFullscreen}
            />
        </>
    );
}
