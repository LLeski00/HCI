import { Button } from "@/components/button/Button";
import { FC } from "react";

interface HomeSectionProps {
    header: string;
    paragraph: string;
}

const HomeSection: FC<HomeSectionProps> = async ({ header, paragraph }) => {
    return (
        <section className="home-section">
            <div className="home-content">
                <div className="title-content start">
                    <h2>{header}</h2>
                    <p>{paragraph}</p>
                    <Button text="EXPLORE" href="/guide" />
                </div>
                <div className="home-image-container">
                    <img src="/images/skiing.jpg" alt="Skiing" />
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
