"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import style from "./carousel.module.css";
import { useState } from "react";
import ImageModal from "../image-modal/ImageModal";
import { ResortInfo } from "@/types/resort";
import ResortDisplay from "../resort-display/ResortDisplay";

interface CarouselProps {
    data: ResortInfo | ResortInfo[];
    mode: "images" | "resorts";
}

export default function Carousel({ data, mode }: CarouselProps) {
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
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        grabCursor={true}
                        style={{ width: "100%" }}
                    >

                        {mode == "images" ? (
                            (data as ResortInfo).images?.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={image}
                                        alt={`Slide ${index}`}
                                        onClick={() => openFullScreen(index)}
                                    />
                                </SwiperSlide>
                            ))
                        ) : (
                            (data as ResortInfo[]).map((resort) => (
                                <SwiperSlide key={resort.id}>
                                    <ResortDisplay resort={resort} />
                                </SwiperSlide>

                            )))}

                    </Swiper>
                </div>

                <button className={`swiper-button-next ${style.swiperBottun}`}>
                    ❯
                </button>
            </div>

            <ImageModal
                isOpen={isFullscreen}
                images={(data as ResortInfo).images || []}
                currentIndex={currentIndex}
                onClose={closeFullscreen}
            />
        </>
    );
}
