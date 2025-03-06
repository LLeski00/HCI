import React from 'react';
import { Navbar } from '../navbar/navbar';
import styles from "./hero.module.css";
import TearEffect from '../tearEffect/tearEffect';

interface HeroSectionProps {
    titleTop: string;
    titleBottom: string;
    description: string;
    backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ titleTop, titleBottom, description, backgroundImage }) => {
    return (
        <>
            <section className={styles.heroSection}
                    style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className={styles.heroOverlay}></div>
                <Navbar />
                <div className={styles.heroText}>
                    <h1 className={styles.heroHeading}>{titleTop}</h1>
                    <h1 className={` ${styles.heroHeading} ${styles.bottom}`}>{titleBottom}</h1>
                    <p>{description}</p>
                </div>
               
            </section>
            <TearEffect isHero={true} />
        </>
        
    );
};

export default HeroSection;