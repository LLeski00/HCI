import { Button } from "@/components/button/button";
import { FC } from "react";

interface HomeSectionProps {
    header: string;
    paragraph: string;
}

const HomeSection: FC<HomeSectionProps> = async ({ header, paragraph }) => {
    return (
        <section className="home-section">
            <div className="text-content">
                <h2>{header}</h2>
                <p>{paragraph}</p>
                <Button text="EXPLORE" href="/" />
            </div>
            <div className="image-container">
                <img src="/images/skiing.jpg" />
            </div>
        </section>
    );
};

export default HomeSection;
