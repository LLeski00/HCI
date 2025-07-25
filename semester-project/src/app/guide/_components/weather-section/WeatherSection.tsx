import { FC } from "react";

interface WeatherSectionProps {
    weatherSectionHeader: string;
    weatherSectionParagraph: string;
}

const WeatherSection: FC<WeatherSectionProps> = ({
    weatherSectionHeader,
    weatherSectionParagraph,
}) => {
    return (
        <section>
            <h2>{weatherSectionHeader}</h2>
            <p>{weatherSectionParagraph}</p>
        </section>
    );
};

export default WeatherSection;
