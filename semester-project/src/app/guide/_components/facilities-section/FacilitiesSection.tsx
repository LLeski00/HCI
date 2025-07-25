import { FC } from "react";

interface FacilitiesSectionProps {
    facilitiesSectionHeader: string;
    facilitiesSectionParagraph: string;
}

const FacilitiesSection: FC<FacilitiesSectionProps> = ({
    facilitiesSectionHeader,
    facilitiesSectionParagraph,
}) => {
    return (
        <section>
            <h2>{facilitiesSectionHeader}</h2>
            <p>{facilitiesSectionParagraph}</p>
        </section>
    );
};

export default FacilitiesSection;
