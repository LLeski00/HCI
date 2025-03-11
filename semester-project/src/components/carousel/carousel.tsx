"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ResortInfo } from '@/app/destinations/types/resort';
import { Navigation } from 'swiper/modules';
import style from "./carousel.module.css";

export default function Carousel ({destination} : {destination:ResortInfo}) {
    return (
        <div className={style.carouselWrapper}>
            <button className={`swiper-button-prev ${style.swiperBottun}`}>❮</button>

            <div className={style.swiperContainer}>
                <Swiper modules={[Navigation]} 
                        spaceBetween={20} 
                        slidesPerView={3} 
                        loop={true}
                        navigation={{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }} >

                {destination.images?.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Slide ${index}`} />
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>

            <button className={`swiper-button-next ${style.swiperBottun}`}>❯</button>
        </div>
        
      );
}
