'use client';
import React, { useState } from 'react';
import styles from './imageModal.module.css';
import Image from 'next/image';

interface FullScreenImage {
  isOpen: boolean;
  currentIndex: number;
  images: string[];
  onClose: () => void;
}

export default function ImageModal({
  isOpen,
  currentIndex,
  images,
  onClose,
}: FullScreenImage) {
  if (!isOpen) return null;

  const [slideIndex, setSlideIndex] = useState(currentIndex);

  const goToNextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.fullscreenOverlay} onClick={onClose}>
      <button className={styles.closeButton} onClick={onClose}>
        ✕
      </button>
      <div
        className={styles.overlayContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.arrowButton} onClick={goToPrevSlide}>
          {' '}
          ❮{' '}
        </button>
        <div className={styles.fullscreenContent}>
          <Image
            src={images[slideIndex]}
            alt={`Slide ${slideIndex}`}
            fill
            className={styles.fullscreenImage}
            sizes="70vw"
          />
        </div>
        <button className={styles.arrowButton} onClick={goToNextSlide}>
          {' '}
          ❯{' '}
        </button>
      </div>
    </div>
  );
}
