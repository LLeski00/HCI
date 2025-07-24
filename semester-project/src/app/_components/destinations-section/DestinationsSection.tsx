import { Button } from "@/components/button/button";
import { FC } from "react";

interface DestinationsSectionProps {
    header: string;
}

const DestinationsSection: FC<DestinationsSectionProps> = ({ header }) => {
    return (
        <section className="home-destinations-section">
            <h1>{header}</h1>
            {/*slideshow */}
            <div className="home-destinations">
                <div className="home-destination">
                    <h4>Les 2 alpes, France</h4>
                    <img src="/images/austria.jpg" />
                </div>
                <div className="home-destination">
                    <h4>Alta Badia, Italy</h4>
                    <img src="/images/altaBadia.jpg" />
                </div>
                <div className="home-destination">
                    <h4>Val Thorens, France</h4>
                    <img src="/images/valtores.jpg" />
                </div>
            </div>
            <Button text="VIEW MORE" href="/" />
        </section>
    );
};

export default DestinationsSection;
