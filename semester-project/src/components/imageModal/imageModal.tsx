"use client";
import React, { useState } from "react";
import styles from "./imageModal.module.css";

interface FullScreenImage {
    isOpen: boolean;
    currentIndex: number;
    images: string[];
    onClose: () => void;
}

export default function ImageModal ({ isOpen, currentIndex, images, onClose } : FullScreenImage) {
    if (!isOpen) return null;

    const [slideIndex, setSlideIndex] = useState(currentIndex);
    
    const goToNextSlide = () => {
        setSlideIndex((prev) => (prev + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setSlideIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className={styles.fullscreenOverlay}>
            <button className={styles.closeButton} onClick={onClose}>
                X
            </button>
            <div className={styles.overlayContent}>
                <button className={styles.arrowButton} onClick={goToPrevSlide}> ❮ </button>
                <div className={styles.fullscreenContent}>
                    <img src={images[slideIndex]} alt={`Slide ${slideIndex}`} />
                </div>
                <button className={styles.arrowButton} onClick={goToNextSlide}> ❯ </button>
            </div>
            
        </div>
    );
};
