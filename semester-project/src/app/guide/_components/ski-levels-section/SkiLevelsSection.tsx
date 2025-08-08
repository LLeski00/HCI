import { FC } from "react";

interface SkiLevelSectionProps {
    skiLevelSectionHeader: string;
    skiLevelSectionItem1: string;
    skiLevelSectionItem2: string;
    skiLevelSectionItem3: string;
}

const SkiLevelSection: FC<SkiLevelSectionProps> = ({
    skiLevelSectionHeader,
    skiLevelSectionItem1,
    skiLevelSectionItem2,
    skiLevelSectionItem3,
}) => {
    return (
        <section className="levels-section">
            <h3>{skiLevelSectionHeader}</h3>
            <ul className="levels-content">
                <li>{skiLevelSectionItem1}</li>
                <li>{skiLevelSectionItem2}</li>
                <li>{skiLevelSectionItem3}</li>
            </ul>
        </section>
    );
};

export default SkiLevelSection;
